import React from 'react';
import { View, StyleSheet } from 'react-native';
import WorkoutPlanOverview from '@/screens/WorkoutPlanOverview';

export default function PlansScreen() {
  return (
    <View style={styles.container}>
      <WorkoutPlanOverview />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});