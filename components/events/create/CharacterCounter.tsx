import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { ThemedView } from '../..//ThemedView';

interface CharacterCounterProps {
  current: number;
  max: number;
}

export const CharacterCounter: React.FC<CharacterCounterProps> = ({ current, max }) => {
  return (
    <ThemedView style={styles.container}>
      <Text style={styles.text}>
        {current}/{max}
      </Text>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  text: {
    fontSize: 12,
  },
});