import { TSectionRendererSections } from './types'

import AnimatedCounter from '@components/animated-counter'
import BlockRenderer from '@components/block-renderer'
import {
  Column,
  DemoColumns,
  DemoSection,
  CenterTextSection,
  Heading2,
  Paragraph,
  SectionTextContent,
} from '@components/styled'

export interface ISectionRendererProps {
  templates: TSectionRendererSections[]
}

export default function SectionRenderer({ templates }: ISectionRendererProps) {
  return templates.map((template) => {
    switch (template.type) {
      case 'counter-and-six-multimedia-layout': {
        const [firstColumn, secondColumn] = template.multimedia.columns

        return (
          <DemoSection data-scroll-section>
            <SectionTextContent data-scroll-speed="0.5">
              <AnimatedCounter
                data-scroll
                data-scroll-id={`${template.type}-${template.count}`}
                from={template.count * 0.75}
                to={template.count}
              />
              <Heading2 data-scroll>{template.title}</Heading2>
            </SectionTextContent>
            <DemoColumns>
              <Column data-scroll data-scroll-speed="16">
                {firstColumn.map((block, index) => (
                  <BlockRenderer key={index} block={block} />
                ))}
              </Column>
              <Column data-scroll data-scroll-speed="8">
                {secondColumn.map((block, index) => (
                  <BlockRenderer key={index} block={block} />
                ))}
              </Column>
            </DemoColumns>
          </DemoSection>
        )
      }
      case 'center-text': {
        return (
          <CenterTextSection data-scroll-section>
            <Heading2 data-scroll data-scroll-speed="2">{template.title}</Heading2>
            <Paragraph data-scroll>{template.content}</Paragraph>
          </CenterTextSection>
        )
      }
      default:
        return null
    }
  })
}
