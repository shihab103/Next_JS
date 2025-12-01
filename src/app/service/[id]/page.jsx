"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ServiceDetails() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchService() {
      try {
        const res = await fetch("/json/serviceDetailsData.json");
        const services = await res.json();
        const found = services.find((item) => item.id === Number(id));
        setService(found || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-gray-500 text-xl py-20">
        Loading...
      </div>
    );
  }

  if (!service) {
    return (
      <div className="text-center text-red-500 text-xl py-20">
        ❌ Service Not Found
      </div>
    );
  }

  return (
    <div className="py-10 max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Side Image */}
        <div className="md:w-1/2">
          <img
            src={service.image}
            alt={service.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Right Side Details */}
        <div className="md:w-1/2 space-y-5">
          <p className="text-gray-700 text-lg">{service.description}</p>

          <p className="text-2xl font-semibold text-blue-600">
            Price: ${service.price}
          </p>

          <p className="px-4 py-1 bg-blue-100 text-blue-700 inline-block rounded-lg">
            Category: {service.category}
          </p>

          <button
            onClick={() => alert("Booking functionality coming soon!")}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </button>

          <button
            onClick={() => router.push("/service")}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Back to Services
          </button>
        </div>
      </div>

      <div className="mt-10 bg-gray-100 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-3">More About This Service</h2>
        <p className="text-gray-700">
          {service.long_description ||
            "This is an amazing service that will provide you with great value and satisfaction. More details coming soon."}
        </p>
      </div>
    </div>
  );
}
