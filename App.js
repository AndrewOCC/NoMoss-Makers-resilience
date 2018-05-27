import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Screens from './Screens';

export default class Onboarding extends Component {
  render() {
      return (
        <Screens />
      );
  }
}

AppRegistry.registerComponent('Onboarding', () => Onboarding);

