import { Product } from '@/types/product';
import { useState, useEffect } from 'react';

interface ProductsTableProps {
    products: Product[];
    onUpdate: (id: string) => void;
    onDelete: (product: Product) => void;
    onSaveChanges: (changes: { productId: string; newQuantity: number }[]) => Promise<void>;
}

interface QuantityChange {
    productId: string;
    newQuantity: number;
    originalQuantity: number;
}

export default function ProductsTable({ 
    products, 
    onUpdate, 
    onDelete,
    onSaveChanges 
}: ProductsTableProps) {
    const [pendingChanges, setPendingChanges] = useState<QuantityChange[]>([]);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        setPendingChanges([]);
    }, [products]);

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        if (newQuantity < 0) return;

        // Find the original product
        const product = products.find(p => p._id === productId);
        if (!product) return;

        // Update or add to pending changes
        setPendingChanges(current => {
            const existingChangeIndex = current.findIndex(c => c.productId === productId);
            
            if (existingChangeIndex >= 0) {
                // If reverting to original quantity, remove from pending changes
                if (newQuantity === current[existingChangeIndex].originalQuantity) {
                    return current.filter(c => c.productId !== productId);
                }
                // Otherwise update the pending change
                const newChanges = [...current];
                newChanges[existingChangeIndex] = {
                    ...newChanges[existingChangeIndex],
                    newQuantity
                };
                return newChanges;
            }

            // Add new change if quantity is different from original
            if (newQuantity !== product.quantity) {
                return [...current, {
                    productId,
                    newQuantity,
                    originalQuantity: product.quantity
                }];
            }

            return current;
        });
    };

    const handleSaveChanges = async () => {
        setIsSaving(true);
        try {
            await onSaveChanges(pendingChanges.map(change => ({
                productId: change.productId,
                newQuantity: change.newQuantity
            })));
            setPendingChanges([]); // Clear pending changes after successful save
        } finally {
            setIsSaving(false);
        }
    };

    const getProductQuantityChange = (productId: string) => {
        return pendingChanges.find(change => change.productId === productId);
    };

    const getCurrentQuantity = (product: Product) => {
        const change = getProductQuantityChange(product._id);
        return change ? change.newQuantity : product.quantity;
    };

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-indigo-50">
                            <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-indigo-900">ID</th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-indigo-900">Label</th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-indigo-900">Price</th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-indigo-900">Quantity</th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-indigo-900">Stock Control</th>
                            <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-indigo-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {products.map((product) => {
                            const quantityChange = getProductQuantityChange(product._id);
                            const hasChange = !!quantityChange;
                            const currentQuantity = getCurrentQuantity(product);
                            
                            return (
                                <tr 
                                    key={product._id} 
                                    className={`transition-colors hover:bg-gray-50/50 ${hasChange ? 'bg-blue-50/50' : ''}`}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{product._id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{product.label}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className="text-emerald-600 font-medium">${product.price}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                            ${product.quantity > 40 ? 'bg-green-100 text-green-800' :
                                            product.quantity > 20 ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'}`}>
                                            {product.quantity} in stock
                                            {hasChange && (
                                                <span className="ml-1 text-blue-600">
                                                    → {currentQuantity}
                                                    ({quantityChange.newQuantity > product.quantity ? '+' : ''}
                                                    {quantityChange.newQuantity - product.quantity})
                                                </span>
                                            )}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleQuantityChange(product._id, currentQuantity - 1)}
                                                disabled={currentQuantity <= 0}
                                                className="p-1 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                title="Decrease quantity"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            <span className={`w-12 text-center text-black font-medium ${hasChange ? 'text-blue-600' : ''}`}>
                                                {currentQuantity}
                                            </span>
                                            <button
                                                onClick={() => handleQuantityChange(product._id, currentQuantity + 1)}
                                                className="p-1 text-gray-600 hover:text-gray-800 transition-colors"
                                                title="Increase quantity"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => onUpdate(product._id)}
                                                className="p-1 text-blue-600 hover:text-blue-800 transition-colors"
                                                title="Edit product"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => onDelete(product)}
                                                className="p-1 text-red-600 hover:text-red-800 transition-colors"
                                                title="Delete product"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {pendingChanges.length > 0 && (
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        {pendingChanges.length} pending {pendingChanges.length === 1 ? 'change' : 'changes'}
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setPendingChanges([])}
                            className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSaveChanges}
                            disabled={isSaving}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                        >
                            {isSaving ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Saving...
                                </>
                            ) : (
                                <>Save Changes</>
                            )}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
} 