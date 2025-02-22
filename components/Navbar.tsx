"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white dark:bg-gray-900 shadow-lg py-6 px-8 flex justify-between items-center top-0 left-0 z-50 "
    >
      {/* Logo */}
      <h1 className="text-3xl font-semibold text-[gray-900] dark:text-white">Defar Gobeze</h1>

      {/* Nav Links */}
      <ul className="flex space-x-8 font-medium text-gray-800 dark:text-gray-200">
        <li className="hover:text-[#ccd5ae] cursor-pointer transition-colors duration-200 ease-in-out">
          <Link href="#home">Home</Link>
        </li>
        <li className="hover:text-[#ccd5ae] cursor-pointer transition-colors duration-200 ease-in-out">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:text-[#ccd5ae] cursor-pointer transition-colors duration-200 ease-in-out">
          <Link href="#services">Services</Link>
        </li>
        <li className="hover:text-[#ccd5ae] cursor-pointer transition-colors duration-200 ease-in-out">
          <Link href="#mywork">Portfolio</Link>
        </li>
        <li className="hover:text-[#ccd5ae] cursor-pointer transition-colors duration-200 ease-in-out">
          <Link href="#contact">Contact</Link>
        </li>
        <li className="hover:text-[#ccd5ae] cursor-pointer transition-colors duration-200 ease-in-out">
          <Link href="#blog">Blog</Link>
        </li>
      </ul>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {darkMode ? (
          <SunIcon className="w-6 h-6 text-yellow-500" />
        ) : (
          <MoonIcon className="w-6 h-6 text-gray-800 dark:text-white" />
        )}
      </button>
    </motion.nav>
  );
}
