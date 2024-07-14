import React, { forwardRef } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type CreateEventButtonProps = {
  onPress?: () => void;
};

export const CreateEventButton = forwardRef<TouchableOpacity, CreateEventButtonProps>(
  ({ onPress }, ref) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress} ref={ref}>
        <Text style={styles.buttonText}>Create Event</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});