import { StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { ThemedView } from '../../components/ThemedView';
import { ThemedText } from '../../components/ThemedText';
import { CreateEventButton } from '../../components/events/create/CreateEventButton';
import React from 'react';


export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Welcome to Planety</ThemedText>
      <Link href="/screens/events/create/eventName" asChild>
        <CreateEventButton />
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});