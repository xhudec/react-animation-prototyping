
import { Meta, Story } from '@storybook/react/types-6-0'

import AnimatedCounter, { IAnimatedCounterProps } from '.'

const storyConfig: Meta = {
  title: 'components/AnimatedCounter',
  component: AnimatedCounter,
}
const Template: Story<IAnimatedCounterProps> = (args) => <AnimatedCounter {...args} />

const Base = Template.bind({})

Base.args = {}

export default storyConfig
export { Base }
