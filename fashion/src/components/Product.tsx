"use client";

import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  sizes: string[];
  colors: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden group relative">
      <div className="relative w-full aspect-[3/4]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg">{product.name}</h2>
        <p className="text-gray-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.price.toLocaleString()}₫
        </p>

        <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <label className="block text-sm font-medium">Size</label>
          <select
            className="w-full border border-gray-300 rounded p-1 mt-1"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {product.sizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>

        <button className="w-full bg-black text-white py-2 mt-4 rounded hover:bg-gray-800 transition opacity-0 group-hover:opacity-100">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
