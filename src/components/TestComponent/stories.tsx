import React from 'react';
import { storiesOf } from '@storybook/react-native';

import Main from '.';

const props = {};

storiesOf('TestComponent', module).add('Default', () => <Main {...props} />);
