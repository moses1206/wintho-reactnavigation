import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import Logo from './assets/pics/home_icon.png';

const LogoPic = () => {
  return (
    <Image
      style={{width: 40, height: 40}}
      source={require('./assets/pics/home_icon.png')}
    />
  );
};

export default LogoPic;

const styles = StyleSheet.create({});
