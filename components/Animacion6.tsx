import {Animated, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export const Animacion6 = () => {
  const [animacion1] = useState(new Animated.Value(0));
  const [animacion2] = useState(new Animated.Value(-50));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        // Animated.timing(animacion2, {
        //   toValue: -30,
        //   duration: 500,
        //   useNativeDriver: false,
        // }),
        Animated.timing(animacion1, {
          toValue: 60,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animacion2, {
          toValue: 30,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animacion1, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(animacion2, {
          toValue: -30,
          duration: 500,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  }, [animacion1, animacion2]);

  const estiloAnimacion = {
    transform: [{translateY: animacion1}, {translateX: animacion2}],
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Animated.View style={[styles.caja, estiloAnimacion]} />
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 10,
    height: 10,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animacion6;
