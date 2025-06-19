"use client"

import ProductsTable from "@/components/ProductsTable";

export default function ProfilePage() {
    return (
        <>
            <div className="mt-2 ml-5">

                <div className="flex justify-around items-center">
                    <div className="w-64 h-40 bg-white rounded-xl shadow-md flex items-center justify-center mt-4">
                        <span className="text-gray-700 font-semibold">Simple Card</span>
                    </div>
                    <div className="w-64 h-40 bg-white rounded-xl shadow-md flex items-center justify-center mt-4">
                        <span className="text-gray-700 font-semibold">Simple Card</span>
                    </div>
                    <div className="w-64 h-40 bg-white rounded-xl shadow-md flex items-center justify-center mt-4">
                        <span className="text-gray-700 font-semibold">Simple Card</span>
                    </div>
                    <div className="w-64 h-40 bg-white rounded-xl shadow-md flex items-center justify-center mt-4">
                        <span className="text-gray-700 font-semibold">Simple Card</span>
                    </div>
                </div>
                <div className="flex justify-around h-full items-center">
                    <div className="min-w-3/5 h-40 bg-white rounded-xl shadow-md flex items-center justify-center mt-4">
                        
                    </div>
                    <div className="w-2/6 h-40 bg-white rounded-xl shadow-md flex items-center justify-center mt-4">
                        <span className="text-gray-700 font-semibold">Simple Card</span>
                    </div>
                </div>
            </div>
        </>
    );
}