import { Link } from 'react-router-dom'

export default function Contact(){
  return (
    <section className="container-narrow space-y-4 text-center">
      <h1 className="h2 text-yellow-900 dark:text-violet-300">Contact</h1>
      <p className="text-gray-600">문의 및 버그 제보</p>
      <div className="flex items-center justify-center gap-3">
        <Link className="btn-ghost" to="mailto:qkrgmlwn012@naver.com">Email</Link>
        <Link className="btn-ghost" to="https://github.com/bom-eeee" target="_blank">GitHub</Link>
        <Link className="btn-ghost" to="https://www.instagram.com/its__yummy__" target="_blank">Instagram</Link>
        {/* <Link className="btn-ghost" to="https://www.linkedin.com/in/jyu-its/" target="_blank">Notion</Link> */}
      </div>
    </section>
  )
}