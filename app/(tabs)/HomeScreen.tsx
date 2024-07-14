import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ThemedView } from '../../components/ThemedView';
import { ThemedText } from '../../components/ThemedText';
import ProfileCard from '@/components/ProfileSet';

// You'll need to create these components
// import UpcomingEvents from '../../components/events/UpcomingEvents';
// import LiveEvents from '../../components/events/LiveEvents';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedText style={styles.title}>Welcome to Planety</ThemedText>
        
        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Upcoming Events</ThemedText>
        </ThemedView>
        <ProfileCard 
        name="John Doe"
        imageUri="https://example.com/johndoe.jpg"
        bio="Software Engineer at Example Corp."
      />

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Live Now</ThemedText>
        </ThemedView>

        <ThemedView style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Friend Activity</ThemedText>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});