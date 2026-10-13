'use client';

import React, { useState } from 'react';

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

const SUCURSALES = [
  {
    id: 1,
    name: 'El Chalchalero (Casa Central)',
    address: 'Av. Rafael Núñez 5147, Cerro de las Rosas',
    rating: '4.6',
    reviews: '743',
    mapUrl: 'https://maps.google.com/?q=Av.+Rafael+Nuñez+5147',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Av.%20Rafael%20N%C3%BA%C3%B1ez%205147+(El%20Chalchalero)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 2,
    name: 'El Chalchalero - Urca',
    address: 'Menéndez Pidal 4009',
    rating: '4.4',
    reviews: '152',
    mapUrl: 'https://maps.google.com/?q=Menendez+Pidal+4009',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Men%C3%A9ndez%20Pidal%204009+(El%20Chalchalero%20Urca)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 3,
    name: 'El Chalchalero - Recta Martinolli',
    address: 'Av. Recta Martinolli 8144',
    rating: '4.5',
    reviews: '387',
    mapUrl: 'https://maps.google.com/?q=Av.+Recta+Martinolli+8144',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Av.%20Recta%20Martinolli%208144+(El%20Chalchalero%20Recta%20Martinolli)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 4,
    name: 'El Chalcha Empanadas - B Jardín',
    address: 'Av. Pablo Ricchieri 3071 Loc A',
    rating: '4.9',
    reviews: '50',
    mapUrl: 'https://maps.google.com/?q=Av.+Pablo+Ricchieri+3071',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Av.%20Pablo%20Ricchieri%203071+(El%20Chalcha%20Empanadas)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 5,
    name: 'El Chalchalero Juniors',
    address: 'Río Cuarto 597',
    rating: '4.7',
    reviews: '170',
    mapUrl: 'https://maps.google.com/?q=Rio+Cuarto+597',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=R%C3%ADo%20Cuarto%20597+(El%20Chalchalero%20Juniors)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 6,
    name: 'El Chalcha (Villa Allende)',
    address: '25 de Mayo 25',
    rating: '4.4',
    reviews: '43',
    mapUrl: 'https://maps.google.com/?q=25+de+Mayo+25',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=25%20de%20Mayo%2025+(El%20Chalcha)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 7,
    name: 'El Chalcha el talar',
    address: 'Av. Martín Tissera 3253, Mendiolaza',
    rating: '5.0',
    reviews: '11',
    mapUrl: 'https://maps.google.com/?q=Av.+Martin+Tissera+3253',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Av.%20Mart%C3%ADn%20Tissera%203253+(El%20Chalcha%20el%20talar)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  }
];

export default function ElChalchaWeb() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5EDD6] text-[#2C1810] font-sans selection:bg-[#C8860A] selection:text-white">
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
            <a href="#inicio" className="flex items-center space-x-1 group">
              <span className="font-pacifico text-3xl md:text-4xl text-[#F5EDD6] group-hover:text-[#C8860A] transition-colors">
                El Chalcha<sup className="text-lg md:text-xl ml-1 font-sans">®</sup>
              </span>
            </a>
            <div className="hidden md:flex items-center space-x-8 font-lato font-bold">
              <a href="#inicio" className="hover:text-[#C8860A] transition-colors">Inicio</a>
              <a href="#quienes-somos" className="hover:text-[#C8860A] transition-colors">Quiénes Somos</a>
              <a href="#menu" className="hover:text-[#C8860A] transition-colors">La Carta</a>
              <a href="#donde-estamos" className="hover:text-[#C8860A] transition-colors">Dónde Estamos</a>
              <a href="#franquicias" className="hover:text-[#C8860A] transition-colors">Franquicias</a>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuAbierto(!menuAbierto)} className="text-[#F5EDD6] hover:text-[#C8860A] focus:outline-none p-2">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuAbierto ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {menuAbierto && (
          <div className="md:hidden bg-[#22130d] border-t border-[#C8860A]/40 px-4 pt-3 pb-5 space-y-3 font-lato font-bold">
            <a href="#inicio" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-[#C8860A]">Inicio</a>
            <a href="#quienes-somos" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-[#C8860A]">Quiénes Somos</a>
            <a href="#menu" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-[#C8860A]">La Carta</a>
            <a href="#donde-estamos" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-[#C8860A]">Dónde Estamos</a>
            <a href="#franquicias" onClick={() => setMenuAbierto(false)} className="block py-2 hover:text-[#C8860A]">Franquicias</a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="inicio" className="relative pt-20 min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('./descarga.jpg')" }}>
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
            <a href="#menu" className="bg-[#C8860A] text-white px-8 py-3.5 rounded-full font-lato font-bold text-lg hover:bg-[#a66f08] transition-all shadow-xl border-2 border-[#C8860A]">
              Ver La Carta
            </a>
            <a href="#donde-estamos" className="bg-transparent text-[#F5EDD6] px-8 py-3.5 rounded-full font-lato font-bold text-lg hover:bg-[#F5EDD6] hover:text-[#2C1810] transition-all border-2 border-[#F5EDD6] shadow-xl">
              Dónde Estamos
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-[#F5EDD6]" style={{ clipPath: 'polygon(0% 100%, 5% 75%, 10% 100%, 15% 65%, 20% 100%, 25% 80%, 30% 100%, 35% 70%, 40% 100%, 45% 85%, 50% 100%, 55% 70%, 60% 100%, 65% 80%, 70% 100%, 75% 65%, 80% 100%, 85% 80%, 90% 100%, 95% 70%, 100% 100%)' }} />
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes-somos" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#2C1810] mb-4">Quiénes Somos</h2>
            <div className="w-16 h-1.5 bg-[#C8860A] mb-8 rounded-full" />
            <p className="font-lato text-gray-700 text-lg mb-6 leading-relaxed">
              En <span className="font-bold text-[#2C1810]">El Chalcha</span>, somos la tradición que se hornea todos los días en Córdoba. Desde 1990, nos dedicamos a mantener viva la esencia de la verdadera empanada salteña artesanal, llevando a la mesa de los cordobeses un sabor único y un relleno jugoso que nos convirtió en un clásico indiscutido de la provincia.
            </p>
            <p className="font-lato text-gray-700 text-lg mb-6 leading-relaxed">
              Nuestra gran especialidad, la salteña de carne cortada a cuchillo, se elabora con ingredientes seleccionados y recetas familiares que respetan el tiempo y el amor por la cocina de antes.
            </p>
            <p className="font-lato text-gray-700 text-lg leading-relaxed">
              Hoy, nos enorgullece ser un punto de encuentro para quienes buscan calidad, frescura y ese sabor casero que nunca falla.
            </p>
          </div>
          <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C8860A]/20">
            <img src="https://images.unsplash.com/photo-1628198622119-947702fccfc6?q=80&w=1000&auto=format&fit=crop" alt="Empanadas caseras" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-[#2C1810]/20" />
          </div>
        </div>
      </section>

      {/* MENÚ / CARTA */}
      <section id="menu" className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-[#2C1810] mb-4">Nuestra Carta</h2>
            <div className="w-24 h-1.5 bg-[#C8860A] mx-auto mb-6 rounded-full" />
            <p className="font-lato text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
              Variedades artesanales elaboradas diariamente. Masa casera y corte tradicional a cuchillo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {MENU_ITEMS.map((item) => (
              <div key={item.id} className="bg-[#F5EDD6] rounded-2xl shadow-sm border border-[#2C1810]/5 p-6 sm:p-7 relative flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-playfair text-2xl font-bold text-[#2C1810]">
                      {item.name} <span className="text-base font-normal text-gray-500 font-lato">- unidad</span>
                    </h3>
                    {item.isPopular && <span className="shrink-0 bg-[#FFF3C4] text-[#8C5800] border border-[#F3CE65] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Más vendido</span>}
                  </div>
                  <p className="font-lato text-gray-600 text-sm sm:text-base leading-relaxed mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DÓNDE ESTAMOS (SUCURSALES Y MAPAS) */}
      <section id="donde-estamos" className="py-24 bg-[#2C1810] text-[#F5EDD6] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold mb-4 text-[#F5EDD6]">Dónde Estamos</h2>
            <div className="w-24 h-1.5 bg-[#C8860A] mx-auto mb-6 rounded-full" />
            <p className="font-lato text-[#F5EDD6]/90 max-w-4xl mx-auto text-base sm:text-lg leading-relaxed">
              Para que siempre encuentres tus empanadas favoritas listas y calentitas, contamos con sucursales distribuidas de forma estratégica en toda la ciudad y Sierras Chicas. Nos vas a encontrar en Zona Norte (con nuestra tradicional casa central en el Cerro de las Rosas, Urca y Recta Martinolli), en Zona Sur (Barrio Jardín), en Zona Este (Juniors) y también acompañándote en tus paseos por las sierras con nuestros locales en Villa Allende y Mendiolaza (El Talar). Siempre hay un Chalcha cerca tuyo para salvar el almuerzo o la cena.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SUCURSALES.map((sucursal) => (
              <div key={sucursal.id} className="bg-white text-[#2C1810] rounded-2xl overflow-hidden shadow-2xl flex flex-col sm:flex-row border-t-4 border-[#C8860A] hover:-translate-y-1.5 transition-transform duration-300">
                
                <div className="p-7 sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-xl font-bold mb-2 text-[#C8860A]">{sucursal.name}</h3>
                    
                    {/* Estrellas y Reviews */}
                    <div className="flex items-center gap-2 mb-4 font-lato">
                      <span className="font-bold">{sucursal.rating}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">({sucursal.reviews})</span>
                    </div>

                    <div className="space-y-3 font-lato text-gray-800 text-sm">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#C8860A] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        <span>{sucursal.address}</span>
                      </div>
                    </div>
                  </div>

                  <a href={sucursal.mapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center w-full bg-[#2C1810] text-[#F5EDD6] py-2.5 rounded-xl font-bold font-lato hover:bg-[#C8860A] transition-colors">
                    Cómo llegar <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>

                <div className="h-64 sm:h-auto sm:w-1/2 bg-gray-200">
                  <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src={sucursal.embedUrl} title={`Mapa de ${sucursal.name}`} className="w-full h-full min-h-[250px] opacity-90 hover:opacity-100 transition-opacity"></iframe>
                </div>
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
            <p className="font-lato text-gray-600">Sumate al modelo de empanadas salteñas tradicionales con más de 30 años de experiencia.</p>
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
            <button type="submit" className="w-full bg-[#C8860A] text-white font-bold py-3.5 rounded-xl hover:bg-[#a66f08] transition-colors shadow-lg">Solicitar Información</button>
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
      <a href="https://wa.me/5493510000000?text=Hola!%20Quiero%20hacer%20un%20pedido%20en%20El%20Chalcha" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 2C6.495 2 2 6.494 2 12.031c0 1.947.556 3.766 1.517 5.309L2.1 22l4.821-1.393c1.472.871 3.208 1.378 5.11 1.378 5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm0 18.257c-1.688 0-3.264-.476-4.607-1.303l-.33-.203-2.859.827.839-2.772-.216-.345A8.188 8.188 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257zm4.526-6.177c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.187-.538.063-.248-.124-1.047-.386-1.994-1.23-.737-.658-1.235-1.471-1.38-1.719-.145-.248-.016-.382.108-.505.112-.111.248-.29.373-.435.124-.145.166-.248.248-.414.083-.166.042-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.427h-.477c-.166 0-.435.062-.663.311-.228.248-.87 0.85-.87 2.073 0 1.223.891 2.405 1.015 2.571.124.166 1.753 2.677 4.246 3.754.593.256 1.056.409 1.417.524.595.189 1.137.162 1.565.098.477-.071 1.468-.6 1.675-1.181.207-.581.207-1.078.145-1.181-.062-.103-.228-.166-.477-.29z" />
        </svg>
      </a>
    </div>
  );
}
