import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-gray-700">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">O Nama</h3>
            <p className="text-gray-300">
              Klub stonog tenisa posvećen razvoju sporta, talenata i zajednice.
              Pridružite nam se i postanite dio naše priče.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Brzi Linkovi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-blue-400">
                  O Nama
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-blue-400">
                  Događaji
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-blue-400">
                  Trening
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-blue-400">
                  Vijesti
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt Info</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Adresa:</span> Ulica
                Stonotenisera 10, Sarajevo
              </li>
              <li>
                <span className="font-semibold">Telefon:</span>{" "}
                <a
                  href="tel:+38761123456"
                  className="text-blue-400 hover:underline"
                >
                  +387 61 123 456
                </a>
              </li>
              <li>
                <span className="font-semibold">E-mail:</span>{" "}
                <a
                  href="mailto:kontakt@stonitenis.ba"
                  className="text-blue-400 hover:underline"
                >
                  kontakt@stonitenis.ba
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Klub Stonog Tenisa. Sva prava
            zadržana.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="hover:text-blue-400">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
