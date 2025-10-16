import { Link, Outlet, useLocation } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'

export default function App(){
  const { pathname } = useLocation()
  const is = (p:string)=> pathname===p ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-600  dark:text-gray-400'
  return (
    <div className="min-h-screen flex flex-col dark:bg-[#091a36]/80 dark:text-white">
      <header className="border-b bg-white/70 backdrop-blur dark:bg-[#00183d]/80 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4 dark:text-white">
          <Link to="/" className="font-bold">Jyutfolio</Link>
          <nav className="ml-auto flex items-center gap-4 text-sm">
            <ThemeToggle />
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
