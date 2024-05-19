import Link from 'next/link';
import NavLinks from './links';

export default function Header() {
  return (
      <header>
        <div className="pt-4 px-4">  
          <div className="flex h-16 px-5 font-medium text-sm rounded-xl text-white items-center bg-gradient-to-br from-purple-700 via-purple-500 to-purple-900">
            <div className="flex grow items-center">
              <Link href="/" className="flex items-center hover:font-semibold">
                <span className="text-2xl">Q</span>
                <span>uien quiere ser teleco</span>
              </Link>
            </div>
            <div className="flex items-center justify-between space-x-6"> 
            <NavLinks/>
              <Link href="/idioma" className="font-mono rounded-xl hover:bg-gradient-to-br hover:from-purple-900 hover:via-purple-500 hover:to-purple-700 hover:font-semibold py-2 px-4 shadow-md">
                <span>IDI</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
  );
}
