import { Stack } from 'expo-router/stack';

import NewColorProvider from '../contexts/NewColorContext';

export default function AppLayout() {
  return (
    <NewColorProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ headerShown: false, presentation: 'modal' }} />
      </Stack>
    </NewColorProvider>
  );
}
