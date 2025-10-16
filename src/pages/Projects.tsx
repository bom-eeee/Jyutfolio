export default function Projects(){
  const items = [
    { code:'P1', title:'Portfolio', desc:'개인 포트폴리오 웹' },
    { code:'P2', title:'LLM Apps', desc:'메모리봇·RAG·면접코치·플래너·감정추천' },
    { code:'P3', title:'RPA', desc:'업무 자동화 스크립트' },
    { code:'P4', title:'ERP', desc:'자산/인사/재고 미니 ERP' },
  ]

  return (
    <section className="container-narrow space-y-6">
      <h1 className="h2 text-yellow-900 dark:text-violet-200">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map(x=>(
          <a key={x.code} className="group card block dark:border-white/10 dark:hover:shadow-none hover:shadow-lg transition-shadow rounded-lg p-4" href="#">
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
}