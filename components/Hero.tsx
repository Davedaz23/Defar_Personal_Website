"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen z-0  flex items-center justify-center  overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <Image src="/assets/code-bg.png" alt="Code Background" layout="fill" objectFit="cover" />
      </div>

      <div className="relative z-10 w-full md:w-5/6 lg:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6">
        
        {/* Left Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello, I&apos;m <span className="text-[#7cb518]">Defar Gobeze Wondafrash</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-4">
            🚀 Senior Software Engineer | Fintech & Banking Specialist | Freelancer
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I craft high-performance, secure, and scalable software solutions for the banking industry. Let&apos;s build something amazing together!
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a href="/projects" className="px-6 py-3 bg-[#7cb518] text-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-700">
              View Projects
            </a>
            <a href="/contact" className="px-6 py-3 border border-green-500 text-green-700 dark:text-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-green-500 hover:text-white">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4 text-gray-700 dark:text-gray-300">
            <a href="https://linkedin.com" target="_blank" className="hover:text-green-600">
              🔗 LinkedIn
            </a>
            <a href="https://github.com" target="_blank" className="hover:text-gray-900 dark:hover:text-white">
              💻 GitHub
            </a>
            <a href="https://twitter.com" target="_blank" className="hover:text-green-400">
              🐦 Twitter
            </a>
          </div>
        </motion.div>

        {/* Right Section - Image & Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex flex-col items-center space-y-4"
        >
          <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
            <Image
              src="/assets/profile.png"
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-green-500 shadow-2xl"
            />
          </div>

          {/* Tech Concept Images */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="w-16 h-16">
              <Image src="/assets/icons/code.svg" alt="Code" width={64} height={64} />
            </div>
            <div className="w-16 h-16">
              <Image src="/assets/icons/server.svg" alt="Backend" width={64} height={64} />
            </div>
            <div className="w-16 h-16">
              <Image src="/assets/icons/security.svg" alt="Security" width={64} height={64} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
