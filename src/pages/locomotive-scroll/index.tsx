import { FC } from 'react'
import Head from 'next/head'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import Circle from '@components/circle'
import Video from '@components/video'
import AnimatedImageSwap from '@components/animated-image-swap'
import {
  BannerSection,
  Box,
  DemoColumns,
  DemoSection,
  FirstColumn,
  SecondColumn,
  Heading1,
  Heading2,
  PageContainer,
  PageContent,
  RelativeDemoSection,
} from '@components/styled'
import useLocomotiveScroll from '@hooks/use-locomotive-scroll'
import theme from '@styles/theme'

const circles = [
  { x: 25, y: 75, size: 150, color: theme.colors.white },
  { x: 65, y: 45, size: 125, color: theme.colors.white },
  { x: 35, y: 45, size: 50, color: theme.colors.white },
  { x: 45, y: 25, size: 100, color: theme.colors.gray[300] },
  { x: 80, y: 35, size: 150, color: theme.colors.gray[300] },
  { x: 20, y: 35, size: 75, color: theme.colors.gray[300] },
  { x: 50, y: 80, size: 75, color: theme.colors.gray[500] },
  { x: 55, y: 15, size: 100, color: theme.colors.gray[500] },
  { x: 15, y: 85, size: 125, color: theme.colors.gray[500] },
  { x: 70, y: 80, size: 150, color: theme.colors.gray[700] },
  { x: 55, y: 55, size: 100, color: theme.colors.gray[700] },
  { x: 40, y: 85, size: 125, color: theme.colors.gray[700] },
]

const imgsChunk1 = [
  'https://place-puppy.com/660x304',
  'https://place-puppy.com/650x305',
  'https://place-puppy.com/670x306',
  'https://place-puppy.com/680x307',
  'https://place-puppy.com/690x307',
]

const imgsChunk2 = [
  'https://place-puppy.com/690x307',
  'https://place-puppy.com/680x307',
  'https://place-puppy.com/670x306',
  'https://place-puppy.com/650x305',
  'https://place-puppy.com/660x304',
]

const imgsChunk3 = [
  'https://place-puppy.com/800x300',
  'https://place-puppy.com/790x300',
  'https://place-puppy.com/780x300',
  'https://place-puppy.com/770x300',
  'https://place-puppy.com/760x300',
]

const imgsChunk4 = [
  'https://place-puppy.com/710x300',
  'https://place-puppy.com/550x300',
  'https://place-puppy.com/730x300',
  'https://place-puppy.com/720x300',
  'https://place-puppy.com/700x300',
]

const LocomotiveScrollPage: FC = () => {
  const { containerRef } = useLocomotiveScroll()

  return (
    <PageContainer>
      <Head>
        <title>Locomotive Scroll | React Animations Prototyping</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageContent ref={containerRef} data-scroll-container>
        <BannerSection data-scroll-section>
          <Heading1 data-scroll data-scroll-speed="4">
            Locomotive Scroll
          </Heading1>
          {circles.map((circle) => {
            const speed =
              circle.color === theme.colors.white
                ? 8
                : circle.color === theme.colors.gray[300]
                ? 4
                : circle.color === theme.colors.gray[500]
                ? 2
                : 0

            return (
              <Circle
                key={`circle-${circle.x}-${circle.y}`}
                data-scroll
                x={circle.x}
                y={circle.y}
                size={circle.size}
                bgColor={circle.color}
                data-scroll-speed={speed}
              />
            )
          })}
        </BannerSection>

        <DemoSection data-scroll-section>
          <Heading2 data-scroll data-scroll-speed="4">
            First Section Heading
          </Heading2>

          <DemoColumns>
            <FirstColumn data-scroll data-scroll-speed="8">
              <Box>
                <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
              </Box>
              <Box>
                <AnimatedImageSwap imgSources={imgsChunk1} swapDelay={5000} />
              </Box>
              <Box>
                <AnimatedImageSwap imgSources={imgsChunk2} swapDelay={4333} />
              </Box>
            </FirstColumn>

            <SecondColumn data-scroll data-scroll-speed="12">
              <Box>
                <AnimatedImageSwap imgSources={imgsChunk3} swapDelay={6333} />
              </Box>
              <Box>
                <AnimatedImageSwap imgSources={imgsChunk4} swapDelay={7667} />
              </Box>
              <Box>
                <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
              </Box>
            </SecondColumn>
          </DemoColumns>
        </DemoSection>

        <DemoSection data-scroll-section>
          <DemoColumns>
            <FirstColumn data-scroll data-scroll-speed="6">
              <Box>
                <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" />
              </Box>
              <Box>
                <AnimatedImageSwap imgSources={imgsChunk1} swapDelay={5000} />
              </Box>
              <Box>
                <AnimatedImageSwap imgSources={imgsChunk2} swapDelay={4333} />
              </Box>
            </FirstColumn>

            <SecondColumn data-scroll>
              <Box>
                <AnimatedImageSwap imgSources={imgsChunk3} swapDelay={6333} />
              </Box>
              <Box>
                <AnimatedImageSwap imgSources={imgsChunk4} swapDelay={7667} />
              </Box>
              <Box>
                <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" />
              </Box>
            </SecondColumn>
          </DemoColumns>

          <Heading2 data-scroll data-scroll-speed="2" data-scroll-position="bottom">
            Second Section Heading
          </Heading2>
        </DemoSection>

        <RelativeDemoSection data-scroll-section>
          <Circle
            data-scroll
            data-scroll-speed="0"
            x={50}
            y={50}
            size={800}
            bgColor={theme.colors.gray[900]}
          />
          <Circle
            data-scroll
            data-scroll-speed="1"
            x={50}
            y={50}
            size={700}
            bgColor={theme.colors.gray[700]}
          />
          <Circle
            data-scroll
            data-scroll-speed="2"
            x={50}
            y={50}
            size={600}
            bgColor={theme.colors.gray[500]}
          />
          <Circle
            data-scroll
            data-scroll-speed="3"
            x={50}
            y={50}
            size={500}
            bgColor={theme.colors.gray[300]}
          />
          <Circle
            data-scroll
            data-scroll-speed="4"
            x={50}
            y={50}
            size={400}
            bgColor={theme.colors.gray[100]}
          />
        </RelativeDemoSection>

        <DemoSection />
      </PageContent>
    </PageContainer>
  )
}

export default LocomotiveScrollPage
