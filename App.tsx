import {StyleSheet, View} from 'react-native';
// import Animacion1 from './components/Animacion1';
// import Animacion2 from './components/Animacion2';
// import Animacion3 from './components/Animacion3';
// import Animacion4 from './components/Animacion4';
import Animacion5 from './components/Animacion5';

import React from 'react';

const App: React.FC = () => {
  return (
    <View style={styles.general}>
      <View style={styles.contenido}>
        <Animacion5 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  general: {
    backgroundColor: '#FFF',
    height: '100%',
  },
  contenido: {
    marginTop: 100,
  },
});

export default App;
