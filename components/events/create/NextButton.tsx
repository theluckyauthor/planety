import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ThemedView } from '../../ThemedView'

interface NextButtonProps {
  onPress: () => void;
  disabled: boolean;
}

export const NextButton: React.FC<NextButtonProps> = ({ onPress, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <ThemedView style={[styles.button, disabled && styles.disabled]}>
        <Text style={styles.buttonText}>Next</Text>
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});