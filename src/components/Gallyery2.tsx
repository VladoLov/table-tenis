"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Gallyery2() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    "/AdobeStock_802929086.jpeg",
    "/AdobeStock_802929086.jpeg",
    "/AdobeStock_802929086.jpeg",
    "/AdobeStock_802929086.jpeg",
    "/AdobeStock_802929086.jpeg",
    "/AdobeStock_802929086.jpeg",
  ];

  return (
    <section id="gallery" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Galerija
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Pogledajte naše trenutke sa treninga, takmičenja i događaja.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                width={400}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
