import { Link } from 'react-router-dom'

export default function ErrorPage(){
  return (
    <section className="container-narrow space-y-4 py-16 text-center">
      <h1 className="h2">Oops!</h1>
      <p className="muted">문제가 발생했거나, 존재하지 않는 페이지입니다.</p>
      <Link to="/" className="px-5 py-2 rounded-xl border">홈으로</Link>
    </section>
  )
}