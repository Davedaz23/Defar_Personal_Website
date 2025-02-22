export default function Testimonials() {
    return (
      <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
            What My Clients Say
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                "Defar is a brilliant software engineer. He developed a highly efficient and scalable web application for us, improving our overall workflow. His attention to detail and problem-solving skills are top-notch."
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#7cb518]">- John Doe, CEO</h3>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                "Working with Defar has been an incredible experience. He built our mobile app with impeccable design and functionality, and he was always responsive to our needs. Highly recommend him for any development project!"
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#7cb518]">- Sarah Smith, Marketing Director</h3>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                "Defar's expertise in both backend and frontend development helped us build a seamless and scalable system. His approach to problem-solving is insightful, and he delivered beyond our expectations."
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#7cb518]">- Michael Johnson, CTO</h3>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                "We were impressed by how Defar understood our vision and transformed it into a functioning, high-performance app. His skills in Flutter and React Native are exceptional."
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#7cb518]">- Emily Brown, Product Manager</h3>
            </div>
          </div>
        </div>
      </section>
    );
  }
  