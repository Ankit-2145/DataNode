"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagicButton from "@/components/ui/MagicButton";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/BCA/getting-started" },
    { name: "Careers", href: "/careers" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const setActiveItemFromPath = (path:any) => {
      const currentItem = menuItems.find((item) => item.href === path);
      if (currentItem) {
        setActiveItem(currentItem.name);
      }
    };

    // Set initial active item based on current path
    setActiveItemFromPath(pathname);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 text-white"
      initial={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
      animate={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 1)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <motion.span
                className="font-medium text-2xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                DataNode
              </motion.span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {menuItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <motion.span
                      className={`px-3 py-2 rounded-md text-sm font-medium hover:text-gray-300 transition duration-150 ease-in-out relative cursor-pointer ${
                        activeItem === item.name
                          ? "text-white"
                          : "text-gray-300"
                      }`}
                      onClick={() => setActiveItem(item.name)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      {activeItem === item.name && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                          layoutId="underline"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MagicButton
                title="View Docs"
                icon={<FaAnglesRight />}
                position="right"
                otherClasses="my-5"
              />
            </motion.div>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <motion.span
                    className={`block px-3 py-2 rounded-md text-base font-medium cursor-pointer ${
                      activeItem === item.name
                        ? "text-white bg-gray-900"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsOpen(false);
                    }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ))}
            </div>
            <div className="pb-3 border-t border-gray-700">
              <div className="px-2">
                <motion.div
                  className="relative mt-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <MagicButton
                    title="View Docs"
                    icon={<FaAnglesRight />}
                    position="right"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
