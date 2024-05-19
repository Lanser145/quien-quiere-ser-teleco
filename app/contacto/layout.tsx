import Header from "../ui/cabecera";

export default function RootLayout (
    { children } : { children: React.ReactNode }
)
{
    return (
        <div className="flex flex-col min-h-screen justify-between">
       <Header/>
      sfaefw
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div> {/* Este children es el page.tsx contacto */}
    </div>
    )
}

 
