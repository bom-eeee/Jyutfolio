export default function Contact(){
  return (
    <section className="container-narrow space-y-4 text-center">
      <h1 className="h2 text-yellow-900 dark:text-violet-200">Contact</h1>
      <p className="text-gray-600">협업/문의는 아래로 연락 주세요.</p>
      <div className="flex items-center justify-center gap-3">
        <a className="btn-ghost" href="mailto:you@example.com">Email</a>
        <a className="btn-ghost" href="https://github.com/bom-eeee" target="_blank">GitHub</a>
        <a className="btn-ghost" href="/resume.pdf" target="_blank">Resume</a>
      </div>
    </section>
  )
}