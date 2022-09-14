// if you use expo remove this line
import { AppRegistry } from 'react-native';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import {
  getStorybookUI,
  configure,
  addDecorator,
  addParameters,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';

import './rn-addons.js';
import { loadStories } from './storyLoader.js';

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator(withBackgrounds);

addParameters({
  backgrounds: [
    {
      name: 'acaso',
      value: '#080813',
    },
    {
      name: 'white',
      value: '#F6F6F6',
    },
  ],
});

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorageLib.default || null,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('poject', () => StorybookUIRoot);

export default StorybookUIRoot;
