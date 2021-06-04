
import { render, screen } from '@testing-library/react'

import MyButton, { IMyButtonProps } from '.'

function renderMyButton ({ ...propsOverrides }: Partial<IMyButtonProps> = {}) {
  const wrapper = render(<MyButton {...propsOverrides} />)

  return wrapper
}

describe('<MyButton />', () => {
  it('should be defined', () => {
    expect(MyButton).toBeDefined()
  })

  it('should render a ...', () => {
    renderMyButton()

    // TODO: assertions
  })
})
