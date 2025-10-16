import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="container-narrow space-y-4 py-16 text-center">
      <h1 className="h2">404 Not Found</h1>
      <p className="muted">요청하신 페이지를 찾을 수 없어요.</p>
      <Link to="/" className="px-5 py-2 rounded-xl border">홈으로</Link>
    </section>
  )
}