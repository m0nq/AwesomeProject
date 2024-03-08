import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';

const TabLayout = () => (
  <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
    <Tabs.Screen name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
      }}
    />
    <Tabs.Screen name="ColorPalette"
      options={{
        title: 'Color Palette',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="palette" color={color} />
      }}
    />
  </Tabs>
);

export default TabLayout;
