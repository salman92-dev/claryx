"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const menuItems = [
    { label: "AI Financial Analysis" },
    { label: "Real-time Dashboards" },
    { label: "Management Reporting" },
  ];

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  // Generate href from label
  const linkHref = (text) => {
    if (!text) return "/";
    return (
      "/" +
      text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
    );
  };

  // Focus trapping for accessibility
  useEffect(() => {
    const handleFocusTrap = (e) => {
      if (!mobileOpen || !mobileMenuRef.current) return;
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.key === "Tab") {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleFocusTrap);
    return () => document.removeEventListener("keydown", handleFocusTrap);
  }, [mobileOpen]);

  // Reset mobile menu on resize (open → close on desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full px-4 md:px-0">
      <nav className="bg-white sticky top-0 z-50 border border-[#D8D8DB] mx-auto max-w-7xl mt-4 rounded-full">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">
            <Image
              src="/logo.png"
              alt="Logo"
              width={128}
              height={32}
              className="w-32 h-8 object-contain"
              priority={false}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center md:gap-8 xl:gap-16 text-[#505050] text-base">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={linkHref(item.label)}
                className="gilroy-m text-[#909090] md:text-xs lg:text-base hover:text-black transition duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2.5 px-6 rounded-full hover:opacity-90 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-gray-700"
            aria-label={mobileOpen ? "Close Menu" : "Open Menu"}
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileMenuRef}
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden rounded-2xl bg-white shadow-md text-[#505050] overflow-hidden"
          >
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={linkHref(item.label)}
                className="block px-4 py-3 text-base font-medium hover:text-blue-600 transition"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="flex flex-col gap-3 px-4 py-4">
              <button className="bg-[#f0f0f0] py-2.5 px-6 text-black rounded-full">
                Free Trial
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2.5 px-6 rounded-full">
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
