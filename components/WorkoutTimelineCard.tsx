import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
} from 'react-native';
import { Check } from 'lucide-react-native';
import { Workout } from '@/types/workout';

interface WorkoutTimelineCardProps {
  workout: Workout;
  isCompleted: boolean;
  style?: ViewStyle;
  onPress?: () => void;
}

export default function WorkoutTimelineCard({
  workout,
  isCompleted,
  style,
  onPress,
}: WorkoutTimelineCardProps) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{ uri: workout.imageUrl }} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.header}>
            {isCompleted && (
              <View style={styles.completedBadge}>
                <Check size={16} color="white" />
              </View>
            )}
          </View>
          <Text style={styles.title}>
            {workout.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#F59E0B',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#F59E0B',
    width:'80%'
  },
  image: {
    width: '100%',
    height: 140,
    resizeMode: 'cover',
  },
  content: {
    padding: 12,
    position: 'relative',
  },
  header: {
    position: 'absolute',
    top: -30,
    right: 10,
  },
  completedBadge: {
    width: 40,
    height: 40,
    backgroundColor: '#F59E0B',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#1a1a1a',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});