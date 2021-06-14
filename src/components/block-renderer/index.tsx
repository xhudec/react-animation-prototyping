import NextImage from 'next/image'

import { TColumnBlock } from './types'

import AnimatedImageSwap from '@components/animated-image-swap'
import Video from '@components/video'
import { Box } from '@components/styled'

export interface IBlockRendererProps {
  block: TColumnBlock
}

export default function BlockRenderer({ block }: IBlockRendererProps) {
  switch (block.type) {
    case 'image-static': {
      return (
        <Box>
          <NextImage
            layout="fill"
            objectFit="cover"
            src={block.image.url}
            alt={block.image.description}
          />
        </Box>
      )
    }
    case 'image-swap': {
      const imaSources = block.images.map((img) => img.url)

      return (
        <Box>
          <AnimatedImageSwap imgSources={imaSources} />
        </Box>
      )
    }
    case 'video': {
      return (
        <Box>
          <Video src={block.video.url} />
        </Box>
      )
    }
    default:
      return null
  }
}
