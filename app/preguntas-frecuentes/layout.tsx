import Header from "../ui/cabecera";

export default function RootLayout (
    { children } : { children: React.ReactNode }
)
{
    return (
        <div className="flex flex-col min-h-screen justify-between p-5 bg-white">
        <Header /> 
      {/*Este COMENTARIO DIV es el que muestra todo lo que hay en page.tsx*/}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    )
}

 
