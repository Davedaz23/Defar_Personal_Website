export default function Services() {
    return (
      <section id="services" className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
            My Services as a Software Engineer
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-[#7cb518]">Web Development</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                I build responsive, high-performance websites using modern web technologies like React, Tailwind CSS, and more.
              </p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-[#7cb518]">Mobile App Development</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                I develop cross-platform mobile applications with Flutter and React Native, ensuring smooth user experiences.
              </p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-[#7cb518]">API & Backend Development</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                I specialize in creating RESTful APIs and scalable backend services using technologies like .NET Core and Node.js.
              </p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-[#7cb518]">Cloud & Firebase Integration</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                I provide cloud solutions and Firebase integration for fast, secure, and scalable applications.
              </p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-[#7cb518]">UI/UX Design</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                I focus on creating intuitive, user-centered designs that provide seamless experiences for users.
              </p>
            </div>
            <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
              <h3 className="text-xl font-semibold text-[#7cb518]">Consulting & Code Review</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                I offer consulting services to optimize your codebase and review code for best practices and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  