import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { ThemedView } from '../../../../components/ThemedView';
import { ThemedText } from '../../../../components/ThemedText';
import { EventTypeSelector } from '../../../../components/events/create/EventTypeSelector';
import { EventDescription } from '../../../../components/events/create/EventDescription';
import { NextButton } from '../../../../components/events/create/NextButton';
import { RootStackParamList } from '../../../types/createNavigation';
import { router, useLocalSearchParams } from 'expo-router';

const MAX_DESCRIPTION_LENGTH = 500;

export default function EventWhat() {
  const { eventName } = useLocalSearchParams<{ eventName: string }>();
  const [eventType, setEventType] = useState<string | null>(null);
  const [eventDescription, setEventDescription] = useState('');

  const handleNext = () => {
    if (eventType) {
      router.push({
        pathname: '/screens/event/create/eventWhen',
        params: { eventName, eventType, eventDescription }
      });
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>What type of event is it?</ThemedText>
      <EventTypeSelector
        eventTypes={eventTypes}
        selectedType={eventType}
        onSelectType={setEventType}
      />
      <ThemedText style={styles.subtitle}>Describe your event</ThemedText>
      <EventDescription
        value={eventDescription}
        onChangeText={setEventDescription}
        maxLength={MAX_DESCRIPTION_LENGTH}
      />
      <NextButton onPress={handleNext} disabled={!eventType} />
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
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

const eventTypes = [
  { id: 'party', name: 'Party' },
  { id: 'meeting', name: 'Meeting' },
  { id: 'concert', name: 'Concert' },
  { id: 'workshop', name: 'Workshop' },
  { id: 'other', name: 'Other' },
];