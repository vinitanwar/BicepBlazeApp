import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface RestCardProps {
  title: string;
  description: string;
  style?: ViewStyle;
}

export default function RestCard({ title, description, style }: RestCardProps) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.restIcon}>
        <Text style={styles.iconText}>Zz</Text>
        <Text style={styles.restTitle}>{title}</Text>
      </View>
      <View style={styles.descriptionBubble}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
  },
  restIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#F59E0B',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#1a1a1a',
  },
  iconText: {
    fontSize: 24,
    color: 'black',
  },
  restTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 2,
  },
  descriptionBubble: {
    backgroundColor: '#374151',
    borderRadius: 12,
    padding: 12,
    maxWidth: 200,
  },
  description: {
    fontSize: 14,
    color: 'white',
    textAlign: 'left',
    lineHeight: 20,
  },
});