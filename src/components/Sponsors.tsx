import React from "react";

export default function Sponsors() {
  const sponsors = [
    { name: "Sponsor 1", logo: "/sponsor.jpg", url: "https://sponsor1.com" },
    { name: "Sponsor 2", logo: "/sponsor.jpg", url: "https://sponsor2.com" },
    { name: "Sponsor 3", logo: "/sponsor.jpg", url: "https://sponsor3.com" },
    { name: "Sponsor 4", logo: "/sponsor.jpg", url: "https://sponsor4.com" },
  ];
  return (
    <section id="sponsors" className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Naši Sponzori
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Zahvaljujemo se našim sponzorima na podršci u unapređenju našeg kluba.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {sponsors.map((sponsor, index) => (
            <a
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-4 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-16 object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
