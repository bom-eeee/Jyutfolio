import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/globals.css'
import App from './App'

import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
// import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,   // ← 에러 경계
    children: [
      { index: true, element: <About /> },
      { path: 'skills', element: <Skills /> },
      { path: 'projects', element: <Projects /> },
      // { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> }, // ← 404 캐치
    ],
  },
],
{
  basename: import.meta.env.BASE_URL, // Vite가 주는 값과 자동 동기화: '/Jyutfolio/' 또는 '/'
}
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
