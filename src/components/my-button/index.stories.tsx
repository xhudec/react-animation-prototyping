import { Meta, Story } from '@storybook/react/types-6-0'

import MyButton, { IMyButtonProps } from '.'

const storyConfig: Meta = {
  title: 'components/MyButton',
  component: MyButton,
}
const Template: Story<IMyButtonProps> = (args) => <MyButton {...args} />

const Base = Template.bind({})

Base.args = {}

export default storyConfig
export { Base }
