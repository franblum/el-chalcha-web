'use client';

import React, { useState } from 'react';

// Variedades de empanadas artesanales (formato carta, sin precios)
const MENU_ITEMS = [
  {
    id: 1,
    name: 'Salteña',
    description: 'Carne cortada a cuchillo, cebolla, huevo y cebolla de verdeo. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.',
    isPopular: false,
  },
  {
    id: 2,
    name: 'Pollo',
    description: 'Pollo desmenuzado, huevo, cebolla, pimiento rojo y arvejas. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.',
    isPopular: false,
  },
  {
    id: 3,
    name: 'Jamón y queso',
    description: 'Queso mozzarella y cubos de jamón cocido. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.',
    isPopular: true,
  },
  {
    id: 4,
    name: 'Queso, cebolla y morrón',
    description: 'Queso pategrás, cebolla y morrón salteado. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.',
    isPopular: true,
  },
  {
    id: 5,
    name: 'Criolla dulce',
    description: 'Carne picada, cebolla, huevo, cebolla de verdeo, pasas de uva y aceitunas verdes. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.',
    isPopular: true,
  },
  {
    id: 6,
    name: 'Cebolla a los 4 quesos',
    description: 'Queso reggianito, romanito, parmesano y sardo, cebolla cortada en juliana y huevo. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.',
    isPopular: true,
  },
  {
    id: 7,
    name: 'Árabes',
    description: 'Carne picada cocida en jugo de limón, tomate triturado y cebolla. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.',
    isPopular: true,
  },
];

// Sucursales activas en Córdoba
const SUCURSALES = [
  {
    id: 1,
    name: 'Barrio Jardín',
    address: 'Av. Ricchieri 3071, Córdoba',
    phone: '351-1234567',
    mapUrl: 'https://maps.google.com/?q=Av.+Ricchieri+3071,+Cordoba',
  },
  {
    id: 2,
    name: 'Urca',
    address: 'Menéndez Pidal 4009, Córdoba',
    phone: '351-7654321',
    mapUrl: 'https://maps.google.com/?q=Menendez+Pidal+4009,+Cordoba',
  },
  {
    id: 3,
    name: 'Villa Allende',
    address: '25 de Mayo 25, Villa Allende',
    phone: '351-9998887',
    mapUrl: 'https://maps.google.com/?q=25+de+Mayo+25,+Villa+Allende',
  },
];

export default function ElChalchaWeb() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5EDD6] text-[#2C1810] font-sans selection:bg-[#C8860A] selection:text-white">
      {/* Tipografías: Pacifico (Logo), Playfair Display (Títulos), Lato (Cuerpo) */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Pacifico&family=Playfair+Display:wght@600;700;800&display=swap');
        .font-pacifico { font-family: 'Pacifico', cursive; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-lato { font-family: 'Lato', sans-serif; }
      `}} />

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 bg-[#2C1810] text-[#F5EDD6] shadow-xl border-b-4 border-[#C8860A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo de marca registrada */}
            <a href="#inicio" className="flex items-center space-x-1 group">
              <span className="font-pacifico text-3xl md:text-4xl text-[#F5EDD6] group-hover:text-[#C8860A] transition-colors">
                El Chalcha<sup className="text-lg md:text-xl ml-1 font-sans">®</sup>
              </span>
            </a>

            {/* Enlaces de escritorio */}
            <div className="hidden md:flex items-center space-x-8 font-lato font-bold">
              <a href="#inicio" className="hover:text-[#C8860A] transition-colors">Inicio</a>
              <a href="#menu" className="hover:text-[#C8860A] transition-colors">La Carta</a>
              <a href="#sucursales" className="hover:text-[#C8860A] transition-colors">Sucursales</a>
              <a href="#franquicias" className="hover:text-[#C8860A] transition-colors">Franquicias</a>
              <a
                href="https://wa.me/5493510000000?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20El%20Chalcha"
                target="_blank"
                rel="noreferrer"
                className="bg-[#C8860A] text-white px-6 py-2.5 rounded-full hover:bg-[#a66f08] transition-all shadow-md transform hover:scale-105"
              >
                Pedir por WhatsApp
              </a>
            </div>

            {/* Botón hamburguesa móvil */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuAbierto(!menuAbierto)}
                className="text-[#F5EDD6] hover:text-[#C8860A] focus:outline-none p-2"
                aria-label="Abrir menú"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuAbierto ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menú desplegable móvil */}
        {menuAbierto && (
          <div className="md:hidden bg-[#22130d] border-t border-[#C8860A]/40 px-4 pt-3 pb-5 space-y-3 font-lato font-bold">
            <a href="#inicio" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-[#C8860A]">Inicio</a>
            <a href="#menu" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-[#C8860A]">La Carta</a>
            <a href="#sucursales" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-[#C8860A]">Sucursales</a>
            <a href="#franquicias" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-[#C8860A]">Franquicias</a>
            <a
              href="https://wa.me/5493510000000"
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-[#C8860A] text-white py-2.5 rounded-full"
            >
              Pedir por WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-20 min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Imagen de fondo con soporte para el basePath de GitHub Pages */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/el-chalcha-web/public/descarga.jpg'), url('/descarga.jpg')",
            backgroundPosition: 'center',
          }}
        >
          {/* Sombra rústica para contraste del texto */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/85 via-[#2C1810]/70 to-[#2C1810]/95" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto py-24">
          <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#F5EDD6] leading-tight mb-6 drop-shadow-xl tracking-wide uppercase">
            Las mejores<br />empanadas salteñas
          </h1>
          <p className="font-lato text-xl sm:text-2xl text-white/95 font-light mb-3">
            Empanadas salteñas artesanales en Córdoba
          </p>
          <p className="font-pacifico text-2xl sm:text-3xl text-[#C8860A] mb-10 drop-shadow">
            Receta original desde 1990
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#menu"
              className="bg-[#C8860A] text-white px-8 py-3.5 rounded-full font-lato font-bold text-lg hover:bg-[#a66f08] transition-all shadow-xl border-2 border-[#C8860A]"
            >
              Ver La Carta
            </a>
            <a
              href="#sucursales"
              className="bg-transparent text-[#F5EDD6] px-8 py-3.5 rounded-full font-lato font-bold text-lg hover:bg-[#F5EDD6] hover:text-[#2C1810] transition-all border-2 border-[#F5EDD6] shadow-xl"
            >
              Nuestras Sucursales
            </a>
          </div>
        </div>

        {/* Separador de borde rústico */}
        <div
          className="absolute bottom-0 left-0 w-full h-8 bg-[#F5EDD6]"
          style={{
            clipPath: 'polygon(0% 100%, 5% 75%, 10% 100%, 15% 65%, 20% 100%, 25% 80%, 30% 100%, 35% 70%, 40% 100%, 45% 85%, 50% 100%, 55% 70%, 60% 100%, 65% 80%, 70% 100%, 75% 65%, 80% 100%, 85% 80%, 90% 100%, 95% 70%, 100% 100%)',
          }}
        />
      </section>

      {/* MENÚ / CARTA */}
      <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#2C1810] mb-4">Nuestra Carta</h2>
          <div className="w-24 h-1.5 bg-[#C8860A] mx-auto mb-6 rounded-full" />
          <p className="font-lato text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
            Variedades artesanales elaboradas diariamente sin congelar y sin conservantes. Masa casera y corte tradicional a cuchillo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {MENU_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md border border-[#2C1810]/10 p-6 sm:p-7 relative flex flex-col justify-between hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-playfair text-2xl font-bold text-[#2C1810]">
                    {item.name} <span className="text-base font-normal text-gray-500 font-lato">- unidad</span>
                  </h3>
                  {item.isPopular && (
                    <span className="shrink-0 bg-[#FFF3C4] text-[#8C5800] border border-[#F3CE65] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Más vendido
                    </span>
                  )}
                </div>
                <p className="font-lato text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUCURSALES */}
      <section id="sucursales" className="py-24 bg-[#2C1810] text-[#F5EDD6] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-4 text-[#F5EDD6]">Nuestras Sucursales</h2>
            <div className="w-24 h-1.5 bg-[#C8860A] mx-auto mb-6 rounded-full" />
            <p className="font-lato text-[#F5EDD6]/80 max-w-xl mx-auto text-base sm:text-lg">
              Encontranos en Córdoba Capital y Gran Córdoba para retirar o pedir por delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUCURSALES.map((sucursal) => (
              <div
                key={sucursal.id}
                className="bg-[#F5EDD6] text-[#2C1810] rounded-2xl p-7 shadow-2xl flex flex-col justify-between border-t-4 border-[#C8860A] hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div>
                  <h3 className="font-playfair text-2xl font-bold mb-4 text-[#C8860A]">{sucursal.name}</h3>
                  <div className="space-y-3 font-lato text-gray-800 text-sm sm:text-base">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#C8860A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{sucursal.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#C8860A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${sucursal.phone}`} className="hover:underline">{sucursal.phone}</a>
                    </div>
                  </div>
                </div>

                <a
                  href={sucursal.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center w-full bg-[#2C1810] text-[#F5EDD6] py-2.5 rounded-xl font-bold font-lato hover:bg-black transition-colors"
                >
                  Cómo llegar
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRANQUICIAS */}
      <section id="franquicias" className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-[#C8860A]/30 p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#2C1810] mb-3">
              Franquicias El Chalcha<sup className="text-base font-sans">®</sup>
            </h2>
            <p className="font-lato text-gray-600">
              Sumate al modelo de empanadas salteñas tradicionales con más de 30 años de experiencia.
            </p>
          </div>

          <form className="space-y-5 font-lato" onSubmit={(e) => { e.preventDefault(); alert('¡Gracias por tu interés! Nos comunicaremos a la brevedad.'); }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-[#2C1810] uppercase mb-1">Nombre Completo</label>
                <input required type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-[#C8860A] outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#2C1810] uppercase mb-1">Teléfono</label>
                <input required type="tel" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-[#C8860A] outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-[#2C1810] uppercase mb-1">Email</label>
              <input required type="email" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-[#C8860A] outline-none" />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#2C1810] uppercase mb-1">Ciudad o Localidad de Interés</label>
              <input required type="text" className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-[#C8860A] outline-none" />
            </div>
            <button
              type="submit"
              className="w-full bg-[#C8860A] text-white font-bold py-3.5 rounded-xl hover:bg-[#a66f08] transition-colors shadow-lg"
            >
              Solicitar Información
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1A0E09] text-[#F5EDD6]/70 py-12 border-t-4 border-[#C8860A] text-center px-4 font-lato">
        <h2 className="font-pacifico text-4xl text-[#C8860A] mb-3">El Chalcha<sup className="text-lg">®</sup></h2>
        <p className="text-sm max-w-md mx-auto mb-6">Empanadas salteñas tradicionales cortadas a cuchillo. Elaboradas artesanalmente en Córdoba desde 1990.</p>
        <p className="text-xs text-[#F5EDD6]/50">&copy; {new Date().getFullYear()} El Chalcha Empanadas. Todos los derechos reservados.</p>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/5493510000000?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20El%20Chalcha"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 2C6.495 2 2 6.494 2 12.031c0 1.947.556 3.766 1.517 5.309L2.1 22l4.821-1.393c1.472.871 3.208 1.378 5.11 1.378 5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm0 18.257c-1.688 0-3.264-.476-4.607-1.303l-.33-.203-2.859.827.839-2.772-.216-.345A8.188 8.188 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257zm4.526-6.177c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.187-.538.063-.248-.124-1.047-.386-1.994-1.23-.737-.658-1.235-1.471-1.38-1.719-.145-.248-.016-.382.108-.505.112-.111.248-.29.373-.435.124-.145.166-.248.248-.414.083-.166.042-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.427h-.477c-.166 0-.435.062-.663.311-.228.248-.87 0.85-.87 2.073 0 1.223.891 2.405 1.015 2.571.124.166 1.753 2.677 4.246 3.754.593.256 1.056.409 1.417.524.595.189 1.137.162 1.565.098.477-.071 1.468-.6 1.675-1.181.207-.581.207-1.078.145-1.181-.062-.103-.228-.166-.477-.29z" />
        </svg>
      </a>
    </div>
  );
}
