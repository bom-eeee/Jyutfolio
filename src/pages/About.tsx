import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { container, item } from '../motions'
import { Mail, Github, Instagram } from 'lucide-react'

export default function About(){
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="min-h-[70vh] grid place-items-center text-center">

      <div className="space-y-6">
        <motion.h1 variants={item} className="text-4xl sm:text-5xl font-extrabold text-yellow-400 dark:text-violet-400">Welcome to the Jyutfolio !</motion.h1>

        <motion.p variants={item} className="text-2xl font-bold text-yellow-900 dark:text-violet-300">
          《 갓 - 생 프로젝트 》
        </motion.p>

        <motion.p variants={item} className="text-yellow-800 dark:text-violet-200"><i>
          포트폴리오 · LLM 앱 · RPA · ERP · 게임 순차 개발/배포 중 . . .</i>
        </motion.p>

        <motion.p variants={item} className="muted text-yellow-700 dark:text-violet-100">
           꾸준한 작업 · 노력으로 탄생한 결과물 공유하기<br></br>
           언젠간 빛을 발휘해 실무 효용 만들기
        </motion.p>

        <motion.div variants={item} className="flex items-center justify-center gap-3">
          <Link to="/projects" className="px-5 py-2 rounded-xl border bg-yellow-100/10 text-yellow-800 dark:bg-violet-900/10 dark:text-violet-200 dark:border-white/10 dark:hover:shadow-none">
            프로젝트
          </Link>

          <Link to="/skills" className="px-5 py-2 rounded-xl border bg-yellow-100/10 text-yellow-800 dark:bg-violet-900/10 dark:text-violet-200 dark:border-white/10 dark:hover:shadow-none">
            기술스택
          </Link>
        </motion.div>
        
        <motion.p variants={item} className="muted text-yellow-700 dark:text-violet-100"><b>　</b></motion.p>

        <motion.p variants={item} className="muted text-yellow-800/110 dark:text-violet-100/50"><b>버그 신고 및 문의</b></motion.p>

        <motion.div variants={item} className="flex items-center justify-center gap-3">
          <a 
          className="rounded-xl border px-3 py-1 text-sm muted bg-yellow-100/10 text-yellow-800/110 dark:bg-violet-900/10 dark:text-violet-200/40 dark:border-white/10 dark:hover:shadow-none no-underline"
          style={{ textDecoration: 'none' }} 
          href="mailto:qkrgmlwn012@naver.com"
          aria-label='이메일 보내기'>
            <Mail size={16} aria-hidden="true" />
            <span className="sr-only">Email</span>
          </a>

          <a 
          className="rounded-xl border px-3 py-1 text-sm muted bg-yellow-100/10 text-yellow-800/110 dark:bg-violet-900/10 dark:text-violet-200/40 dark:border-white/10 dark:hover:shadow-none no-underline"
          style={{ textDecoration: 'none' }} 
          href="https://github.com/bom-eeee" 
          rel="noreferrer noopener"
          target="_blank"
          aria-label='GitHub로 이동'>
            <Github size={16} aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>

          <a 
          className="rounded-xl border px-3 py-1 text-sm muted bg-yellow-100/10 text-yellow-800/110 dark:bg-violet-900/10 dark:text-violet-200/40 dark:border-white/10 dark:hover:shadow-none no-underline"
          style={{ textDecoration: 'none' }} 
          href="https://www.instagram.com/its__yummy__" 
          rel="noreferrer noopener"
          target="_blank" 
          aria-label='Instagram로 이동'>
            <Instagram size={16} aria-hidden="true" />
            <span className="sr-only">Instagram</span>
          </a>

          {/* <a className="muted text-yellow-800/110 dark:text-violet-100/50" href="https://www.linkedin.com/in/jyu-its/" target="_blank">Notion</a> */}
        </motion.div>
        
      </div>
    </motion.section>
  )
}