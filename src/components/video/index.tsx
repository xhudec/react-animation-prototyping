import { useCallback, useRef } from 'react'

import { VideoContainer } from './styled'

import useVisibilityListener from '@hooks/use-visibility-listener'

export interface IVideoProps {
  src: string

  /**
   * @default true
   */
  isMuted?: boolean
  /**
   * @default true
   */
  isLooped?: boolean
  /**
   * @default true
   */
  autoPlay?: boolean
  /**
   * @default false
   */
  showControls?: boolean
}

export default function Video({
  src,
  isMuted = true,
  isLooped = true,
  autoPlay = true,
  showControls = false,
}: IVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleOnVisible = useCallback(() => {
    videoRef.current?.play()
  }, [])
  const handleOnHidden = useCallback(() => {
    videoRef.current?.pause()
  }, [])

  useVisibilityListener({ onVisible: handleOnVisible, onHidden: handleOnHidden })

  if (!src) return null

  return (
    <VideoContainer
      ref={videoRef}
      muted={isMuted}
      playsInline={autoPlay}
      autoPlay={autoPlay}
      controls={showControls}
      loop={isLooped}
    >
      <source type="video/mp4" src={src} />
    </VideoContainer>
  )
}
