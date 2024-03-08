import { useLocalSearchParams } from 'expo-router';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

import ColorBox from '../../Components/ColorBox';

const ColorPalette = () => {
  // const router = useRouter();
  const encodedData = useLocalSearchParams();
  const { paletteName = '' } = encodedData;
  const colors = JSON.parse(encodedData.colors);
  // const globalSearchParams = useGlobalSearchParams();

  return (
    <>
      {colors.length && <FlatList style={container}
        data={colors}
        keyExtractor={item => item.hexCode}
        renderItem={({ item: { hexCode, colorName } }) => <ColorBox hexCode={hexCode} text={colorName} />} />
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
