import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/globals.css'
import App from './App'

const About = () => (
  <section className="min-h-[70vh] grid place-items-center text-center">
    <div className="space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-dreamy-700">Welcome to the Jyutfolio</h1>
      <p className="text-gray-600">
        ‘갓-생’ 프로젝트(P1~P5)로 포트폴리오·LLM 앱·RPA·ERP·게임을 순차 개발/배포 중입니다.
      </p>
      <div className="flex items-center justify-center gap-3">
        <a href="/projects" className="px-5 py-2 rounded-xl border bg-dreamy-100 text-dreamy-800">
          프로젝트 보러가기
        </a>
        <a href="/contact" className="px-5 py-2 rounded-xl border">
          연락하기
        </a>
      </div>
    </div>
  </section>
)

const Skills   = () => <h1 className="text-2xl font-semibold">Skills</h1>
const Projects = () => (
  <section className="container-narrow space-y-6">
    <h1 className="text-2xl font-semibold">Projects</h1>
    <div className="grid sm:grid-cols-2 gap-4">
      {[
        { code:'P1', title:'Portfolio', desc:'개인 포트폴리오 웹' },
        { code:'P2', title:'LLM Apps', desc:'메모리봇·RAG·면접코치·플래너·감정추천' },
        { code:'P3', title:'RPA', desc:'업무 자동화 스크립트' },
        { code:'P4', title:'ERP', desc:'자산/인사/재고 미니 ERP' },
      ].map(x=>(
        <div key={x.code} className="rounded-2xl border p-5 hover:shadow-sm transition">
          <div className="text-xs text-gray-500">{x.code}</div>
          <div className="text-lg font-semibold text-dreamy-700">{x.title}</div>
          <p className="text-sm text-gray-600">{x.desc}</p>
        </div>
      ))}
    </div>
  </section>
)

const Contact  = () => <h1 className="text-2xl font-semibold">Contact</h1>

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
