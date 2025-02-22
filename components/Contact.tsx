export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-[#F7F9FB] dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Whether you're looking to start a new project, need expert advice, or just want to connect, I'd love to hear from you. Let’s bring your ideas to life together.
        </p>
        <div className="mt-6">
          <a
            href="mailto:defargobeze@gmail.com"
            className="inline-block bg-[#7cb518] text-white px-6 py-3 rounded-md text-lg hover:bg-[#6ba613] transition duration-200 ease-in-out"
          >
            Email Me
          </a>
        </div>
        <div className="mt-6">
          <p className="text-lg text-gray-600 dark:text-gray-300">Alternatively, feel free to connect with me on:</p>
          <div className="flex justify-center gap-6 mt-4">
            {/* Add links to your social media profiles */}
            <a
              href="https://www.linkedin.com/in/defargobeze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[#7cb518] transition duration-200 ease-in-out"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/defargobeze"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-[#7cb518] transition duration-200 ease-in-out"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
