import type { Variants } from 'framer-motion'

export const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.06,  // 요소 하나씩 등장
            delayChildren: 0.4,
        },
    },
    exit: { opacity: 1 },   // 컨테이너 자체가 꺼지지 않게
}

export const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
}
