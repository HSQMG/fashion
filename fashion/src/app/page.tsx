import Hero from "@/components/Hero";
import Product from "@/components/Product";
import FaqSection from "@/components/FaqSection";
const products = [
  {
    id: 1,
    name: "CROP ZIPPER HOODIE - BLACK",
    imageUrl: "/images/image1.png",
    price: 850000,
    sizes: ["S", "M", "L"],
    colors: ["#000000", "#444444"],
  },
  {
    id: 2,
    name: "REMAKE CUTOFF ZIP HOODIE",
    imageUrl: "/images/image2.png",
    price: 950000,
    sizes: ["M", "L"],
    colors: ["#999999"],
  },
  // thêm nhiều sản phẩm khác nếu muốn
];
export default function HomePage() {
  return (
    <>
      <div>
        <Hero />
      </div>
      <main className="">
        <h1 className="text-2xl font-bold border border-gray-400  rounded">
          New Arrivals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </main>
      <main>
        <FaqSection />
      </main>
    </>
  );
}
