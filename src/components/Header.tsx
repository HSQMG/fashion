"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, ShoppingCart } from "lucide-react";
const navItems = [
  { name: "ALL", href: "/collections/all-product" },
  { name: "NEW DROP | 25 SS", href: "/collections/personsoul-25ss" },
  {
    name: "TOPS",
    submenu: [
      { name: "ALL", href: "/collections/all-tops" },
      { name: "T-SHIRT", href: "/collections/t-shirt-2" },
      { name: "SWEATSHIRT", href: "/collections/t-shirt-1" },
    ],
  },
  {
    name: "BOTTOMS",
    submenu: [
      { name: "ALL", href: "/collections/bottom/PANT" },
      { name: "CARGO", href: "/collections/cargo-pants" },
      { name: "DENIM", href: "/collections/denim-jeans" },
      { name: "SHORT", href: "/collections/shorts-1" },
      { name: "SKIRT", href: "/collections/skirt-1" },
    ],
  },
  { name: "HOODIE", href: "/collections/hoodie/hoodie" },
  { name: "OUTERWEAR", href: "/collections/outerwear" },
  {
    name: "ACCESSORY",
    submenu: [
      { name: "HAT", href: "/collections/hat" },
      { name: "BELT", href: "/collections/belt" },
      { name: "BAGS", href: "/collections/bags" },
      { name: "JEWELRY", href: "/collections/jewelry" },
    ],
  },
  {
    name: "COLLECTION",
    submenu: [
      {
        name: "Heart of the Grasslands 24 FW",
        href: "/collections/heart-of-the-grasslands/2024FW",
      },
      {
        name: "Sunset Ancient City Desert 24 SS",
        href: "/collections/ancient-city-of-sunset/2024SS",
      },
    ],
  },
  { name: "COMMUNITY", href: "/pages/community-rewards" },
];

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <header className="w-full border-b bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-6 py-6">
        {/* Logo */}
        <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-4 lg:mb-0">
          <Link href="/">
            <img
              src="https://www.personsoul.com/cdn/shop/files/20230918190243_7e957037-e7b5-463a-8483-7ea7c61b8ef3.png?v=1696408507&width=400"
              alt="PersonSoul Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="w-full">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative group border border-transparent hover:border-black rounded-none transition-all duration-200 px-4 py-2"
                onMouseEnter={() => setOpen(item.name)}
                onMouseLeave={() => setOpen(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="hover:text-black transition">
                      {item.name}
                      <span className="ml-1">
                        {open === item.name ? "▲" : "▼"}
                      </span>
                    </button>
                    {open === item.name && (
                      <ul className="absolute z-50 mt-2 bg-white border border-gray-200 rounded-md shadow-md p-3 min-w-[180px] grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {item.submenu.map((sub) => (
                          <li key={sub.name}>
                            <Link
                              href={sub.href}
                              className="block text-sm text-gray-600 hover:text-black transition"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-black transition"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center lg:justify-start w-full lg:w-auto mb-4 lg:mb-0 space-x-6">
          <Link href="/search" aria-label="Search" className="hover:text-black">
            <Search className="w-5 h-5" />
          </Link>
          <Link href="/account" aria-label="Login" className="hover:text-black">
            <User className="w-5 h-5" />
          </Link>
          <Link href="/cart" aria-label="Cart" className="hover:text-black">
            <ShoppingCart className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
