"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MegaMenuNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const mobileMenuRef = useRef(null); // For focus trapping
  const hoverTimeoutRef = useRef(null); // For managing hover timeouts

  const menuItems = [
    {
      label: "Products",
      mega: [
        {
          title: "Features ",
          links: ["AI Financial Analysis"],
        },
        {
          title: "Features ",
          links: ["Management Reporting"],
        }
      ],
    },
    {
      label: "Customer",
      mega: [
        {
          links: ["Solutions ", "Accountants "],
        }
      ],
    },
    { label: "Pricing" },
  ];

  // Toggle mobile menu and reset submenu state
  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
    setActiveMobileMenu(null);
  };

  // Generate href from link text
  const linkHref = (text) => {
    if (!text) return "/";
    return "/" + text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  };

  // Handle mouse enter for desktop mega menu
  const handleMouseEnter = (label) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredMenu(label);
  };

  // Handle mouse leave for desktop mega menu
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 150);
  };

  // Handle keyboard navigation for desktop mega menu
  const handleKeyDown = (e, label, hasMega) => {
    if (hasMega && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setHoveredMenu(hoveredMenu === label ? null : label);
    }
  };

  // Focus trapping for mobile menu
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

  // Reset mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setActiveMobileMenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Clean up hover timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-16 text-[#505050] text-base relative">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 gilroy-m text-[#909090] text-xl hover:text-black transition"
                  aria-haspopup={!!item.mega}
                  aria-expanded={hoveredMenu === item.label}
                  onKeyDown={(e) => handleKeyDown(e, item.label, !!item.mega)}
                  tabIndex={0}
                >
                  {item.label}
                  {item.mega && <ChevronDown size={16} />}
                </button>

                {/* Mega Menu (Desktop) */}
                <AnimatePresence>
                  {hoveredMenu === item.label && item.mega && (
                    <motion.div
                      key={`desktop-${item.label}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6 w-[min(400px,50vw)] z-50"
                    >
                      {item.mega.map((col) => (
                        <div key={col.title}>
                          <h4 className="font-semibold text-sm text-gray-900 mb-2">
                            {col.title}
                          </h4>
                          <ul className="space-y-1">
                            {col.links.map((link) => (
                              <li key={link}>
                                <Link
                                  href={linkHref(link)}
                                  className="text-sm text-gray-600 hover:text-blue-600 transition"
                                  onClick={() => setHoveredMenu(null)}
                                >
                                  {link}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-4">
            <button className="bg-[#f0f0f0] py-2.5 px-6 text-black rounded-full hover:bg-gray-100 transition">
              Free Trial
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2.5 px-6 rounded-full hover:opacity-90 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Toggle Button */}
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
              <div key={item.label} className="border-b border-gray-100">
                <button
                  onClick={() =>
                    setActiveMobileMenu(
                      activeMobileMenu === item.label ? null : item.label
                    )
                  }
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium"
                  aria-expanded={activeMobileMenu === item.label}
                  aria-controls={`mobile-sub-${item.label}`}
                >
                  {item.label}
                  {item.mega && <ChevronDown size={16} />}
                </button>

                {/* Mobile Submenu */}
                <AnimatePresence initial={false}>
                  {activeMobileMenu === item.label && item.mega && (
                    <motion.div
                      id={`mobile-sub-${item.label}`}
                      key={`mobile-sub-${item.label}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden px-6 pb-4"
                    >
                      {item.mega.map((col) => (
                        <div key={col.title} className="mt-3">
                          <h4 className="font-semibold">{col.title}</h4>
                          <ul className="space-y-1 text-sm mt-1">
                            {col.links.map((link) => (
                              <li key={link}>
                                <Link
                                  href={linkHref(link)}
                                  className="hover:text-blue-600 transition"
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setActiveMobileMenu(null);
                                  }}
                                >
                                  {link}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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