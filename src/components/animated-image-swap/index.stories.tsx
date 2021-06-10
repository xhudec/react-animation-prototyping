
import { Meta, Story } from '@storybook/react/types-6-0'

import AnimatedImageSwap, { IAnimatedImageSwapProps } from '.'

const storyConfig: Meta = {
  title: 'components/AnimatedImageSwap',
  component: AnimatedImageSwap,
}
const Template: Story<IAnimatedImageSwapProps> = (args) => <AnimatedImageSwap {...args} />

const Base = Template.bind({})

Base.args = {}

export default storyConfig
export { Base }
