import { Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

const ColorBox = ({ hexCode, text }) => {
  return (
    <View style={[box, { backgroundColor: hexCode }]}>
      <Text style={[boxText, { color: parseInt(hexCode?.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white' }]}>
        {text}: {hexCode}
      </Text>
    </View>
  );
};

const { box, boxText } = StyleSheet.create({
  box: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2
  },
  boxText: {
    fontWeight: 'bold',
    color: 'white'
  }
});

export default ColorBox;
