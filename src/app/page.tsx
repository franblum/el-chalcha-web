'use client';

import React, { useState } from 'react';

const MENU_ITEMS = [
  { id: 1, name: 'Salteña', description: 'Carne cortada a cuchillo, cebolla, huevo y cebolla de verdeo. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: true },
  { id: 2, name: 'Pollo', description: 'Pollo desmenuzado, huevo, cebolla, pimiento rojo y arvejas. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: false },
  { id: 3, name: 'Jamón y queso', description: 'Queso mozzarella y cubos de jamón cocido. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: true },
  { id: 4, name: 'Queso, cebolla y morrón', description: 'Queso pategrás, cebolla y morrón salteado. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: true },
  { id: 5, name: 'Criolla dulce', description: 'Carne picada, cebolla, huevo, cebolla de verdeo, pasas de uva y aceitunas verdes. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: true },
  { id: 6, name: 'Cebolla a los 4 quesos', description: 'Queso reggianito, romanito, parmesano y sardo, cebolla cortada en juliana y huevo. Empanadas frescas, elaboradas diariamente, sin conservantes, sin congelar.', isPopular: false },
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
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.0837373853888!2d-64.24489662468648!3d-31.356668393366412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432994b4b766547%3A0x1b11e8a3245cca1f!2zQXYuIFJhZmFlbCBOw7rDsWV6IDUxNDcsIFg1MDIxIEPDs3Jkb2Jh!5e0!3m2!1ses-419!2sar!4v1792302803545!5m2!1ses-419!2sar'
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
    orderUrl: '',
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
      <style dangerouslySetInnerHTML
