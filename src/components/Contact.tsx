import React from "react";

export default function Contact() {
  return (
    <div className="w-full bg-gradient-to-br from-black via-gray-900 to-blue-950 py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">
          Kontaktirajte Nas
        </h2>
        <p className="text-gray-300 text-center mb-12">
          Za sva pitanja, prijedloge ili dodatne informacije, slobodno nas
          kontaktirajte.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Pošaljite nam poruku
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Ime
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="Unesite vaše ime"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="Unesite vaš e-mail"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Poruka
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 rounded-md bg-gray-900 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="Napišite vašu poruku"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
              >
                Pošalji
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold mb-4">Kontakt Podaci</h3>
            <p className="text-gray-300 mb-4">
              Ako preferirate direktan kontakt, možete nas pronaći na sljedećim
              adresama:
            </p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Adresa:</span> Ulica
                Stonotenisera 10, Sarajevo
              </li>
              <li>
                <span className="font-semibold">Telefon:</span>{" "}
                <a href="tel:+38761123456" className="text-blue-400">
                  +387 61 123 456
                </a>
              </li>
              <li>
                <span className="font-semibold">E-mail:</span>{" "}
                <a
                  href="mailto:kontakt@stonitenis.ba"
                  className="text-blue-400"
                >
                  kontakt@stonitenis.ba
                </a>
              </li>
              <li>
                <span className="font-semibold">Radno vrijeme:</span> Pon - Pet:
                08:00 - 20:00
              </li>
            </ul>
            <h4 className="text-xl font-semibold mt-6">Pratite nas:</h4>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
