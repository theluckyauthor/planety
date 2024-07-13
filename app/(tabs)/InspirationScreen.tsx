import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function InspirationsScreen() {
  return (
    <View style={styles.container}>
      <Text>Inspirations Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InspirationsScreen;