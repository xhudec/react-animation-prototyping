
import { render, screen } from '@testing-library/react'

import SectionRenderer, { ISectionRendererProps } from '.'

function renderSectionRenderer ({ ...propsOverrides }: Partial<ISectionRendererProps> = {}) {
  const wrapper = render(<SectionRenderer {...propsOverrides} />)

  return wrapper
}

describe('<SectionRenderer />', () => {
  it('should be defined', () => {
    expect(SectionRenderer).toBeDefined()
  })

  it('should render a ...', () => {
    renderSectionRenderer()

    // TODO: assertions
  })
})
