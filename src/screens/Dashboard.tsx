import React, { memo } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <Background>
    <Header>Logado</Header>
    <Paragraph>
      Visualização de conteúdo!    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Sair
    </Button>
  </Background>
);

export default memo(Dashboard);
