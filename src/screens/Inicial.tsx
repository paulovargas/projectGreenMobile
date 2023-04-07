import React, { memo } from 'react';
import Background from '../components/Background';
import { Navigation } from '../types';
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native';

import * as Animatable from 'react-native-animatable'
import Button from '../components/Button';

type Props = {
  navigation: Navigation;
  children: React.ReactNode;
};

const Inicial = ({ children, navigation }: Props) => (
    <Background>
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="center"
      style={styles.background}      
    >

    </ImageBackground>
      
    
  </Background>
  
);
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default memo(Inicial);
