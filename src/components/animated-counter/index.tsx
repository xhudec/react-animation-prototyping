import { animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { Content } from './styled'

export interface IAnimatedCounterProps {
  from: number
  to: number
  /**
   * Unit: seconds
   *
   * @default 5
   */
  duration?: number
}

export default function AnimatedCounter({
  from,
  to,
  duration = 5,
  ...delegated
}: IAnimatedCounterProps) {
  const contentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = contentRef.current

    const controls = animate(from, to, {
      duration,
      ease: 'circOut',
      onUpdate(value) {
        node.textContent = value.toFixed(0)
      },
    })

    return () => controls.stop()
  }, [duration, from, to])

  return <Content ref={contentRef} {...delegated} />
}
