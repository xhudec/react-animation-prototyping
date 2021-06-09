
import { Meta, Story } from '@storybook/react/types-6-0'

import Video, { IVideoProps } from '.'

const storyConfig: Meta = {
  title: 'components/Video',
  component: Video,
}
const Template: Story<IVideoProps> = (args) => <Video {...args} />

const Base = Template.bind({})

Base.args = {}

export default storyConfig
export { Base }
