export interface IImage {
  url: string
  description: string
}

export interface IVideo {
  url: string
  description: string
}

export interface IStaticImageBlock {
  type: 'image-static'
  image: IImage
  details: unknown
}

export interface ISwapImageBlock {
  type: 'image-swap'
  images: IImage[]
}

export interface IVideoBlock {
  type: 'video'
  video: IVideo
}

export type TColumnBlock = IStaticImageBlock | ISwapImageBlock | IVideoBlock