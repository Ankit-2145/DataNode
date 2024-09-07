"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import logoSvg from "./../../public/logo-svg.svg";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const controls = useAnimation();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Academics", href: "/BCA/getting-started" },
    { name: "Careers", href: "/careers" },
    { name: "Resources", href: "/resources" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  const setActiveItemFromPath = useCallback(
    (path: string | null) => {
      const currentItem = menuItems.find((item) => item.href === path);
      if (currentItem) {
        setActiveItem(currentItem.name);
      }
    },
    [menuItems]
  );

  useEffect(() => {
    setActiveItemFromPath(pathname);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, handleScroll, setActiveItemFromPath]);

  useEffect(() => {
    controls.start({
      backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)",
      backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
      transition: { duration: 0.3 },
    });
  }, [isScrolled, controls]);

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 text-white"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <motion.div
        className="absolute inset-0 z-[-1]"
        initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        animate={controls}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mr-2"
            >
              <Image
                src={logoSvg}
                alt="DataNode Logo"
                width={50}
                height={50}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </motion.div>
            <motion.span
              className="font-medium text-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              DataNode
            </motion.span>
          </Link>
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                custom={index}
                className="hidden md:block"
              >
                <Link href={item.href}>
                  <motion.span
                    className={`px-2 lg:px-3 py-2 rounded-md text-sm font-medium hover:text-gray-300 transition duration-150 ease-in-out relative cursor-pointer ${
                      activeItem === item.name ? "text-white" : "text-gray-300"
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
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <Link
                href="https://github.com/Ankit-2145/DataNode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                <FaGithub size={28} />
              </Link>
            </motion.div>
          </div>
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
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
            className="md:hidden bg-black bg-opacity-90 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
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
                </motion.div>
              ))}
            </div>
            <div className="pb-3 border-t border-gray-700">
              <div className="px-5 pt-3">
                <Link
                  href="https://github.com/Ankit-2145/DataNode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  <FaGithub size={28} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
