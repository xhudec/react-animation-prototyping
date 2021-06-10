import { useEffect, useRef, useState } from 'react'
import useResizeObserver from 'use-resize-observer'

export default function useLocomotiveScroll() {
  const [isLocomotiveReady, setLocomotiveReady] = useState(false)
  const locomotiveRef = useRef<any | null>(null)

  const { height, ref: containerRef } = useResizeObserver<HTMLDivElement>()

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const scrollContainer = document.querySelector('[data-scroll-container]')

        locomotiveRef.current = new LocomotiveScroll({
          el: scrollContainer ?? null,
          smooth: true,
          smartphone: { smooth: true },
          tablet: { smooth: true },
        })

        setLocomotiveReady(true)
      } catch (err) {
        console.error('[useLocomotiveScroll]', err)
      }
    }

    void initLocomotiveScroll()

    // eslint-disable-next-line consistent-return
    return () => {
      locomotiveRef.current?.destroy?.()
      setLocomotiveReady(false)
    }
  }, [])

  useEffect(() => {
    locomotiveRef.current?.update?.()
  }, [height])

  return {
    containerRef,
    isLocomotiveReady,
    scroll: locomotiveRef.current,
  }
}
