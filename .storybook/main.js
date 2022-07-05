module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@react-theming/storybook-addon',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  babel: (config) => {
    config.presets.push(require.resolve('@emotion/babel-preset-css-prop'));
    return config;
  },
};
