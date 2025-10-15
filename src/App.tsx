import { Link, Outlet, useLocation } from 'react-router-dom'

export default function App(){
  const { pathname } = useLocation()
  const is = (p:string)=> pathname===p ? 'font-semibold text-gray-900' : 'text-gray-600'
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/" className="font-bold">Jyutfolio</Link>
          <nav className="ml-auto flex gap-4 text-sm">
            <Link to="/" className={is('/')}>About</Link>
            <Link to="/skills" className={is('/skills')}>Skills</Link>
            <Link to="/projects" className={is('/projects')}>Projects</Link>
            <Link to="/contact" className={is('/contact')}>Contact</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-5xl mx-auto px-4 py-10">
        <Outlet/>
      </main>
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jyu
      </footer>
    </div>
  )
}
