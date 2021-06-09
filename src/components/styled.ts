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
  margin: 128px 10%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 32px;
  place-content: center;
`

const RelativeDemoSection = styled(DemoSection)`
  display: block;
  position: relative;
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
  min-height: 300px;
  width: 100%;
`

const Heading2 = styled.h2`
  font-size: 3rem;
  place-self: center;
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
  Box,
  ParallaxContainer,
  RelativeDemoSection,
}
