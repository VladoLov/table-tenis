import React from "react";

export default function Tranining() {
  return (
    <div className="w-full bg-gradient-to-tl from-gray-900 via-gray-800 to-black py-16 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Treninzi</h2>
        <p className="text-gray-300 mb-12">
          Pridružite se našim treninzima i unaprijedite svoje vještine stonog
          tenisa! Nudimo programe za sve uzraste i nivoe iskustva.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Training Option 1 */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Osnovni Trening</h3>
            <p className="text-gray-300">
              Savršeno za početnike koji žele naučiti osnovne tehnike stonog
              tenisa. Trening obuhvata uvod u pravila i osnovne pokrete.
            </p>
            <p className="mt-4 text-yellow-400 font-medium">Trajanje: 2 sata</p>
            <p className="mt-1 text-yellow-400 font-medium">
              Cijena: 30 KM po treningu
            </p>
          </div>
          {/* Training Option 2 */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Napredni Trening</h3>
            <p className="text-gray-300">
              Namijenjen iskusnijim igračima koji žele unaprijediti svoju
              tehniku, strategiju i kondiciju uz profesionalne trenere.
            </p>
            <p className="mt-4 text-yellow-400 font-medium">Trajanje: 3 sata</p>
            <p className="mt-1 text-yellow-400 font-medium">
              Cijena: 50 KM po treningu
            </p>
          </div>
          {/* Training Option 3 */}
          <div className="bg-gray-700 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Individualni Trening
            </h3>
            <p className="text-gray-300">
              Privatni časovi prilagođeni vašim potrebama i ciljevima. Idealno
              za one koji žele personalizirani pristup.
            </p>
            <p className="mt-4 text-yellow-400 font-medium">Trajanje: 1 sat</p>
            <p className="mt-1 text-yellow-400 font-medium">
              Cijena: 60 KM po satu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
