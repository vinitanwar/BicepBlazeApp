import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WorkoutTimelineCard from '@/components/WorkoutTimelineCard';
import RestCard from '@/components/RestCard';
import { workoutPlans } from '@/data/workoutPlans';
import { WorkoutPlan } from '@/types/workout';
import Svg, { Path } from 'react-native-svg';

export default function GamifiedProgressTimeline() {
  const [selectedPlan] = useState<WorkoutPlan>(workoutPlans[0]);
  const days = Array.from({ length: 14 }, (_, i) => i + 1); // 14-day plan

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#F59E0B', '#D97706']} style={styles.header}>
        <Text style={styles.headerTitle}>{selectedPlan.name}</Text>
        <Text style={styles.headerSubtitle}>{selectedPlan.description}</Text>
        <View style={styles.difficulty}>
          <Text style={styles.difficultyText}>
            {selectedPlan.difficulty.charAt(0).toUpperCase() +
              selectedPlan.difficulty.slice(1)}{' '}
            ★★
          </Text>
        </View>
        <View style={styles.mascotContainer}>
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/ffffff/dumbbell.png',
            }}
            style={styles.mascot}
          />
        </View>
      </LinearGradient>
      <ScrollView style={styles.timeline} showsVerticalScrollIndicator={false}>
        <View style={styles.timelineContent}>
          {days.map((day, index) => {
            const workout =
              selectedPlan.workouts[index % selectedPlan.workouts.length];
            const isRestDay = day % 2 === 0; // Alternate rest days
            const isCompleted = day <= 1; // Only day 1 completed as in image

            return (
              <View key={day} style={styles.dayContainer}>
                <Text style={styles.dayNumber}>{day}</Text>
                {isRestDay ? (
                  <RestCard
                    title="Rest"
                    description="Rest is one of the most important factors to build muscle."
                    style={styles.restCard}
                  />
                ) : (
                  <WorkoutTimelineCard
                    workout={workout}
                    isCompleted={isCompleted}
                    style={styles.timelineCard}
                  />
                )}
                <View style={styles.connectorContainer}>
                  <Svg height="86" width="100" style={styles.connector}>
                    <Path
                      d="M99.115 0H100C100 0 100 43 50 43C0 43 0.884956 86 0.884956 86H0C0 86 0 42 50 42C100 42 99.115 0 99.115 0Z"
                      stroke="#F59E0B"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </Svg>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingTop: 60,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.9)',
    marginBottom: 10,
  },
  difficulty: {
    alignSelf: 'flex-start',
  },
  difficultyText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  mascotContainer: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    padding: 8,
  },
  mascot: {
    width: 24,
    height: 24,
  },
  timeline: {
    flex: 1,
    paddingBottom: 20,
  },
  timelineContent: {
    padding: 20,
    paddingTop: 40,
    position: 'relative',
  },
  dayContainer: {
    position: 'relative',
    marginBottom: 80, // Increased to accommodate connector
  },
  dayNumber: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'rgba(255,255,255,0.1)',
    position: 'absolute',
    right: 0,
    top: -30,
  },
  timelineCard: {
    marginBottom: 20,
    zIndex: 1,
    alignSelf: 'flex-start',
    width: '80%',
  },
  restCard: {
    marginVertical: 20,
    zIndex: 1,
    alignSelf: 'flex-start',
    width: '100%',
  },
  connectorContainer: {
    position: 'absolute',
    top: '100%',
    left: '40%', // Adjust to center under card
    transform: [{ translateX: -50 }],
  },
  connector: {
    marginTop: -20, // Overlap slightly if needed
  },
});
