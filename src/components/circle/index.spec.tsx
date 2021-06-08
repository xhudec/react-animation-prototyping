
import { render } from '@testing-library/react'

import Circle, { ICircleProps } from '.'

function renderCircle ({ ...propsOverrides }: Partial<ICircleProps> = {}) {
  const wrapper = render(<Circle {...propsOverrides} />)

  return wrapper
}

describe('<Circle />', () => {
  it('should be defined', () => {
    expect(Circle).toBeDefined()
  })

  it('should render a ...', () => {
    renderCircle()

    // TODO: assertions
  })
})
