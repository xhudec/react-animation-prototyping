module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  /**
   * temporary
   * 
   * @see https://github.com/chromaui/chromatic-cli/issues/353, https://github.com/styleguidist/react-docgen-typescript/issues/356
   */
  typescript: {
    reactDocgen: 'none',
  },
}
