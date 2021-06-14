
import { render, screen } from '@testing-library/react'

import AnimatedCounter, { IAnimatedCounterProps } from '.'

function renderAnimatedCounter ({ ...propsOverrides }: Partial<IAnimatedCounterProps> = {}) {
  const wrapper = render(<AnimatedCounter {...propsOverrides} />)

  return wrapper
}

describe('<AnimatedCounter />', () => {
  it('should be defined', () => {
    expect(AnimatedCounter).toBeDefined()
  })

  it('should render a ...', () => {
    renderAnimatedCounter()

    // TODO: assertions
  })
})
