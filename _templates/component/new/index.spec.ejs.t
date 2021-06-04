---
to: src/components/<%=name%>/index.spec.tsx
---
<%
  ComponentName = h.changeCase.pascal(name)
%>
import { render, screen } from '@testing-library/react'

import <%= ComponentName %>, { I<%= ComponentName %>Props } from '.'

function render<%= ComponentName %> ({ ...propsOverrides }: Partial<I<%= ComponentName %>Props> = {}) {
  const wrapper = render(<<%= ComponentName %> {...propsOverrides} />)

  return wrapper
}

describe('<<%= ComponentName %> />', () => {
  it('should be defined', () => {
    expect(<%= ComponentName %>).toBeDefined()
  })

  it('should render a ...', () => {
    render<%= ComponentName %>()

    // TODO: assertions
  })
})
