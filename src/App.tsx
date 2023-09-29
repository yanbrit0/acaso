/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from './Routes';
import { AuthProvider } from './hooks/useAuth';
import theme from './styles/themes';

import config from './constants';
import StorybookUI from '../storybook/index.js';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StatusBar barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default config.LOAD_STORYBOOK ? StorybookUI : App;
