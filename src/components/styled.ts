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
  display: grid;
  place-items: center;
  color: ${theme.colors.white};
  background-color: ${theme.colors.black};
`

const BannerContainer = styled.div`
  height: 50px;
  width: fit-content;
`

const Heading1 = styled.h1`
  font-size: 3rem;
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

const FirstColumn = styled(DemoColumns)`
  flex: 1;
  flex-direction: column;
`

const SecondColumn = styled(DemoColumns)`
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

const Heading2 = styled.h2`
  font-size: 3rem;
`

export {
  PageContainer,
  PageContent,
  SectionBlock,
  BannerSection,
  BannerContainer,
  Heading1,
  DemoSection,
  Heading2,
  DemoColumns,
  FirstColumn,
  SecondColumn,
  SectionTextContent,
  Box,
  ParallaxContainer,
  RelativeDemoSection,
}
