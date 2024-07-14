import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ThemedView } from '../..//ThemedView';

interface EventType {
  id: string;
  name: string;
}

interface EventTypeSelectorProps {
  eventTypes: EventType[];
  selectedType: string | null;
  onSelectType: (typeId: string) => void;
}

export const EventTypeSelector: React.FC<EventTypeSelectorProps> = ({
  eventTypes,
  selectedType,
  onSelectType,
}) => {
  return (
    <ThemedView style={styles.container}>
      {eventTypes.map((type) => (
        <TouchableOpacity
          key={type.id}
          style={[
            styles.typeButton,
            selectedType === type.id && styles.selectedType,
          ]}
          onPress={() => onSelectType(type.id)}
        >
          <Text style={styles.typeText}>{type.name}</Text>
        </TouchableOpacity>
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  typeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 4,
  },
  selectedType: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  typeText: {
    fontSize: 14,
  },
});