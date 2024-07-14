import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ThemedView } from '../../../../components/ThemedView';
import { ThemedText } from '../../../../components/ThemedText';
import { EventNameInput } from '../../../../components/events/create/EventNameInput';
import { CharacterCounter } from '../../../../components/events/create/CharacterCounter';
import { NextButton } from '../../../../components/events/create/NextButton';
import { RootStackParamList } from '../../../types/createNavigation'; // Adjust the import path as needed
import { router } from 'expo-router';


const MAX_LENGTH = 50;

export default function EventName() {
  const [eventName, setEventName] = useState('');

  const handleNext = () => {
    router.push({
      pathname: '/screens/event/create/eventWhat',
      params: { eventName }
    });
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Name your event</ThemedText>
      <EventNameInput
        value={eventName}
        onChangeText={setEventName}
        maxLength={MAX_LENGTH}
      />
      <CharacterCounter current={eventName.length} max={MAX_LENGTH} />
      <NextButton onPress={handleNext} disabled={eventName.trim().length === 0} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
    button: {
      borderRadius: 8,
      paddingHorizontal: 24,
      paddingVertical: 12,
      alignItems: 'center',
      marginTop: 20, // Add this line
    },
});