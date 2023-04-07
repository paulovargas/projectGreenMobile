import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logocre.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 315,
    height: 300,
    marginBottom: 12,
  },
});

export default memo(Logo);
