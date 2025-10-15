import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/globals.css'
import App from './App'

const About = () => (
  <section className="min-h-[70vh] grid place-items-center text-center">
    <div className="space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-dreamy-700">Welcome to the Jyutfolio !</h1>
      <p className="text-2xl font-bold text-gray-600 dark:text-white">
        《 갓 - 생 프로젝트 》
      </p>
      <p className="text-gray-600 dark:text-gray-400"><i>
        포트폴리오 · LLM 앱 · RPA · ERP · 게임 순차 개발/배포 중 . . .</i>
      </p>
      <p className="muted dark:text-gray-400">
        P1 · P2 · P3 · P4 · P5 
      </p>
      <div className="flex items-center justify-center gap-3">
        <a href="/projects" className="px-5 py-2 rounded-xl border bg-dreamy-100 text-dreamy-800 dark:bg-[#091a36]/80 dark:text-white">
          프로젝트 보러가기
        </a>
        <a href="/contact" className="px-5 py-2 rounded-xl border dark:bg-[#091a36]/80 dark:text-white">
          연락하기
        </a>
      </div>
      <p className="muted dark:text-white/80">최근 진행: P1 부팅 · Tailwind 적용 · 라우팅 구성</p>
    </div>
  </section>
)

const Skills = () => (
  <section className="container-narrow space-y-6">
    <h1 className="h2">Skills</h1>
    <div className="space-y-2">
      <h2 className="font-semibold">Web</h2>
      <div className="flex flex-wrap gap-2">
        {['React','TypeScript','Vite','Tailwind','Node/FastAPI'].map(s=>(
          <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
        ))}
      </div>
    </div>
    <div className="space-y-2">
      <h2 className="font-semibold">AI / Data</h2>
      <div className="flex flex-wrap gap-2">
        {['OpenAI API','RAG','Embeddings','LangChain (opt)'].map(s=>(
          <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
        ))}
      </div>
    </div>
    <div className="space-y-2">
      <h2 className="font-semibold">DevOps</h2>
      <div className="flex flex-wrap gap-2">
        {['Git/GitHub','Docker','GitHub Actions','Vercel/Pages'].map(s=>(
          <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
        ))}
      </div>
    </div>
  </section>
)

const Projects = () => (
  <section className="container-narrow space-y-6">
    <h1 className="h2">Projects</h1>
    <div className="grid sm:grid-cols-2 gap-4">
      {[
        { code:'P1', title:'Portfolio', desc:'개인 포트폴리오 웹' },
        { code:'P2', title:'LLM Apps', desc:'메모리봇·RAG·면접코치·플래너·감정추천' },
        { code:'P3', title:'RPA', desc:'업무 자동화 스크립트' },
        { code:'P4', title:'ERP', desc:'자산/인사/재고 미니 ERP' },
      ].map(x=>(
        <a key={x.code} className="group card block dark:border-white/10 dark:hover:shadow-none">
          <div className="text-xs text-gray-500 dark:text-gray-400">{x.code}</div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-semibold text-dreamy-700 dark:text-white">{x.title}</div>
            <span className="translate-x-0 group-hover:translate-x-1 transition">→</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{x.desc}</p>
        </a>
      ))}
    </div>
  </section>
)

const Contact = () => (
  <section className="container-narrow space-y-4 text-center">
    <h1 className="h2">Contact</h1>
    <p className="text-gray-600">협업/문의는 아래로 연락 주세요.</p>
    <div className="flex items-center justify-center gap-3">
      <a className="btn-ghost" href="mailto:you@example.com">Email</a>
      <a className="btn-ghost" href="https://github.com/your-id" target="_blank">GitHub</a>
      <a className="btn-ghost" href="/resume.pdf" target="_blank">Resume</a>
    </div>
  </section>
)

const router = createBrowserRouter([
  { path: '/', element: <App/>, children: [
    { index: true, element: <About/> },
    { path: 'skills', element: <Skills/> },
    { path: 'projects', element: <Projects/> },
    { path: 'contact', element: <Contact/> },
  ] }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
