import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface CalendarWeekProps {
  selectedDay: number;
  onSelectDay: (day: number) => void;
  startDate: Date;
}

export default function CalendarWeek({ selectedDay, onSelectDay, startDate }: CalendarWeekProps) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const startDay = 11; // Starting from 11th

  return (
    <View style={styles.container}>
      {days.map((day, index) => {
        const dayNumber = startDay + index;
        const isSelected = dayNumber === selectedDay;
        
        return (
          <TouchableOpacity
            key={day}
            style={styles.dayContainer}
            onPress={() => onSelectDay(dayNumber)}>
            <Text style={[styles.dayLabel, isSelected && styles.selectedDayLabel]}>
              {day}
            </Text>
            <View style={[styles.dayCircle, isSelected && styles.selectedDayCircle]}>
              <Text style={[styles.dayNumber, isSelected && styles.selectedDayNumber]}>
                {dayNumber}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#1a1a1a',
  },
  dayContainer: {
    alignItems: 'center',
    gap: 8,
  },
  dayLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  selectedDayLabel: {
    color: '#F59E0B',
  },
  dayCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  selectedDayCircle: {
    backgroundColor: '#F59E0B',
    borderRadius:'50%'
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  selectedDayNumber: {
    color: 'white',
  },
});