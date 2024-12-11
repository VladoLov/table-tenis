import Image from "next/image";
import React from "react";

export default function Gallery() {
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
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/AdobeStock_802929086.jpeg"
              alt="Trening u klubu"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              width={400}
              height={300}
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/AdobeStock_802929086.jpeg"
              alt="Takmičenje"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              width={400}
              height={300}
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/AdobeStock_802929086.jpeg"
              alt="Pobjeda na turniru"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              width={400}
              height={300}
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/AdobeStock_802929086.jpeg"
              alt="Ekipa nakon treninga"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              width={400}
              height={300}
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/AdobeStock_802929086.jpeg"
              alt="Održavanje opreme"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              width={400}
              height={300}
            />
          </div>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/AdobeStock_802929086.jpeg"
              alt="Zajednički trenuci"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
