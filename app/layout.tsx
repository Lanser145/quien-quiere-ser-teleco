import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quien quiere ser teleco",
  description: "Quien quiere ser teleco presenta a través de diferentes quiz todo lo relacionado con el mundo de las telecomunicaciones. Especialmente dedicado para primero o segundo de bachiller. Puedes jugarlo desde cualquier dispositivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body 
        className={`${inter.className} antialiased bg-white`}> 
         {children} {/* Este children es el page.tsx principal */}
        <footer>Este es el footer</footer>  
      </body>
      
    </html>
  );
}
