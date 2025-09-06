import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface DifficultyIndicatorProps {
  level: 'beginner' | 'intermediate' | 'advanced';
  style?: ViewStyle;
}

export default function DifficultyIndicator({ level, style }: DifficultyIndicatorProps) {
  const getStars = () => {
    switch (level) {
      case 'beginner':
        return '⭐';
      case 'intermediate':
        return '⭐⭐';
      case 'advanced':
        return '⭐⭐⭐';
      default:
        return '⭐';
    }
  };

  const getColor = () => {
    switch (level) {
      case 'beginner':
        return '#10B981';
      case 'intermediate':
        return '#F59E0B';
      case 'advanced':
        return '#EF4444';
      default:
        return '#F59E0B';
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: getColor() }, style]}>
      <Text style={styles.text}>
        {level.charAt(0).toUpperCase() + level.slice(1)} {getStars()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
});