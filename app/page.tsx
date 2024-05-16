import Header from "./ui/cabecera";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-5 bg-white">
      <Header/>
      <button className="bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 hover:from-purple-800 hover:via-purple-700 hover:to-purple-900 text-white font-bold py-3 px-6 rounded-full shadow-md transition duration-300 ease-in-out">
        Start Reading
      </button>
      <div>Este es el contenido de tu página.</div>
    </main>
  );
}
