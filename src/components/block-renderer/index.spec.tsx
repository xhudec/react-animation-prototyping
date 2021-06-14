
import { render, screen } from '@testing-library/react'

import BlockRenderer, { IBlockRendererProps } from '.'

function renderBlockRenderer ({ ...propsOverrides }: Partial<IBlockRendererProps> = {}) {
  const wrapper = render(<BlockRenderer {...propsOverrides} />)

  return wrapper
}

describe('<BlockRenderer />', () => {
  it('should be defined', () => {
    expect(BlockRenderer).toBeDefined()
  })

  it('should render a ...', () => {
    renderBlockRenderer()

    // TODO: assertions
  })
})
