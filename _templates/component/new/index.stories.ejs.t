---
to: src/components/<%=name%>/index.stories.tsx
---
<%
  ComponentName = h.changeCase.pascal(name)
%>
import { Meta, Story } from '@storybook/react/types-6-0'

import <%= ComponentName %>, { I<%= ComponentName %>Props } from '.'

const storyConfig: Meta = {
  title: 'components/<%= ComponentName %>',
  component: <%= ComponentName %>,
}
const Template: Story<I<%= ComponentName %>Props> = (args) => <<%= ComponentName %> {...args} />

const Base = Template.bind({})

Base.args = {}

export default storyConfig
export { Base }
