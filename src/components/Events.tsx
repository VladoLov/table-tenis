import React from "react";

export default function Events() {
  return (
    <div className="w-full relative bg-gradient-to-br from-black via-gray-900 to-gray-800 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Događaji</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Event 1 */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Turnir za Početnike</h3>
            <p className="text-gray-300">
              Pridružite se našem turniru za početnike! Savršena prilika da
              pokažete svoje vještine i upoznate nove protivnike.
            </p>
            <p className="mt-4 text-yellow-400 font-medium">
              Datum: 15. decembar 2024.
            </p>
            <p className="mt-1 text-yellow-400 font-medium">
              Lokacija: Sportska Dvorana Sarajevo
            </p>
          </div>
          {/* Event 2 */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Napredni Treninzi</h3>
            <p className="text-gray-300">
              Pridružite se treninzima za napredne igrače pod vodstvom
              profesionalnih trenera. Poboljšajte svoje tehnike i strategije.
            </p>
            <p className="mt-4 text-yellow-400 font-medium">
              Datum: 22. decembar 2024.
            </p>
            <p className="mt-1 text-yellow-400 font-medium">
              Lokacija: Centar za Stoni Tenis Tuzla
            </p>
          </div>
          {/* Event 3 */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Porodični Dan</h3>
            <p className="text-gray-300">
              Dovedite porodicu na naš poseban dan stonog tenisa. Aktivnosti za
              sve uzraste i puno zabave!
            </p>
            <p className="mt-4 text-yellow-400 font-medium">
              Datum: 29. decembar 2024.
            </p>
            <p className="mt-1 text-yellow-400 font-medium">
              Lokacija: Sportski Centar Mostar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
