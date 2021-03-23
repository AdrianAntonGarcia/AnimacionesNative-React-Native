import {StyleSheet, View} from 'react-native';
// import Animacion1 from './components/Animacion1';
// import Animacion2 from './components/Animacion2';
// import Animacion3 from './components/Animacion3';
import Animacion4 from './components/Animacion4';

import React from 'react';

const App: React.FC = () => {
  return (
    <>
      <View style={styles.contenido}>
        <Animacion4 />
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
