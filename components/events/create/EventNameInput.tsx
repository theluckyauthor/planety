import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { ThemedView } from '../../ThemedView';

interface EventNameInputProps {
  value: string;
  onChangeText: (text: string) => void;
  maxLength: number;
}

export const EventNameInput: React.FC<EventNameInputProps> = ({ value, onChangeText, maxLength }) => {
  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Enter event name"
        maxLength={maxLength}
        autoFocus
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
  },
  input: {
    fontSize: 18,
  },
});