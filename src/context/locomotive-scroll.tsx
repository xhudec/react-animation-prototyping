import {
  createContext,
  MutableRefObject,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import useResizeObserver from 'use-resize-observer'

export interface ILocomotiveScrollContext {
  isReady: boolean
  // no typings
  scroll: any
}

const LocomotiveScrollContext = createContext<ILocomotiveScrollContext | null>(null)
LocomotiveScrollContext.displayName = 'LocomotiveScrollContext'

interface ILocomotiveScrollProviderProps {
  containerRef: MutableRefObject<HTMLDivElement | null>
}

function LocomotiveScrollProvider({
  children,
  containerRef,
}: PropsWithChildren<ILocomotiveScrollProviderProps>) {
  const [isReady, setReady] = useState(false)
  const locomotiveRef = useRef<any | null>(null)

  const { height } = useResizeObserver<HTMLDivElement>({ ref: containerRef.current })

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

        setReady(true)
      } catch (err) {
        console.error('[useLocomotiveScroll]', err)
      }
    }

    void initLocomotiveScroll()

    // eslint-disable-next-line consistent-return
    return () => {
      locomotiveRef.current?.destroy?.()
      setReady(false)
    }
  }, [])

  useEffect(() => {
    locomotiveRef.current?.update?.()
  }, [height])

  const contextValue: ILocomotiveScrollContext = useMemo(
    () => ({
      isReady,
      scroll: locomotiveRef.current,
    }),
    [isReady]
  )

  return (
    <LocomotiveScrollContext.Provider value={contextValue}>
      {children}
    </LocomotiveScrollContext.Provider>
  )
}
LocomotiveScrollProvider.displayName = 'LocomotiveScrollProvider'

function useLocomotiveScrollContext() {
  const contextValue = useContext(LocomotiveScrollContext)

  if (!contextValue) {
    throw new Error('useLocomotiveScrollContext must be used within LocomotiveScrollProvider')
  }

  return contextValue
}

export { LocomotiveScrollContext, LocomotiveScrollProvider, useLocomotiveScrollContext }
