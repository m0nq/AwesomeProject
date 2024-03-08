import { Link } from 'expo-router';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={container}>
          <Text style={text}>Here are some boxes of different colors...</Text>
          <Link href="/ColorPalette" style={button} asChild>
            <Pressable>
              <Text>Solarized</Text>
            </Pressable>
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
};

const { text, container, button } = StyleSheet.create({
  container: {
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    padding: 25,
    marginTop: 25,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#147efb'
  }
});

export default App;
