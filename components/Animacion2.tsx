import {Animated, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

export const Animacion2: React.FC = () => {
  const [animacion] = useState(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 2, // Valor al que llega
      duration: 1000, // Cantidad de tiempo que tarda en llegar al valor (ms)
      useNativeDriver: false,
    }).start();
    console.log(animacion);
  }, [animacion]);
  return (
    <Animated.View
      style={[
        styles.caja,
        {scaleX: animacion, scaleY: animacion},
      ]}></Animated.View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion2;
