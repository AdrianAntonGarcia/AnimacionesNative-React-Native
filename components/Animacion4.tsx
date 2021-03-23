import {Animated, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export const Animacion4: React.FC = () => {
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 360, // Valor al que llega
      duration: 500, // Cantidad de tiempo que tarda en llegar al valor
      useNativeDriver: false,
    }).start();
  }, [animacion]);
  const interpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });
  const estiloAnimacion = {
    transform: [{rotate: interpolacion}],
  };
  return (
    <View>
      <Animated.View style={[styles.texto, estiloAnimacion]} />
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion4;
