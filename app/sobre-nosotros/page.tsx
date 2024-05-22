import Header from "../ui/cabecera";
import Footer from "../ui/footer";
import styles from './sobrenosotros.module.css';

export default function SobreNosotros() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      {/* SUBTÍTULO */}
      <h1 className={`py-8 px-6 text-center text-4xl font-bold text-purple-700 ${styles.typingAnimation}`}>Sobre Nosotros</h1>
      <section className="flex flex-col grow min-w-full py-3 px-4">
        <div className="flex flex-row gap-4">
          <div className="w-1/2 flex flex-col rounded-xl shadow-lg p-6 gap-4">
            <h2 className={`text-2xl font-semibold text-center text-purple-700 mb-4 ${styles.pulse}`}>Nuestra Historia</h2>
            <p className={`text-gray-700 text-justify mb-4 ${styles.fadeInUp}`}>
              Este juego es parte de las actividades de Teleco Renta, el Plan de Promoción de los Estudios de Telecomunicación. Teleco Renta se enmarca en el programa UNICO (UNiversalización de Infraestructuras digitales para la COhesión), auspiciado por la Secretaría de Estado de Telecomunicaciones e Infraestructuras Digitales del Gobierno de España, y el objetivo es la atracción de talento hacia los estudios de telecomunicaciones, ayudando a resolver así la escasez de talento en tecnologías tales como el 5G avanzado y el 6G, fundamentales para los centros de investigación y para las industrias.
            </p>
            <p className={`text-gray-700 text-justify mb-4 ${styles.fadeInUp}`}>
              El plan está desplegando una serie de acciones para la difusión de estos estudios entre los diferentes niveles de estudiantes, de manera que contribuya a mejorar la atracción de buenos alumnos a los mismos, haciendo al mismo tiempo énfasis en la incorporación de talento femenino, y de estudiantes internacionales para los niveles de máster y de doctorado.
            </p>
            <p className={`text-gray-700 text-justify mb-4 ${styles.fadeInUp}`}>
              Las actividades e información de Teleco Renta se pueden seguir en la web <a href="https://www.telecorenta.es" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.telecorenta.es</a> y en las principales redes sociales (Facebook, Instagram, LinkedIn, TikTok, Youtube y X).
            </p>
          </div>
          <div className={"w-1/2 flex rounded-xl bg-neutral-200 items-center justify-center relative"}>
            {/* <Image
              src="/images/teleco-renta-logo.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-xl ease-in-out"
              alt="Teleco Renta"
            /> */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
              <div className="text-white text-center">
                <h3 className={"text-4xl font-bold fadeInUp"}>¡Únete a Nosotros!</h3>
                <p className={`mt-4 text-lg ${styles.fadeInUp}`}>Forma parte de una comunidad dedicada a la innovación en telecomunicaciones.</p>
                <button className={`mt-6 bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 hover:from-purple-800 hover:via-purple-700 hover:to-purple-900 text-white font-bold py-2 px-6 rounded-full shadow-md transition duration-300 ease-in-out ${styles.fadeInUp}`}>
                  Aprende Más
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`rounded-xl shadow-lg p-6 mt-4 ${styles.pulse}`}>
          <h2 className={`text-2xl font-semibold text-center text-purple-700 mb-4 ${styles.pulse}`}>Nuestras Estadísticas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className={`bg-purple-50 p-4 rounded-lg shadow-md ${styles.pulse}`}>
              <h4 className={`text-2xl font-bold text-purple-700 ${styles.pulse}`}>10K+</h4>
              <p className={`text-gray-700 ${styles.pulse}`}>Estudiantes Impactados</p>
            </div>
            <div className={`bg-purple-50 p-4 rounded-lg shadow-md ${styles.pulse}`}>
              <h4 className={`text-2xl font-bold text-purple-700 ${styles.pulse}`}>500+</h4>
              <p className={`text-gray-700 ${styles.pulse}`}>Eventos Realizados</p>
            </div>
            <div className={`bg-purple-50 p-4 rounded-lg shadow-md ${styles.pulse}`}>
              <h4 className={`text-2xl font-bold text-purple-700 ${styles.pulse}`}>100+</h4>
              <p className={`text-gray-700 ${styles.pulse}`}>Instituciones Participantes</p>
            </div>
            <div className={`bg-purple-50 p-4 rounded-lg shadow-md ${styles.pulse}`}>
              <h4 className={`text-2xl font-bold text-purple-700 ${styles.pulse}`}>50+</h4>
              <p className={`text-gray-700 ${styles.pulse}`}>Colaboraciones con Empresas</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
