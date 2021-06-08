/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { useMemo, CSSProperties } from 'react'

import { Container } from './styled'

export interface ICircleProps {
  /**
   * percent
   */
  x: number
  /**
   * percent
   */
  y: number

  /**
   * px
   *
   * @default 100
   */
  size?: number
  /**
   * @default red
   */
  bgColor?: string
}

export default function Circle({
  x,
  y,
  size = 100,
  bgColor = 'red',
  ...delegatedProps
}: ICircleProps) {
  const mappedStyles = useMemo(
    () =>
      ({
        '--offset-top': `${y}%`,
        '--offset-left': `${x}%`,
        '--size': `${size}px`,
        '--bg-color': bgColor,
      } as CSSProperties),
    [bgColor, size, x, y]
  )

  return <Container style={mappedStyles} {...delegatedProps} />
}
