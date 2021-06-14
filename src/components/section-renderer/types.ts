import { TColumnBlock } from '@components/block-renderer/types'

export interface IBaseSectionLayoutTemplate {
  title: string
  content: string
}

export interface ICounterAndSixMultimediaLayoutTemplate extends IBaseSectionLayoutTemplate {
  type: 'counter-and-six-multimedia-layout'
  count: number
  multimedia: {
    columns: [TColumnBlock[], TColumnBlock[]]
  }
}

export interface ICenterTextTemplate extends IBaseSectionLayoutTemplate {
  type: 'center-text'
}

export type TSectionRendererSections = ICounterAndSixMultimediaLayoutTemplate | ICenterTextTemplate
