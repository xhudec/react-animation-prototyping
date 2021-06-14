---
to: src/components/<%=name%>/index.tsx
---
<%
  ComponentName = h.changeCase.pascal(name)
  PropsInterface = 'I' + ComponentName + 'Props'
%>
import { Container } from './styled'

export interface <%= PropsInterface %> {}

export default function <%= ComponentName %>(props: <%= PropsInterface %>) {
  return (
    <Container>content</Container>
  )
}
