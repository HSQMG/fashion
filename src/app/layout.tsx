import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Personsoul Inspired",
  description: "A minimalist fashion store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
