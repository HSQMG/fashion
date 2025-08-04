// app/products/ProductDetail.tsx
"use client";

import { useState } from "react";

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedTab, setSelectedTab] = useState("description");

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">REMAKE CUTOFF ZIP HOODIE</h1>
      <p className="text-lg text-gray-700 mb-4">850,000₫</p>

      {/* Size options */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Select Size</label>
        <div className="flex gap-2">
          {["S", "M"].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 border rounded ${
                selectedSize === size
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color options */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Select Color</label>
        <div className="flex gap-2">
          <span className="w-6 h-6 rounded-full bg-black border-2 border-gray-300"></span>
          <span className="w-6 h-6 rounded-full bg-gray-400 border-2 border-gray-300"></span>
        </div>
      </div>

      {/* Add to cart button */}
      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
        Add to Cart
      </button>

      {/* Tabs */}
      <div className="mt-8">
        <div className="flex border-b">
          {["description", "size", "shipping"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-4 py-2 font-medium uppercase ${
                selectedTab === tab
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500"
              }`}
            >
              {tab === "description"
                ? "Description"
                : tab === "size"
                ? "Size Guide"
                : "Shipping"}
            </button>
          ))}
        </div>

        <div className="mt-4 text-sm text-gray-700 leading-relaxed">
          {selectedTab === "description" && (
            <p>
              The hoodie features a 2-way zipper and a cropped body with raw-cut
              hem. Each item has been carefully customized to maintain a
              consistent look.
            </p>
          )}
          {selectedTab === "size" && (
            <p>
              Please refer to our size chart before placing your order. If in
              doubt, choose the larger size for an oversized look.
            </p>
          )}
          {selectedTab === "shipping" && (
            <p>
              Shipping time typically takes 3–5 business days. Free shipping for
              orders over 1,000,000₫.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
