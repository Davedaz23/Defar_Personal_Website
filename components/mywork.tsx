import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image'; // Importing the Image component

export default function MyWork() {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: 'Web Application',
      description: 'A fully responsive web app that allows users to track their daily tasks. Built with React and Tailwind CSS.',
      imageUrl: '/your-project-screenshot-1.jpg', // Update with actual image path
      link: 'https://link-to-project.com',
    },
    {
      title: 'Mobile App',
      description: 'A mobile application designed for banking transactions using Flutter. Secure and efficient.',
      imageUrl: '/your-project-screenshot-2.jpg',
      link: 'https://link-to-project.com',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A scalable e-commerce platform for selling products online, integrated with payment gateways.',
      imageUrl: '/your-project-screenshot-3.jpg',
      link: 'https://link-to-project.com',
    },
    {
      title: 'Project 4: Task Manager',
      description: 'An efficient task manager app built using React and Node.js, helping teams stay organized.',
      imageUrl: '/your-project-screenshot-4.jpg',
      link: 'https://link-to-project.com',
    },
    {
      title: 'Project 5: Chat Application',
      description: 'A real-time chat application built using WebSocket and React for instant messaging.',
      imageUrl: '/your-project-screenshot-5.jpg',
      link: 'https://link-to-project.com',
    },
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section id="work" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">My Work</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Here are a few projects that showcase my skills in web and mobile development. Each project reflects my dedication to building innovative and user-friendly solutions.
        </p>

        {/* Project Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={500} // Adjust the width according to your design
                height={300} // Adjust the height according to your design
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-6 py-3 bg-[#7cb518] text-white rounded-md hover:bg-[#6ba613] transition duration-200 ease-in-out"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showMore && (
          <button
            onClick={() => setShowMore(true)}
            className="mt-8 px-6 py-3 bg-[#7cb518] text-white rounded-md hover:bg-[#6ba613] transition duration-200 ease-in-out"
          >
            Show More Projects
          </button>
        )}
      </div>
    </section>
  );
}
