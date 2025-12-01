"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function About() {
  const router = useRouter();
  const isLoggedIn = true;
  const handleNavigation = () => {
    if (isLoggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section */}
      <div className="text-center my-5">
        <button
        onClick={handleNavigation}
        type="button"
        className="bg-[#861043] p-3 rounded-2xl  text-white"
      >
        Go to address page
      </button>
      </div>
      <section className="bg-pink-100 dark:bg-pink-900 py-20">
        <div className="container text-white mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We provide top-notch services to help your business grow. Our
            dedicated team ensures quality, reliability, and excellence in every
            project we handle.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-base-content text-lg">
              To deliver exceptional services that empower businesses to achieve
              their goals efficiently and effectively, while maintaining
              integrity and innovation.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-base-content text-lg">
              To become a globally recognized service provider known for
              quality, creativity, and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600 dark:text-gray-300">CEO & Founder</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600 dark:text-gray-300">Lead Designer</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Head of Development
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
