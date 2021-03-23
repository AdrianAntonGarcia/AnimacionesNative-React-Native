import {Animated, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export const Animacion3: React.FC = () => {
  const [animacion] = useState(new Animated.Value(14));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 40, // Valor al que llega
      duration: 500, // Cantidad de tiempo que tarda en llegar al valor
      useNativeDriver: false,
    }).start();
    console.log(animacion);
  }, [animacion]);
  return (
    <View>
      <Animated.Text style={[styles.texto, {fontSize: animacion}]}>
        Animación 1
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animacion3;
