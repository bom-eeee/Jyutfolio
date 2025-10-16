export default function Skills(){
  return (
    <section className="container-narrow space-y-6">
      <h1 className="h2 text-yellow-900 dark:text-violet-200">Skills</h1>
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
}