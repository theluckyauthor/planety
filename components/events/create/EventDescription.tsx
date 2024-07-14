import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { ThemedView } from '../../ThemedView';

interface EventDescriptionProps {
  value: string;
  onChangeText: (text: string) => void;
  maxLength: number;
}

export const EventDescription: React.FC<EventDescriptionProps> = ({
  value,
  onChangeText,
  maxLength,
}) => {
  return (
    <ThemedView style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Describe your event"
        maxLength={maxLength}
        multiline
        numberOfLines={4}
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
    fontSize: 16,
    textAlignVertical: 'top',
  },
});