import {Animated, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';

export const Animacion1: React.FC = () => {
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1, // Valor al que llega
      duration: 500, // Cantidad de tiempo que tarda en llegar al valor
      useNativeDriver: true,
    }).start();
    console.log(animacion);
  }, [animacion]);
  return (
    <Animated.View style={{opacity: animacion}}>
      <Text style={styles.texto}>Animación 1</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion1;
