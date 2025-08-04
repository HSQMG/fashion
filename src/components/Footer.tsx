"use client";

import {
  Instagram,
  Youtube,
  Music,
  MessageCircleMore,
  PhoneCall,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/_personsoul_",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@_personsoul_",
      icon: <Music className="w-5 h-5" />,
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@personsoul_",
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      name: "Line",
      href: "https://line.me/ti/p/jiZdlPWuz1",
      icon: <MessageCircleMore className="w-5 h-5" />,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/message/IM2HCJ6AQT46M1",
      icon: <PhoneCall className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-black text-white px-6 py-12">
      <div className="flex flex-col md:flex-row flex-wrap gap-12 justify-between">
        <div className="max-w-md">
          <p className="font-bold mb-4">
            Personsoul is a fashion brand rooted deeply in Chinese culture,
            fusing ancient wisdom with fearless, post-apocalyptic style.
          </p>
          <p className="font-bold">
            The PS Mark embodies yin-yang philosophy—balance, change, and
            harmony of opposites, reminding you to embrace every side of
            yourself.
          </p>
        </div>

        <div className="max-w-md w-full">
          <p className="mb-4">
            Join PS Tribe. Get the latest releases, limited creations and
            special promotions from Personsoul.
          </p>
          <form
            method="post"
            action="/contact#contact_form"
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              name="contact[email]"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="your@email.address"
              required
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="w-full">
          <ul className="flex flex-wrap justify-center gap-6 mt-8">
            {socialLinks.map(({ name, href, icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  {icon}
                  <span>{name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Links */}
        <div className="w-full mt-12 border-t border-gray-700 pt-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm">
            <li>
              <a href="/pages/shipping-policy" className="hover:underline">
                Shipping
              </a>
            </li>
            <li>
              <a href="/pages/refund-refund-policy" className="hover:underline">
                Refund
              </a>
            </li>
            <li>
              <a href="/pages/privacy-policy" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/policies/contact-information"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
            <li>
              <a href="/pages/about-us" className="hover:underline">
                Our Story
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
