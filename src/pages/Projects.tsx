export default function Projects(){
  // Backlog, In-progress, Done
  const items = [
    { code:'Project 1 -', title:'Jyutfolio', desc1:'포트폴리오 웹사이트 제작',
      desc2:'(feat. Github Page)', status:'In-progress', next:'About/Projects 카피 보강' },
    { code:'Project 2 -', title:'LLM Apps', desc1:'메모리봇·RAG·면접코치·플래너·감정추천·코디추천',
      desc2:' ', status:'Backlog', next:'-' },
    { code:'Project 3 -', title:'RPA', desc1:'업무 자동화 스크립트',
      desc2:' ', status:'Backlog', next:'-' },
    { code:'Project 4 -', title:'ERP', desc1:'자산/인사/재고 미니 ERP',
      desc2:' ', status:'Backlog', next:'-' },
  ]

  return (
    <section className="container-narrow space-y-6">
      <h1 className="h2 text-yellow-600 dark:text-violet-200">Projects</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map(x=>(
          <div key={x.code} className="card">
          <div className="text-xs text-gray-500">{x.code}</div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-semibold text-yellow-900">{x.title}</div>
          </div>
          <p className="text-sm text-yellow-800">{x.desc1}</p>
          <p className="text-xs text-yellow-800">{x.desc2}</p>
          <div className="mt-3 flex items-center gap-2 text-xs">
            <span className="px-0 py-0.5 rounded-full bg-gaenari-100 text-gaenari-900">Status: {x.status}</span>
            <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-white/10">Next: <b>{x.next}</b></span>
          </div>
        </div>
        ))}
      </div>
    </section>
  )
}