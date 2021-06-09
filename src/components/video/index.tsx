import { VideoContainer } from './styled'

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
  if (!src) return null

  return (
    <VideoContainer muted={isMuted} autoPlay={autoPlay} controls={showControls} loop={isLooped}>
      <source type="video/mp4" src={src} />
    </VideoContainer>
  )
}
