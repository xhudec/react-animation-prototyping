
import { render, screen } from '@testing-library/react'

import AnimatedImageSwap, { IAnimatedImageSwapProps } from '.'

function renderAnimatedImageSwap ({ ...propsOverrides }: Partial<IAnimatedImageSwapProps> = {}) {
  const wrapper = render(<AnimatedImageSwap {...propsOverrides} />)

  return wrapper
}

describe('<AnimatedImageSwap />', () => {
  it('should be defined', () => {
    expect(AnimatedImageSwap).toBeDefined()
  })

  it('should render a ...', () => {
    renderAnimatedImageSwap()

    // TODO: assertions
  })
})
