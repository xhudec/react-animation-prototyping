
import { Meta, Story } from '@storybook/react/types-6-0'

import Circle, { ICircleProps } from '.'

const storyConfig: Meta = {
  title: 'components/Circle',
  component: Circle,
}
const Template: Story<ICircleProps> = (args) => <Circle {...args} />

const Base = Template.bind({})

Base.args = {}

export default storyConfig
export { Base }
