import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';

export const Animacion5 = () => {
  const [animacion] = useState(new Animated.Value(1));
  const presionarBoton = () => {
    Animated.spring(animacion, {
      toValue: 0.8,
      useNativeDriver: false,
    }).start();
  };
  const soltarBoton = () => {
    Animated.spring(animacion, {
      toValue: 1,
      friction: 4, // mñas bajo, mayor rebote
      tension: 60, // cuánto mas bajo, más suave
      useNativeDriver: false,
    }).start();
  };

  const estiloAnimacion = {
    transform: [{scale: animacion}],
  };
  return (
    <View style={styles.contenedor}>
      <TouchableWithoutFeedback
        onPressIn={() => presionarBoton()}
        onPressOut={() => soltarBoton()}>
        <Animated.View style={[styles.btn, estiloAnimacion]}>
          <Text style={styles.texto}>Iniciar Sesión</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 28,
  },
  contenedor: {
    alignItems: 'center',
  },
});
export default Animacion5;
