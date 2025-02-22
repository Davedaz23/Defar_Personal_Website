import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#aad576]/80 dark:bg-[#283618] text-center py-12 mt-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center space-y-6 md:space-y-0">
          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-400">
              <li><Link href="/" className="hover:text-[#FD5F20]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FD5F20]">About</Link></li>
              <li><Link href="/services" className="hover:text-[#FD5F20]">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#FD5F20]">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-[#FD5F20]">Contact</Link></li>
              <li><Link href="/blog" className="hover:text-[#FD5F20]">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Contact Information</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Email: <a href="mailto:contact@modernsite.com" className="hover:text-[#FD5F20]">contact@modernsite.com</a>
            </p>
            <p className="text-gray-600 dark:text-gray-400">Phone: +1 (234) 567-890</p>
            <p className="text-gray-600 dark:text-gray-400">Address: 1234 Street, City, Country</p>
          </div>

          {/* Social Media Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Follow Me</h3>
            <div className="flex space-x-6 mt-4">
              <a href="https://facebook.com" className="text-gray-600 dark:text-gray-400 hover:text-[#FD5F20]">
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a href="https://twitter.com" className="text-gray-600 dark:text-gray-400 hover:text-[#FD5F20]">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://instagram.com" className="text-gray-600 dark:text-gray-400 hover:text-[#FD5F20]">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-[#FD5F20]">
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Technologies Used Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Technologies</h3>
            <ul className="mt-4 space-y-4 text-gray-600 dark:text-gray-400">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* GitHub Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">GitHub</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Check out my projects: <a href="https://github.com/Davedaz23" className="hover:text-[#FD5F20] text-lg">Defar Gobeze</a>
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <p className="text-gray-600 dark:text-gray-400 mt-8">© 2025 Defar Gobeze Wondafrash. All rights reserved.</p>
      </div>
    </footer>
  );
}
