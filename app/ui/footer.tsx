import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/facebook';
import 'react-social-icons/instagram';
import 'react-social-icons/linkedin';
import 'react-social-icons/tiktok';
import 'react-social-icons/youtube';
import 'react-social-icons/x';
import { orbitron } from '../ui/fuentes';
import Link from 'next/link';

export default function Footer() {
    return (
    <footer className="bg-gradient-to-br from-purple-700 via-purple-500 to-purple-900">     
        {/* REDES SOCIALES */}
        <section className="flex items-center justify-center mt-4"> 
            <a
                href="https://www.facebook.com/TelecoRenta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 transition duration-300 hover:text-blue-800 hover:-translate-y-2 hover:scale-110"
                aria-label="Facebook de TelecoRenta"
            >
                <SocialIcon as="div" network="facebook" bgColor="transparent" fgColor="currentColor"/>
            </a>
            {/* <Twitter />https://lucide.dev/guide/packages/lucide-react */}
            <a
                href="https://www.instagram.com/telecorenta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 transition duration-300 hover:text-pink-700 hover:-translate-y-2 hover:scale-110"
                aria-label="Instagram de TelecoRenta"
            >
                <SocialIcon as="div" network="instagram" bgColor="transparent" fgColor="currentColor"/>
            </a>
            <a
                href="https://www.linkedin.com/company/telecorenta/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 transition duration-300 hover:text-blue-900 hover:-translate-y-2 hover:scale-110"
                aria-label="LinkedIn de TelecoRenta"
            >
                <SocialIcon as="div" network="linkedin" bgColor="transparent" fgColor="currentColor"/>
            </a>
            <a
                href="https://www.tiktok.com/@telecorenta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition duration-300 hover:text-gray-700 hover:-translate-y-2 hover:scale-110 "
                aria-label="TikTok de TelecoRenta"
            >
                <SocialIcon as="div" network="tiktok" bgColor="transparent" fgColor="currentColor"/>
            </a>
            <a
                href="https://www.youtube.com/@telecorenta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 transition duration-300 hover:text-red-800 hover:-translate-y-2 hover:scale-110"
                aria-label="YouTube de TelecoRenta"
            >
                <SocialIcon  as="div" network="youtube" bgColor="transparent" fgColor="currentColor"/>
            </a>
            <a 
                href="https://twitter.com/TelecoRenta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition duration-300 hover:text-gray-700 hover:-translate-y-2 hover:scale-110"
                aria-label="Twitter de TelecoRenta"
            >
                <SocialIcon as="div" network="x" bgColor="transparent" fgColor="currentColor"/>
            </a>
        </section> 
        {/* FIN REDES SOCIALES */}

        <section className="font-light text-center mt-4">
            <p className={orbitron.className}>¡Descubre más sobre nosotros en nuestras redes!</p> 
        </section>
                    
        <section className="flex mt-4 pl-4 text-xs text-slate-200">
            <p className="font-mono">Diseñado por</p>
            <p className={`text-indigo-800 pl-2 font-bold ${orbitron.className}`}><b>Sergio Tirado Rosales</b></p>
        </section>
        
        <section className={"flex text-sm font-mono space-x-6 pr-4 mt-4 pb-4 justify-end"}>     
                    © 2024
                <Link href="/contacto" className="pl-6 transition duration-200 hover:text-indigo-600 hover:underline hover:underline-offset-1">
                    Aviso legal       
                </Link>                
                <Link href="/contacto" className="transition duration-200 hover:text-indigo-600 hover:underline hover:underline-offset-1">
                    Contacto        
                </Link>         
        </section>   
    </footer>  
    );
  }
