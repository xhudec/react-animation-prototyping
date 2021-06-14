---
to: pages/<%=name%>.tsx
---
<%
  PageName = h.changeCase.pascal(name) + 'Page'
%>
import PageName from '@pages/<%=name%>'

export default PageName
