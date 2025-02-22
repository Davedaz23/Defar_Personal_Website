import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-16  dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-start">
        {/* About Me Overview */}
        <motion.h2
          className="text-3xl font-bold text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hello! I'm <strong>Defar Gobeze</strong>, a passionate software engineer focused on building innovative and scalable solutions. With years of experience in software development, I thrive on challenges and always strive to write clean, efficient code that drives results.
        </motion.p>

        {/* My Journey Section */}
        <div className="mt-12">
          <motion.h3
            className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Journey
          </motion.h3>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My journey as a software engineer began with a deep curiosity for how technology shapes the world. Over the years, I've worked on a variety of projects ranging from full-stack development to mobile apps, always focusing on delivering high-quality user experiences. I have experience with technologies like React, Tailwind CSS, Flutter, and .NET, but my passion lies in continuously learning and adapting to new tools and frameworks.
          </motion.p>
        </div>

        {/* Expertise Section */}
        <div className="mt-12">
          <motion.h3
            className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Expertise
          </motion.h3>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I specialize in creating web and mobile applications that not only meet client needs but also provide elegant, scalable, and user-friendly solutions. Some areas of expertise include:
          </motion.p>
          <motion.ul
  className="mt-4 space-y-4 ml-4 text-lg text-gray-600 dark:text-gray-300 pl-6 list-disc"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <li>Frontend Development (React, Tailwind CSS)</li>
  <li>Mobile Development (Flutter, React Native)</li>
  <li>Backend Development (Node.js, .NET Core)</li>
  <li>Cloud and Firebase Integration</li>
  <li>API Design and Integration (REST, SOAP)</li>
  <li>Database Management (MySQL, Firebase)</li>
  <li>UI/UX Design and User-Centered Development</li>
</motion.ul>

        </div>

        {/* My Values Section */}
        <div className="mt-12">
          <motion.h3
            className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            My Values
          </motion.h3>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I believe in writing code that is not only functional but also maintainable and scalable. I’m deeply committed to:
          </motion.p>
          <motion.ul
            className="mt-4 space-y-4 text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <li><strong>Continuous Learning:</strong> I strive to improve my skills and knowledge every day.</li>
            <li><strong>Collaboration:</strong> I value teamwork and always look for opportunities to work with other talented individuals.</li>
            <li><strong>Quality:</strong> I focus on writing clean, efficient code that stands the test of time.</li>
            <li><strong>Innovation:</strong> I’m constantly exploring new technologies and approaches to solve problems creatively.</li>
          </motion.ul>
        </div>

        {/* Get in Touch Section */}
        
      </div>
    </section>
  );
}
