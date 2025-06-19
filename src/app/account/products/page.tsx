"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types/product";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";
import ProductsTable from "@/components/ProductsTable";
import AddProductForm from "@/components/AddProductForm";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    productId: string | null;
    productName: string;
  }>({
    isOpen: false,
    productId: null,
    productName: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (search?: string) => {
    try {
      setLoading(true);
      const url = search
        ? `/api/products?name=${encodeURIComponent(search)}`
        : "/api/products";
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError("Failed to load products");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchProducts(searchTerm);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    fetchProducts();
  };

  const handleDeleteClick = (product: Product) => {
    setDeleteModal({
      isOpen: true,
      productId: product._id,
      productName: product.label,
    });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteModal.productId) return;

    try {
      const response = await fetch(
        `/api/products?id=${deleteModal.productId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Failed to delete product");

      setProducts(
        products.filter((product) => product._id !== deleteModal.productId)
      );
      setDeleteModal({ isOpen: false, productId: null, productName: "" });
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product");
    }
  };

  const handleUpdate = async (id: string) => {
    // TODO: Implement update functionality with a modal or form
    console.log("Update product:", id);
  };

  const handleSaveChanges = async (
    changes: { productId: string; newQuantity: number }[]
  ) => {
    try {
      // Create an array of promises for all the updates
      const updatePromises = changes.map(({ productId, newQuantity }) =>
        fetch(`/api/products?id=${productId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ quantity: newQuantity }),
        })
      );

      // Wait for all updates to complete
      const responses = await Promise.all(updatePromises);

      // Check if any updates failed
      const failedUpdates = responses.filter((response) => !response.ok);
      if (failedUpdates.length > 0) {
        throw new Error(`Failed to update ${failedUpdates.length} products`);
      }

      // Refresh the products list
      await fetchProducts(searchTerm);
    } catch (err) {
      console.error("Error saving changes:", err);
      alert("Failed to save some changes");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-center justify-center">
        <div className="text-red-600">{error}</div>
      </div>
    );

  return (
    <React.Fragment>
      <DeleteConfirmationModal
        isOpen={deleteModal.isOpen}
        onClose={() =>
          setDeleteModal({ isOpen: false, productId: null, productName: "" })
        }
        onConfirm={handleDeleteConfirm}
        productName={deleteModal.productName}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-purple-900 tracking-tight">
              Products
              <span className="text-indigo-600">.</span>
            </h1>
            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                  // placeholder="Search products..."
                  className="w-64 px-4 py-2 text-black rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                />
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="absolute right-24 top-2.5 text-gray-400 hover:text-gray-600"
                    title="Clear search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-purple-900 text-white rounded-lg hover:bg-purple-500 transition-colors flex items-center gap-2"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Search
              </button>
            </div>
          </div>

          <ProductsTable
            products={products}
            onUpdate={handleUpdate}
            onDelete={handleDeleteClick}
            onSaveChanges={handleSaveChanges}
          />
          <div className="w-full h-96 bg-white rounded-xl shadow-md flex items-center justify-center mt-10">
            <AddProductForm/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
