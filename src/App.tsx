import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'

export default function App(){
  const { pathname } = useLocation()

  // 페이지가 바뀔 때마다 최상단으로
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname]);

  const is = (p:string)=> pathname===p ? 'font-semibold text-gray-900 underline underline-offset-4 dark:text-white' : 'text-gray-600  dark:text-gray-400'

  return (
    <div className="min-h-screen flex flex-col dark:bg-[#091a36]/80 dark:text-white">
      <header className="border-b bg-white/70 backdrop-blur dark:bg-[#0b0f1a]/70 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/" className="font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded">Jyutfolio</Link>
          <div className="ml-auto flex items-center gap-3">
            <nav className="ml-auto flex items-center gap-4 text-sm">
              <ThemeToggle />
              <Link to="/" className={`${is('/') } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded`}>About</Link>
              <Link to="/skills" className={`${is('/skills') } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded`}>Skills</Link>
              <Link to="/projects" className={`${is('/projects') } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded`}>Projects</Link>
              <Link to="/contact" className={`${is('/contact') } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded`}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <Outlet/>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jyu
      </footer>
    </div>
  )
}
