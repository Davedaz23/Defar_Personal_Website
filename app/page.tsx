"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MyWork from "@/components/mywork";

export default function Home() {
  return (
    <div className=" dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      {/* Main Content Wrapper with Responsive Width */}
      <main className="w-full md:w-5/6 lg:w-3/4 mx-auto">
        {/* Add ids to sections */}
        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="mywork">
          <MyWork />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
