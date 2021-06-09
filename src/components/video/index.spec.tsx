
import { render, screen } from '@testing-library/react'

import Video, { IVideoProps } from '.'

function renderVideo ({ ...propsOverrides }: Partial<IVideoProps> = {}) {
  const wrapper = render(<Video {...propsOverrides} />)

  return wrapper
}

describe('<Video />', () => {
  it('should be defined', () => {
    expect(Video).toBeDefined()
  })

  it('should render a ...', () => {
    renderVideo()

    // TODO: assertions
  })
})
