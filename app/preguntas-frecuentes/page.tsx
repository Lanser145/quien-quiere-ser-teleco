import Header from "../ui/cabecera";
import Footer from "../ui/footer";
import styles from './preguntasfrecuentes.module.css';
import Link from "next/link";

export default function PreguntasFrecuentes() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      
      {/* SUBTÍTULO */}
      <h1 className={`py-8 px-6 text-center text-4xl font-bold text-purple-700 ${styles.typingAnimation}`}>
        Preguntas frecuentes
      </h1>
      
      <section className="flex flex-col grow py-3 px-4">
        <div className="flex flex-col justify-center items-center rounded-xl shadow-lg p-6 gap-4 bg-neutral-50">
          <div className={`flex text-2xl font-semibold text-center text-purple-700 mb-4 ${styles.pulse}`}>
            <p>
              ¿Tienes más preguntas? No dudes en{" "}
              <Link href="/contacto" className="transition duration-200 hover:text-indigo-600 hover:underline hover:underline-offset-1">
                contactarnos
              </Link>
            </p>
          </div>
          
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className={`py-3 font-semibold text-opacity-90 text-center text-xl text-purple-700 ${styles.slideInLeft}`}>¿Qué es Teleco Renta?</h3>
                <p className={`text-gray-600 ${styles.fadeInUp}`}>
                Teleco Renta es el Plan de Promoción de los Estudios de Telecomunicación, enmarcado en el programa UNICO...                </p>
                </div>
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className={`py-3 font-semibold text-opacity-90 text-xl text-center text-purple-700 ${styles.slideInLeft}`}>¿Cómo puedo participar en los eventos?</h3>
                <p className={`text-gray-600 ${styles.fadeInUp}`}>
                Puedes participar en los eventos inscribiéndote a través de nuestra página web o siguiendo nuestras redes sociales.                </p>
                </div>
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className={`py-3 font-semibold text-opacity-90 text-xl text-center text-purple-700 ${styles.slideInLeft}`}>¿Qué actividades realizan?</h3>
                <p className={`text-gray-600 ${styles.fadeInUp}`}>
                Realizamos una serie de actividades, incluyendo talleres, seminarios y conferencias, destinadas a promover los estudios de telecomunicación.                </p>
                </div>
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className={`py-3 font-semibold text-opacity-90 text-xl text-center text-purple-700 ${styles.slideInLeft}`}>¿Dónde se pueden seguir las actividades?</h3>
                <p className={`text-gray-600 ${styles.fadeInUp}`}>
                Las actividades de Teleco Renta se pueden seguir en nuestra web y en nuestras redes sociales: Facebook, Instagram, LinkedIn, TikTok, Youtube y X.                </p>
                </div>
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className={`py-3 font-semibold text-opacity-90 text-xl text-center text-purple-700 ${styles.slideInLeft}`}>¿Quiénes pueden participar en Teleco Renta?</h3>
                <p className={`text-gray-600 ${styles.fadeInUp}`}>
                Estudiantes de diferentes niveles pueden participar, con un énfasis en la incorporación de talento femenino e internacional para niveles de máster y doctorado.                </p>
                </div>
                <div className={"text-gray-700 text-justify mb-4 bg-purple-50 p-4 rounded-lg shadow-md"}>
                <h3 className={`py-3 font-semibold text-opacity-90 text-xl text-center text-purple-700 ${styles.slideInLeft}`}>¿Ofrecen algún tipo de apoyo o beca?</h3>
                <p className={`text-gray-600 ${styles.fadeInUp}`}>
                Sí, Teleco Renta ofrece apoyo y becas a estudiantes destacados que desean continuar sus estudios en el campo de las telecomunicaciones.
                </p>
              </div> 
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
  