import { useEffect, useState } from 'react'
import NextImage from 'next/image'
import { AnimatePresence } from 'framer-motion'

import { ImageContainer } from './styled'

export interface IAnimatedImageSwapProps {
  imgSources: string[]

  /**
   * Units: ms
   *
   * @default 5000
   */
  swapDelay?: number
}

export default function AnimatedImageSwap({
  imgSources,
  swapDelay = 5000,
}: IAnimatedImageSwapProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((state) => (state >= imgSources.length - 1 ? 0 : state + 1))
    }, swapDelay)

    return () => {
      clearInterval(intervalId)
    }
  }, [imgSources, swapDelay])

  return (
    <AnimatePresence>
      {imgSources[currentImageIndex] ? (
        <ImageContainer
          key={imgSources[currentImageIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NextImage src={imgSources[currentImageIndex]} layout="fill" objectFit="cover" />
        </ImageContainer>
      ) : null}
    </AnimatePresence>
  )
}
