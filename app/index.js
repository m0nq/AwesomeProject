import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import ColorBox from '../Components/ColorBox';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' }
];

const App = () => {
  return (
    <SafeAreaView>
      <View style={container}>
        <Text style={text}>Here are some boxes of different colors...</Text>
        <FlatList style={container}
          data={COLORS}
          keyExtractor={item => item.colorName}
          renderItem={({ item }) => <ColorBox color={item.hexCode} text={item.colorName} />}
          listHeaderComponent={<Text style={text}>Solarized</Text>} />
      </View>
    </SafeAreaView>
  );
};

const { text, container } = StyleSheet.create({
  container: {
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  cyan: {
    backgroundColor: '#2aa198'
  },
  blue: {
    backgroundColor: '#288bd2'
  },
  magenta: {
    backgroundColor: '#d33682'
  },
  orange: {
    backgroundColor: '#cb4b16'
  }
});

export default App;
