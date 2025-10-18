import { Link, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import ThemeToggle from './components/ThemeToggle'

export default function App(){
  const { pathname } = useLocation()
  const prefersReduced = useReducedMotion()

  // 페이지가 바뀔 때마다 최상단으로
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname]);

  const is = (p:string)=> pathname===p ? 'font-semibold text-yellow-700 underline underline-offset-4 dark:text-violet-200' : 'text-yellow-600 dark:text-violet-300'

  // const pageVariants = {
  //   initial: { opacity: 0, y: 8 },
  //   animate: { opacity: 1, y: 0 },
  //   exit: { opacity: 0, y: -8 },
  // }

  const pageWrap = prefersReduced
    ? { initial: {opacity:1}, animate: {opacity:1}, exit: {opacity:1} }
    : { initial: {opacity:0}, animate: {opacity:1}, exit: {opacity:0} }

  return (
    <div className="min-h-screen bg-yellow-50/20 flex flex-col dark:bg-violet-900/20 dark:text-white">
      <header className="border-b bg-white/80 backdrop-blur dark:bg-violet-900/30 dark:border-white/10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link to="/" className="font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded text-yellow-600 dark:text-violet-400">Jyutfolio</Link>
          <div className="ml-auto flex items-center gap-3">
            <nav className="ml-auto flex items-center gap-4 text-sm">
              <ThemeToggle />
              <Link to="/" className={`${is('/') } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded`}>About</Link>
              <Link to="/skills" className={`${is('/skills') } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded`}>Skills</Link>
              <Link to="/projects" className={`${is('/projects') } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded`}>Projects</Link>
              {/* <Link to="/contact" className={`${is('/contact') } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 rounded`}>Contact</Link> */}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              variants={ pageWrap }
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.22, ease: 'easeOut' }}
            >
              <Outlet/>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Jyu
      </footer>
    </div>
  )
}
