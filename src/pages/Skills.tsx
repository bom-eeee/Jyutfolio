import { motion } from 'framer-motion'
import { container, item } from '../motions'

export default function Skills(){
  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="container-narrow space-y-6">
      <motion.h1 variants={item} className="h2 text-yellow-900 dark:text-violet-300">Skills</motion.h1>
      <motion.div variants={item} className="space-y-2">
        <h2 className="font-semibold text-yellow-600 dark:text-violet-200">Web</h2>
        <motion.div variants={item} className="flex flex-wrap gap-2 text-yellow-800 dark:text-violet-100/80">
          {['React','TypeScript','Vite','Tailwind','Node/FastAPI'].map(s=>(
            <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
          ))}
        </motion.div>
      </motion.div>
      <motion.div variants={item} className="space-y-2">
        <h2 className="font-semibold text-yellow-600 dark:text-violet-200">AI / Data</h2>
        <motion.div variants={item} className="flex flex-wrap gap-2 text-yellow-800 dark:text-violet-100/80">
          {['OpenAI API','RAG','Embeddings','LangChain (opt)'].map(s=>(
            <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
          ))}
        </motion.div>
      </motion.div>
      <motion.div variants={item} className="space-y-2">
        <h2 className="font-semibold text-yellow-600 dark:text-violet-200">DevOps</h2>
        <motion.div variants={item} className="flex flex-wrap gap-2 text-yellow-800 dark:text-violet-100/80">
          {['Git/GitHub','Docker','GitHub Actions','Vercel/Pages'].map(s=>(
            <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}