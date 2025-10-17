import { Link } from 'react-router-dom'

export default function About(){
  return (
    <section className="min-h-[70vh] grid place-items-center text-center">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-400 dark:text-violet-400">Welcome to the Jyutfolio !</h1>
        <p className="text-2xl font-bold text-yellow-900 dark:text-violet-300">
          《 갓 - 생 프로젝트 》
        </p>
        <p className="text-yellow-800 dark:text-violet-200"><i>
          포트폴리오 · LLM 앱 · RPA · ERP · 게임 순차 개발/배포 중 . . .</i>
        </p>
        <p className="muted text-yellow-700 dark:text-violet-100">
           꾸준한 작업 · 노력으로 탄생한 결과물 공유하기<br></br>
           언젠간 빛을 발휘해 실무 효용 만들기
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/projects" className="px-5 py-2 rounded-xl border bg-yellow-100 text-yellow-800 dark:bg-violet-900/30 dark:text-white dark:border-white/10 dark:hover:shadow-none">
            프로젝트
          </Link>
          <Link to="/contact" className="px-5 py-2 rounded-xl border bg-yellow-100 text-yellow-800 dark:bg-violet-900/30 dark:text-white dark:border-white/10 dark:hover:shadow-none">
            연락하기
          </Link>
        </div>
        <p className="muted dark:text-white/80">-</p>
      </div>
    </section>
  )
}