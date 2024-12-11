import React from "react";

export default function News() {
  return (
    <div className="w-full bg-gradient-to-br from-blue-950 via-gray-900 to-black py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Novosti</h2>
        <p className="text-gray-300 text-center mb-12">
          Ostanite u toku s najnovijim vijestima, događajima i uspjesima našeg
          kluba.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Item 1 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <img
              src="/AdobeStock_544630271.jpeg"
              alt="Turnir u Sarajevu"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Turnir u Sarajevu</h3>
            <p className="text-gray-300">
              Naši igrači su ostvarili fantastične rezultate na posljednjem
              turniru u Sarajevu. Čestitamo svim učesnicima!
            </p>
            <p className="mt-4 text-yellow-400 font-medium">
              Datum: 12. decembar 2024.
            </p>
          </div>
          {/* News Item 2 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <img
              src="/AdobeStock_544630271.jpeg"
              alt="Novi trener"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">
              Dobrodošlica Novom Treneru
            </h3>
            <p className="text-gray-300">
              S ponosom najavljujemo dolazak novog trenera, koji će unaprijediti
              naše trening programe.
            </p>
            <p className="mt-4 text-yellow-400 font-medium">
              Datum: 5. decembar 2024.
            </p>
          </div>
          {/* News Item 3 */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <img
              src="/AdobeStock_544630271.jpeg"
              alt="Ljetni kamp"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Ljetni Kamp</h3>
            <p className="text-gray-300">
              Prijave za ljetni kamp stonog tenisa su otvorene! Iskoristite
              priliku za učenje i zabavu.
            </p>
            <p className="mt-4 text-yellow-400 font-medium">
              Datum: 15. juni 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
