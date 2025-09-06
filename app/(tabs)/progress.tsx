import React from 'react';
import { View, StyleSheet } from 'react-native';
import GamifiedProgressTimeline from '@/screens/GamifiedProgressTimeline';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <GamifiedProgressTimeline />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});