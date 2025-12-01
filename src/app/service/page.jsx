"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Service() {
  const [services, setServices] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/json/serviceDetailsData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>

      {services.length === 0 && (
        <p className="text-center text-gray-500 text-xl">Loading...</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-white h-[400px] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
            <p className="text-gray-600 mt-2 text-sm">{item.description}</p>

            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-blue-600">
                ${item.price}
              </span>
              <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-lg">
                {item.category}
              </span>
            </div>

            <button
              className="w-full mt-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              onClick={() => router.push(`/service/${item.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
