import Header from "./ui/cabecera";
import Image from 'next/image';
import Footer from "./ui/footer";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex flex-row grow min-w-full gap-4 py-3 px-4">
        <div className="w-1/3 flex flex-col gap-4">
          {/* Contenedor INTRODUCCIÓN */}
          <div className="flex flex-col h-1/2 rounded-xl justify-center items-center">
            <div className="flex h-1/3 min-w-full bg-[rgba(74,110,189,0.42)] rounded-xl justify-center items-center border-b-2 border-l-2 border-r-2 border-dotted border-red-700">
            Nose que poner
          </div>
          <div className="flex h-1/3 min-w-full bg-[rgba(74,189,154,0.35)] rounded-xl justify-center items-center border-l-2 border-r-2 border-dotted border-red-700">
            SAME
          </div>
          <div className="flex h-1/3 min-w-full rounded-xl bg-[rgba(164,189,74,0.35)] justify-center items-center border-t-2 border-l-2 border-r-2 border-dotted border-red-700">
            <button className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 hover:from-purple-800 hover:via-purple-700 hover:to-purple-900 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
              INTRODUCCIÓN
            </button>
          </div>
          </div>
          {/* Contenedor UNIRTE */}
          <div className="flex flex-col h-1/2 rounded-xl justify-center items-center">
            <div className="flex h-1/3 min-w-full bg-neutral-200 rounded-xl justify-center items-center border-b-2 border-l-2 border-r-2 border-dotted border-red-700">
            Nose que poner
          </div>
          <div className="flex h-1/3 min-w-full bg-neutral-200 rounded-xl justify-center items-center border-l-2 border-r-2 border-dotted border-red-700">
            SAME
          </div>
          <div className="flex h-1/3 gap-4 min-w-full bg-neutral-200 rounded-xl justify-center items-center border-t-2 border-l-2 border-r-2 border-dotted border-red-700">
            <button className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 hover:from-purple-800 hover:via-purple-700 hover:to-purple-900 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
              CREAR SALA
            </button>
            <button className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 hover:from-purple-800 hover:via-purple-700 hover:to-purple-900 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
              UNIRTE
            </button> 
            
          </div>
          </div>
        </div>
        {/* Contenedor FOTO */}
        <div className="flex w-2/3 rounded-xl bg-neutral-200 items-center justify-center">
        {/* <Image
        src="/columna-foto.png"
        width={900}
        height={950}
        className="hidde md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      /> */}
        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </main>
  );
}
