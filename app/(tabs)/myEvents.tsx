import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MyEvents() {
  return (
    <View style={styles.container}>
      <Text>My Events</Text>
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

export default MyEvents;