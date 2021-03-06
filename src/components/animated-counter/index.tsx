import { useEffect, useRef, useState } from 'react'

import { Content } from './styled'

import { useLocomotiveScrollContext } from '@context/locomotive-scroll'
import { cubicEaseIn } from '@utils/easing'

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
  // duration = 5,
  ...delegated
}: IAnimatedCounterProps) {
  const { scroll } = useLocomotiveScrollContext()
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(from)

  useEffect(() => {
    function scrollListener({ currentElements }) {
      const target = currentElements[delegated['data-scroll-id']]

      if (typeof target === 'object') {
        const progress = target.progress
        const maxProgressBoundary = 0.4
        let nextValue: number

        if (progress > maxProgressBoundary) {
          nextValue = to
        } else {
          nextValue = cubicEaseIn(progress / maxProgressBoundary) * (to - from) + from
        }

        setValue(nextValue)
      }
    }

    scroll?.on('scroll', scrollListener)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll, to])

  return (
    <Content ref={contentRef} {...delegated}>
      {value.toFixed(0)}
    </Content>
  )
}
