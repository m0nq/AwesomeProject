import { useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

import ColorBox from '../../Components/ColorBox';

const ColorPalette = () => {
  const [colors, setColors] = useState([]);
  const encodedData = useLocalSearchParams();

  useEffect(() => {
    (async () => {
      if (encodedData && encodedData.colors) {
        const parsedColors = JSON.parse(encodedData.colors);
        setColors(parsedColors);
      } else {
        const data = await (await fetch('https://color-palette-api.kadikraman.vercel.app/palettes')).json();
        setColors(data[0].colors);
      }
    })();
  }, []);

  return (
    <>
      {colors.length ? <FlatList style={container}
          data={colors}
          keyExtractor={(item, i) => item.hexCode || i}
          renderItem={({ item: { hexCode, colorName } }) => <ColorBox hexCode={hexCode} text={colorName} />} /> :
        null
      }
    </>
  );
};

const { container } = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white'
  }
});

export default ColorPalette;
