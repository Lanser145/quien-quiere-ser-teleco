/* En links.tsx se conectan las páginas además de indicar un patrón de enlaces activos */
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'PREGUNTAS FRECUENTES', href: '/preguntas-frecuentes' },
  { name: 'CONTACTO', href: '/contacto' },
  { name: 'SOBRE NOSOTROS', href: '/sobre-nosotros' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {  
        return ( 
          <Link
            key={link.name}
            href={link.href}
            
            className={clsx(
              'font-light rounded-lg hover:bg-gradient-to-br hover:from-purple-900 hover:via-purple-500 hover:to-purple-700 hover:font-semibold py-2 px-4 shadow-md',
              {
                'scale-105 ring-2 ring-teal-200 text-slate-200 bg-gradient-to-br from-purple-900 via-purple-500 to-purple-700 font-semibold': pathname === link.href,
              },
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
