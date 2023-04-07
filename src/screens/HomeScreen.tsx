import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

import * as Animatable from 'react-native-animatable'

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
    <Background>
    <Logo />
    <Header>Bem Vindo!</Header>

    <Paragraph>
      Acesso Cliente
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Entrar
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Cadastrar
    </Button>
  </Background>

  
);

export default memo(HomeScreen);
