import { Link } from 'expo-router';
import { Text } from 'react-native';
import { Pressable } from 'react-native';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

const PalettePreview = ({ palette }) => {
  return (
    <>
      <Text style={heading}>{palette.paletteName}</Text>
      <Pressable>
        <FlatList style={list}
          data={palette.colors.slice(0, 5)}
          keyExtractor={({ item }, i) => item?.colorName || i}
          renderItem={({ item }) => {
            return (
              <Link style={[color, { backgroundColor: item.hexCode }]}
                href={{
                  pathname: '/ColorPalette',
                  params: { colorName: item?.colorName, colors: JSON.stringify(palette.colors) }
                }}>
              </Link>
            );
          }} />
      </Pressable>
    </>
  );
};

const { list, heading, color } = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  list: {
    flexDirection: 'row',
    marginBottom: 30
  },
  color: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    height: 40,
    width: 40,
    marginRight: 10
  }
});

export default PalettePreview;
