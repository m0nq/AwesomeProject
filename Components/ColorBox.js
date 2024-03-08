import { Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

const ColorBox = ({ color, text }) => {
  return (
    <View style={[container, box, { backgroundColor: color }]}>
      <Text style={[boxText, { color: parseInt(color.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white' }]}>
        {text}: {color}
      </Text>
    </View>
  );
};

const { container, box, boxText } = StyleSheet.create({
  container: {
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default ColorBox;
