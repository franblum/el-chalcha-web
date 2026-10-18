import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Chalcha® | Las Mejores Empanadas Salteñas",
  description: "Empanadas salteñas artesanales en Córdoba. Receta original desde 1990.",
  icons: {
    icon: '/el-chalcha-web/logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Motor de Tailwind CDN como respaldo garantizado */}
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-[#F5EDD6] text-[#2C1810] antialiased">
        {children}
      </body>
    </html>
  );
}
