'use client';

import React, { useState } from 'react';

const MENU_ITEMS = [
  { id: 1, name: 'Salteña', description: 'Carne cortada a cuchillo, cebolla, huevo y cebolla de verdeo. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: false },
  { id: 2, name: 'Pollo', description: 'Pollo desmenuzado, huevo, cebolla, pimiento rojo y arvejas. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: false },
  { id: 3, name: 'Jamón y queso', description: 'Queso mozzarella y cubos de jamón cocido. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: true },
  { id: 4, name: 'Queso, cebolla y morrón', description: 'Queso pategrás, cebolla y morrón salteado. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: true },
  { id: 5, name: 'Criolla dulce', description: 'Carne picada, cebolla, huevo, cebolla de verdeo, pasas de uva y aceitunas verdes. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: true },
  { id: 6, name: 'Cebolla a los 4 quesos', description: 'Queso reggianito, romanito, parmesano y sardo, cebolla cortada en juliana y huevo. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: true },
  { id: 7, name: 'Árabes', description: 'Carne picada cocida en jugo de limón, tomate triturado y cebolla. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: true },
];

const SUCURSALES = [
  {
    id: 1,
    name: 'El Chalcha Núñez',
    address: 'Av. Rafael Núñez N° 5147',
    neighborhood: 'Cerro de las Rosas',
    phone: '3515466840',
    orderUrl: 'https://wa.me/5493515466840?text=Hola!%20Quiero%20hacer%20un%20pedido',
    hasWhatsapp: true,
    rating: '4.6',
    reviews: '743',
    mapUrl: 'https://www.google.com/maps/place/El+Chalchalero/@-31.3567585,-64.2445794,17z/data=!3m1!4b1!4m6!3m5!1s0x9432994b398e9ad9:0x85b1ac27a79a5be!8m2!3d-31.3567631!4d-64.2420045!16s%2Fg%2F11b88ssq03?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Av.%20Rafael%20N%C3%BA%C3%B1ez%205147+(El%20Chalchalero)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 2,
    name: 'El Chalcha Urca',
    address: 'Menéndez Pidal N° 4009',
    neighborhood: 'Urca',
    phone: '3518057414',
    orderUrl: 'https://wa.me/5493518057414?text=Hola!%20Quiero%20hacer%20un%20pedido',
    hasWhatsapp: true,
    rating: '4.4',
    reviews: '152',
    mapUrl: 'https://www.google.com/maps/place/El+Chalchalero+-+Urca/@-31.3819053,-64.2428665,17z/data=!3m1!4b1!4m6!3m5!1s0x9432992368ae4395:0x894b2ef54c00c1a5!8m2!3d-31.3819099!4d-64.2402916!16s%2Fg%2F11hhmjg661?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Men%C3%A9ndez%20Pidal%204009+(El%20Chalchalero%20Urca)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 3,
    name: 'El Chalcha Recta',
    address: 'Recta Martinolli N° 8144',
    neighborhood: 'Argüello',
    phone: '03543405895',
    orderUrl: '', // No tiene WhatsApp
    hasWhatsapp: false,
    rating: '4.5',
    reviews: '387',
    mapUrl: 'https://www.google.com/maps/place/El+Chalchalero+-+Recta+Martinolli/@-31.3468262,-64.2772027,17z/data=!3m1!4b1!4m6!3m5!1s0x94329e9d83bc5a55:0xb7983dcde18830c!8m2!3d-31.3468308!4d-64.2746278!16s%2Fg%2F1ptyt2055?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Av.%20Recta%20Martinolli%208144+(El%20Chalchalero%20Recta%20Martinolli)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 4,
    name: 'El Chalcha Valle Escondido',
    address: 'Soldado Ramón Ángel Cabrera N° 6870 (local 1)',
    neighborhood: 'Valle Escondido',
    phone: '3517612950',
    orderUrl: 'https://wa.me/5493517612950?text=Hola!%20Quiero%20hacer%20un%20pedido',
    hasWhatsapp: true,
    rating: '4.8',
    reviews: '23',
    mapUrl: 'https://maps.google.com/?q=Soldado+Ramon+Angel+Cabrera+6870',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Soldado%20Ramon%20Angel%20Cabrera%206870+(El%20Chalcha%20Valle%20Escondido)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 5,
    name: 'El Chalcha Jardín',
    address: 'Av. Pablo Richieri N° 3071',
    neighborhood: 'Barrio Jardín',
    phone: '3517013351',
    orderUrl: 'https://wa.me/5493517013351?text=Hola!%20Quiero%20hacer%20un%20pedido',
    hasWhatsapp: true,
    rating: '4.9',
    reviews: '50',
    mapUrl: 'https://www.google.com/maps/place/El+Chalcha+Empanadas+-+B+Jardin+(El+Chalchalero)/@-31.4475304,-64.1789575,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a388ddf488c9:0x65dd0acb91ffb15b!8m2!3d-31.447535!4d-64.1763826!16s%2Fg%2F11x6jkt8px?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Av.%20Pablo%20Ricchieri%203071+(El%20Chalcha%20Empanadas)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 6,
    name: 'El Chalcha Juniors',
    address: 'Río Cuarto N° 597',
    neighborhood: 'Juniors',
    phone: '3515128813',
    orderUrl: 'https://wa.me/5493515128813?text=Hola!%20Quiero%20hacer%20un%20pedido',
    hasWhatsapp: true,
    rating: '4.7',
    reviews: '170',
    mapUrl: 'https://www.google.com/maps/place/El+Chalchalero+Juniors/@-31.4202496,-64.1698323,17z/data=!3m1!4b1!4m6!3m5!1s0x9432a376c4c0bf8b:0xc15576f8ef05e3f4!8m2!3d-31.4202542!4d-64.1672574!16s%2Fg%2F11jxf2pm21?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=R%C3%ADo%20Cuarto%20597+(El%20Chalchalero%20Juniors)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 7,
    name: 'El Chalcha Villa Allende',
    address: '25 de mayo N° 25 (local 5)',
    neighborhood: 'Villa Allende',
    phone: '3512300123',
    orderUrl: 'https://wa.me/5493512300123?text=Hola!%20Quiero%20hacer%20un%20pedido',
    hasWhatsapp: true,
    rating: '4.4',
    reviews: '43',
    mapUrl: 'https://www.google.com/maps/place/El+Chalcha/@-31.2952584,-64.2993418,17z/data=!3m1!4b1!4m6!3m5!1s0x94329d70d4dbc0fd:0x1e74ecc6e7a46a48!8m2!3d-31.295263!4d-64.2967669!16s%2Fg%2F11kr_346xd?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=25%20de%20Mayo%2025+(El%20Chalcha)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  },
  {
    id: 8,
    name: 'El Chalcha El Talar',
    address: 'Av. Tissera 3253',
    neighborhood: 'Mendiolaza',
    phone: '3543608293',
    orderUrl: 'https://wa.me/5493543608293?text=Hola!%20Quiero%20hacer%20un%20pedido',
    hasWhatsapp: true,
    rating: '5.0',
    reviews: '11',
    mapUrl: 'https://www.google.com/maps/place/El+Chalcha+el+talar/@-31.2545207,-64.2676539,17z/data=!3m1!4b1!4m6!3m5!1s0x943283dec706632f:0xf259ca9ae348b376!8m2!3d-31.2545253!4d-64.265079!16s%2Fg%2F11njmc1tpv?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D',
    embedUrl: 'https://maps.google.com/maps?width=100%25&height=600&hl=es&q=Av.%20Mart%C3%ADn%20Tissera%203253+(El%20Chalcha%20el%20talar)&t=&z=15&ie=UTF8&iwloc=B&output=embed'
  }
];

export default function ElChalchaWeb() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filtramos las sucursales para el PopUp (las que tienen WhatsApp)
  const sucursalesConWhatsapp = SUCURSALES.filter(sucursal => sucursal.hasWhatsapp);

  return (
    <div className="min-h-screen bg-[#F5EDD6] text-[#2C1810] font-sans selection:bg-[#C8860A] selection:text-white relative">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Pacifico&family=Playfair+Display:wght@600;700;800&display=swap');
        .font-pacifico { font-family: 'Pacifico', cursive; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-lato { font-family: 'Lato', sans-serif; }
      `}} />

      {/* POP-UP (MODAL) DE SUCURSALES (SÓLO LAS QUE TIENEN WHATSAPP) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity">
          <div className="bg-[#F5EDD6] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
            <button 
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-5 right-5 text-[#F5EDD6] hover:text-[#C8860A] transition-colors bg-[#2C1810]/50 hover:bg-[#2C1810] rounded-full p-1 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="p-8 bg-[#2C1810] text-[#F5EDD6] text-center border-b-4 border-[#C8860A]">
              <h3 className="font-playfair text-3xl font-bold mb-2">Elegí tu sucursal</h3>
              <p className="font-lato text-sm opacity-90">Seleccioná el local más cercano para hacer tu pedido</p>
            </div>
            <div className="overflow-y-auto p-4 flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {sucursalesConWhatsapp.map((sucursal) => (
                  <div key={sucursal.id} className="flex flex-col p-4 rounded-xl border border-[#C8860A]/20 bg-white hover:border-[#C8860A] hover:shadow-md transition-all group">
                    <span className="font-playfair font-bold text-lg text-[#C8860A]">{sucursal.name}</span>
                    <span className="font-lato text-[#2C1810] font-bold mt-1">{sucursal.neighborhood}</span>
                    <span className="font-lato text-sm text-gray-600 mb-4">{sucursal.address}</span>
                    
                    <div className="flex gap-2 mt-auto">
                        <a href={`tel:${sucursal.phone}`} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-lato text-sm font-bold flex items-center justify-center gap-1 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            Llamar
                        </a>
                        <a href={sucursal.orderUrl} target="_blank" rel="noreferrer" className="flex-1 bg-[#25D366] hover:bg-[#20b858] text-white py-2 rounded-lg font-lato text-sm font-bold flex items-center justify-center gap-1 transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 2C6.495 2 2 6.494 2 12.031c0 1.947.556 3.766 1.517 5.309L2.1 22l4.821-1.393c1.472.871 3.208 1.378 5.11 1.378 5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm0 18.257c-1.688 0-3.264-.476-4.607-1.303l-.33-.203-2.859.827.839-2.772-.216-.345A8.188 8.188 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257zm4.526-6.177c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.187-.538.063-.248-.124-1.047-.386-1.994-1.23-.737-.658-1.235-1.471-1.38-1.719-.145-.248-.016-.382.108-.505.112-.111.248-.29.373-.435.124-.145.166-.248.248-.414.083-.166.042-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.427h-.477c-.166 0-.435.062-.663.311-.228.248-.87 0.85-.87 2.073 0 1.223.891 2.405 1.015 2.571.124.166 1.753 2.677 4.246 3.754.593.256 1.056.409 1.417.524.595.189 1.137.162 1.565.098.477-.071 1.468-.6 1.675-1.181.207-.581.207-1.078.145-1.181-.062-.103-.228-.166-.477-.29z" /></svg>
                            WhatsApp
                        </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#C8860A] text-white px-6 py-2.5 rounded-full hover:bg-[#a66f08] transition-all shadow-md transform hover:scale-105"
              >
                Pedir por WhatsApp
              </button>
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
            <button 
              onClick={() => { setMenuAbierto(false); setIsModalOpen(true); }}
              className="block w-full mt-4 text-center bg-[#C8860A] text-white py-3 rounded-full"
            >
              Pedir por WhatsApp
            </button>
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
            <button onClick={() => setIsModalOpen(true)} className="bg-[#C8860A] text-white px-8 py-3.5 rounded-full font-lato font-bold text-lg hover:bg-[#a66f08] transition-all shadow-xl border-2 border-[#C8860A]">
              Hacer un Pedido
            </button>
            <a href="#donde-estamos" className="bg-transparent text-[#F5EDD6] px-8 py-3.5 rounded-full font-lato font-bold text-lg hover:bg-[#F5EDD6] hover:text-[#2C1810] transition-all border-2 border-[#F5EDD6] shadow-xl">
              Nuestras Sucursales
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
                    <h3 className="font-playfair text-xl font-bold mb-1 text-[#C8860A]">{sucursal.name}</h3>
                    <p className="font-lato font-bold text-gray-500 mb-2">{sucursal.neighborhood}</p>
                    
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

                  <a href={sucursal.mapUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center w-full bg-gray-100 text-[#2C1810] py-2.5 rounded-xl font-bold font-lato border border-gray-300 hover:bg-gray-200 transition-colors">
                    Cómo llegar <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>

                <div className="h-64 sm:h-auto sm:w-1/2 bg-gray-200 flex flex-col">
                  {/* Mapa Interactivo */}
                  <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src={sucursal.embedUrl} title={`Mapa de ${sucursal.name}`} className="w-full flex-grow min-h-[200px] opacity-90 hover:opacity-100 transition-opacity"></iframe>
                  
                  {/* Botones de acción debajo del mapa */}
                  <div className="flex bg-[#2C1810]">
                    <a href={`tel:${sucursal.phone}`} className={`${sucursal.hasWhatsapp ? 'w-1/2' : 'w-full'} py-3.5 text-center text-white font-bold font-lato hover:bg-red-700 border-r border-white/10 flex items-center justify-center gap-2 transition-colors`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      Llamar
                    </a>
                    {sucursal.hasWhatsapp && (
                      <a href={sucursal.orderUrl} target="_blank" rel="noreferrer" className="w-1/2 py-3.5 text-center text-white font-bold font-lato hover:bg-[#20b858] flex items-center justify-center gap-2 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 2C6.495 2 2 6.494 2 12.031c0 1.947.556 3.766 1.517 5.309L2.1 22l4.821-1.393c1.472.871 3.208 1.378 5.11 1.378 5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm0 18.257c-1.688 0-3.264-.476-4.607-1.303l-.33-.203-2.859.827.839-2.772-.216-.345A8.188 8.188 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257zm4.526-6.177c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.187-.538.063-.248-.124-1.047-.386-1.994-1.23-.737-.658-1.235-1.471-1.38-1.719-.145-.248-.016-.382.108-.505.112-.111.248-.29.373-.435.124-.145.166-.248.248-.414.083-.166.042-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.427h-.477c-.166 0-.435.062-.663.311-.228.248-.87 0.85-.87 2.073 0 1.223.891 2.405 1.015 2.571.124.166 1.753 2.677 4.246 3.754.593.256 1.056.409 1.417.524.595.189 1.137.162 1.565.098.477-.071 1.468-.6 1.675-1.181.207-.581.207-1.078.145-1.181-.062-.103-.228-.166-.477-.29z" /></svg>
                        Pedir
                      </a>
                    )}
                  </div>
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

      {/* BOTÓN FLOTANTE WHATSAPP (Abre Modal) */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center" 
        aria-label="Hacer un pedido"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 2C6.495 2 2 6.494 2 12.031c0 1.947.556 3.766 1.517 5.309L2.1 22l4.821-1.393c1.472.871 3.208 1.378 5.11 1.378 5.536 0 10.031-4.495 10.031-10.031S17.567 2 12.031 2zm0 18.257c-1.688 0-3.264-.476-4.607-1.303l-.33-.203-2.859.827.839-2.772-.216-.345A8.188 8.188 0 013.774 12.03c0-4.553 3.704-8.257 8.257-8.257 4.553 0 8.257 3.704 8.257 8.257 0 4.553-3.704 8.257-8.257 8.257zm4.526-6.177c-.248-.124-1.468-.724-1.696-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.187-.538.063-.248-.124-1.047-.386-1.994-1.23-.737-.658-1.235-1.471-1.38-1.719-.145-.248-.016-.382.108-.505.112-.111.248-.29.373-.435.124-.145.166-.248.248-.414.083-.166.042-.311-.021-.435-.062-.124-.56-1.349-.767-1.847-.202-.486-.407-.42-.56-.427h-.477c-.166 0-.435.062-.663.311-.228.248-.87 0.85-.87 2.073 0 1.223.891 2.405 1.015 2.571.124.166 1.753 2.677 4.246 3.754.593.256 1.056.409 1.417.524.595.189 1.137.162 1.565.098.477-.071 1.468-.6 1.675-1.181.207-.581.207-1.078.145-1.181-.062-.103-.228-.166-.477-.29z" />
        </svg>
      </button>
    </div>
  );
}
