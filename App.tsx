import {StyleSheet, View} from 'react-native';
import Animacion1 from './components/Animacion1';
import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <View style={styles.contenido}>
        <Animacion1 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
  },
});

export default App;
