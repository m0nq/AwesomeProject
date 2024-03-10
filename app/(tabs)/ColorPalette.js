import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

import ColorBox from '../../Components/ColorBox';
import { ColorContext } from '../../contexts/ColorContext';

const ColorPalette = () => {
  const [colors, setColors] = useState([]);
  const { colorPalette } = useContext(ColorContext);

  useEffect(() => {
    (async () => {
      if (colorPalette) {
        setColors(colorPalette);
      } else {
        const data = await (await fetch('https://color-palette-api.kadikraman.vercel.app/palettes')).json();
        setColors(data[0].colors);
      }
    })();
  }, [colorPalette]);

  return (
    <>
      {colors.length ?
        <FlatList style={container} data={colors} keyExtractor={(item, i) => item.hexCode || i}
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
