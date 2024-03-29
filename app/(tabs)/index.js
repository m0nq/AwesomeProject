import { Link } from 'expo-router';
import { useContext } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

import PalettePreview from '../../components/PalettePreview';
import { NewColorContext } from '../../contexts/NewColorContext';

const App = () => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setRefreshing] = useState(false);
  const { newColorPalette } = useContext(NewColorContext);

  useEffect(() => {
    if (newColorPalette) {
      setColorPalettes(prevState => [newColorPalette, ...prevState]);
    }
  }, [newColorPalette]);

  useEffect(() => {
    fetchColorPalette();
  }, []);

  const fetchColorPalette = useCallback(async () => {
    const data = await (await fetch('https://color-palette-api.kadikraman.vercel.app/palettes')).json();
    setColorPalettes(data);
  }, []);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      fetchColorPalette();
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <>
      <Link style={{ color: 'teal', fontSize: 24, alignSelf: 'center', marginTop: 5 }} href="modal">
        Add a color scheme...
      </Link>
      <ScrollView>
        <FlatList
          style={[container, list]}
          data={colorPalettes}
          keyExtractor={item => item.paletteName}
          renderItem={({ item }) => <PalettePreview palette={item} />}
          refreshing={isRefreshing}
          onRefresh={handleRefresh} />
      </ScrollView>
    </>
  );
};

const { container, list } = StyleSheet.create({
  container: {
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
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

export default App;
