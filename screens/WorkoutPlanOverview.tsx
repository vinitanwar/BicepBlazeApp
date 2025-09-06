import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WorkoutCard from '@/components/WorkoutCard';
import StickyButton from '@/components/StickyButton';
import CalendarWeek from '@/components/CalendarWeek';
import DifficultyIndicator from '@/components/DifficultyIndicator';
import { workoutPlans } from '@/data/workoutPlans';
import { WorkoutPlan } from '@/types/workout';

export default function WorkoutPlanOverview() {
  const [selectedPlan] = useState<WorkoutPlan>(workoutPlans[0]); // Bicep Blaze
  const [selectedDay, setSelectedDay] = useState(15);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800',
          }}
          style={styles.headerBackground}>
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)']}
            style={styles.headerGradient}>
            {/* Mascot Character */}
            <View style={styles.mascotContainer}>
              <View style={styles.mascot}>
                <Text style={styles.mascotEmoji}>🐘</Text>
              </View>
            </View>

            {/* Plan Title */}
            <Text style={styles.planTitle}>{selectedPlan.name}</Text>
            
            {/* Plan Details */}
            <View style={styles.planDetails}>
              <View style={styles.planMeta}>
                <Text style={styles.duration}>⏱️ {selectedPlan.duration}</Text>
                <DifficultyIndicator level={selectedPlan.difficulty} />
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>

        {/* Calendar Week */}
        <CalendarWeek
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          startDate={new Date('2024-11-11')}
        />

        {/* Workout Cards */}
        <View style={styles.workoutsSection}>
          {selectedPlan.workouts.slice(0, 2).map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              style={styles.workoutCard}
            />
          ))}
        </View>
      </ScrollView>

      {/* Sticky Button */}
      <StickyButton
        title="START WORKOUT PLAN"
        onPress={() => console.log('Start workout plan')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  headerBackground: {
    height: 300,
  },
  headerGradient: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mascotContainer: {
    marginBottom: 20,
  },
  mascot: {
    width: 80,
    height: 80,
    backgroundColor: '#3B82F6',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#10B981',
  },
  mascotEmoji: {
    fontSize: 40,
  },
  planTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  planDetails: {
    alignItems: 'center',
  },
  planMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  duration: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  },
  workoutsSection: {
    padding: 20,
  },
  workoutCard: {
    marginBottom: 15,
  },
});