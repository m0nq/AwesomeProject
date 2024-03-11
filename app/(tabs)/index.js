import { Link } from 'expo-router';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet } from 'react-native';

import PalettePreview from '../../Components/PalettePreview';

const App = () => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [isRefreshing, setRefreshing] = useState(false);

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
      <Link href="/modal">Present modal</Link>
      <FlatList
        style={[container, list]}
        data={colorPalettes}
        keyExtractor={item => item.paletteName}
        renderItem={({ item }) => <PalettePreview palette={item} />}
        refreshing={isRefreshing}
        onRefresh={handleRefresh} />
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
