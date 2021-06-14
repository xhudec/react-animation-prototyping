import styled from 'styled-components'

import theme from '@styles/theme'

const PageContainer = styled.div`
  min-height: 100%;
`

const PageContent = styled.main`
  min-height: 100%;
`

const SectionBlock = styled.section`
  min-height: 100vh;
`

const BannerSection = styled(SectionBlock)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
`

const BannerContainer = styled.div`
  height: 50px;
  width: fit-content;
`

const Heading1 = styled.h1`
  margin-bottom: 24px;

  font-size: 3rem;
`

const Heading2 = styled.h2`
  margin-bottom: 16px;

  font-size: 3rem;
`

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
`

const DemoSection = styled(SectionBlock)`
  display: grid;
  margin: 32px 16px;

  @media screen and (min-width: 768px) {
    margin: 128px 10%;
    grid-template-columns: 1fr 2fr;
    grid-gap: 32px;
    place-content: center;
  }
`

const CenterTextSection = styled(SectionBlock)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RelativeDemoSection = styled(DemoSection)`
  display: block;
  position: relative;
  overflow: hidden;
`

const SectionTextContent = styled.div`
  place-self: center;
`

const DemoColumns = styled.div`
  display: flex;
  gap: 16px;
`

const Column = styled(DemoColumns)`
  flex: 1;
  flex-direction: column;
`

const ParallaxContainer = styled.div`
  min-height: 50%;
  width: 100%;
`

const Box = styled.div`
  position: relative;
  min-height: 300px;
  max-height: 500px;
  width: 100%;
`

export {
  PageContainer,
  PageContent,
  SectionBlock,
  BannerSection,
  BannerContainer,
  Heading1,
  Heading2,
  Paragraph,
  DemoSection,
  CenterTextSection,
  SectionTextContent,
  DemoColumns,
  Column,
  Box,
  ParallaxContainer,
  RelativeDemoSection,
}
