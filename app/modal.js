import { router } from 'expo-router';
import { useContext } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { Alert } from 'react-native';
import { Switch } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';

import { COLORS } from '../consts/colors';
import { NewColorContext } from '../contexts/NewColorContext';

const Modal = () => {
  const [name, setName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const { setNewColorPalette } = useContext(NewColorContext);

  const handleUpdate = useCallback((color, newValue) => {
      if (newValue) {
        setSelectedColors(current => [...current, color]);
      } else {
        setSelectedColors(current => current.filter(c => c.colorName !== color.colorName));
      }
    },
    [selectedColors, setSelectedColors]
  );

  const handleSubmit = useCallback(() => {
    if (!name) {
      Alert.alert('Please add a name to your color palette');
    } else if (selectedColors.length < 3) {
      Alert.alert('Please choose at least 3 colors');
    } else {
      setNewColorPalette({ paletteName: name, colors: selectedColors });
      router.navigate('/');
    }
  }, [name, selectedColors]);

  return (
    <View style={container}>
      <View style={heading}>
        <Text>Name of your color palette</Text>
        <TextInput style={input} value={name} onChangeText={setName} />
      </View>
      <FlatList
        style={list}
        data={COLORS}
        keyExtractor={item => item.colorName}
        renderItem={({ item }) => (
          <View style={switch1}>
            <Text>{item.colorName}</Text>
            <Switch value={selectedColors.some(color => color.colorName === item.colorName)}
              onValueChange={newValue => handleUpdate(item, newValue)} />
          </View>
        )} />
      <TouchableOpacity style={buttonWrapper} onPress={handleSubmit}>
        <View style={button}>
          <Text style={buttonText}>Submit!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const {
  button,
  buttonText,
  buttonWrapper,
  container,
  heading,
  input,
  list,
  switch: switch1
} = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 18
  },
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  },
  list: {
    paddingHorizontal: 10,
    marginVertical: 10
  },
  heading: {
    padding: 10
  },
  buttonWrapper: {
    height: 100,
    marginHorizontal: 10
  },
  button: {
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Modal;
