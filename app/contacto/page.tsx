import Header from "../ui/cabecera";
import Footer from "../ui/footer";
import styles from './contacto.module.css';
import Link from "next/link";

export default function PreguntasFrecuentes() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {/* SUBTÍTULO */}
      <h1 className={`py-8 px-6 text-center text-4xl font-bold text-purple-700 ${styles.typingAnimation}`}>Preguntas frecuentes</h1>
      <section className="flex flex-col grow py-3 px-4">
        <div className="flex flex-col justify-center items-center rounded-xl shadow-lg bg-neutral-50 p-6 gap-4">
            <div className={"flex text-2xl font-semibold text-center text-purple-700 mb-4"}>
                <p>
                ¿Tienes más preguntas? No dudes en{" "}
                <Link 
                href="/contacto" className="transition duration-200 hover:text-indigo-600 hover:underline hover:underline-offset-1"
                >
                contactarnos       
                </Link>
                </p>
            </div>
            <div className="grid grid-cols-3 grid-row-2 gap-4">  
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className="py-3 font-semibold text-center text-xl text-purple-600">Pregunta 1</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                
                </p>
                </div>
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className="py-3 font-semibold text-xl text-center text-purple-600">Pregunta 2</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                
                </p>
                </div>
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className="py-3 font-semibold text-xl text-center text-purple-600">Pregunta 3</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                
                </p>
                </div>
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className="py-3 font-semibold text-xl text-center text-purple-600">Pregunta 4</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                
                </p>
                </div>
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className="py-3 font-semibold text-xl text-center text-purple-600">Pregunta 5</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                
                </p>
                </div>
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className="py-3 font-semibold text-xl text-center text-purple-600">Pregunta 6</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.                
                </p>
                </div>               
            </div>       
        </div>

      </section>
      
      <Footer />
    </main>
  );
}