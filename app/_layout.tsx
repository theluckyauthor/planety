import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import {Colors} from '../constants/Colors';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="screens/events/create/eventName" options={{ title: 'Name Your Event' }} />
      <Stack.Screen name="screens/events/create/eventWhat" options={{ title: 'Event Details' }} />
      {/* Add other event creation screens here */}
    </Stack>
  );
}
