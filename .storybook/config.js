import { addDecorator, configure } from '@storybook/react';
import { addReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);
addDecorator(addReadme);

const req = require.context('../src', true, /stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
  require('../src');
}

configure(loadStories, module);
