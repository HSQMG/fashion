// components/HeroSection.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full relative">
      <Link
        href="/collections/personsoul-25ss"
        aria-label="Shop the new collection"
      >
        <Image
          src="https://www.personsoul.com/cdn/shop/files/5a5000214fe3c4b40090e604679abd02.webp?v=1746408789"
          alt="Hero Image"
          width={2750}
          height={1513}
          priority
          className="w-full h-auto object-cover"
        />
      </Link>

      <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2">
        <Link
          href="/collections/personsoul-25ss"
          className="bg-black text-white px-6 py-3 text-lg font-medium tracking-wide hover:bg-white hover:text-black border border-white transition-all"
        >
          SHOP THE NEW
        </Link>
      </div>
    </section>
  );
};

export default Hero;
