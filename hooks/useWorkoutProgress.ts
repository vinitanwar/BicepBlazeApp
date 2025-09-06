import { useState, useEffect } from 'react';
import { UserProgress } from '@/types/workout';

export const useWorkoutProgress = (workoutPlanId: string) => {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress from storage/API
    const loadProgress = async () => {
      setLoading(true);
      
      // Mock data - in real app, load from AsyncStorage or API
      const mockProgress: UserProgress = {
        userId: 'user-123',
        workoutPlanId,
        completedWorkouts: ['welcome'],
        currentDay: 1,
        totalDays: 14,
        startDate: new Date().toISOString(),
        lastWorkoutDate: new Date().toISOString(),
      };

      setTimeout(() => {
        setProgress(mockProgress);
        setLoading(false);
      }, 1000);
    };

    loadProgress();
  }, [workoutPlanId]);

  const markWorkoutComplete = (workoutId: string) => {
    if (!progress) return;

    const updatedProgress = {
      ...progress,
      completedWorkouts: [...progress.completedWorkouts, workoutId],
      currentDay: progress.currentDay + 1,
      lastWorkoutDate: new Date().toISOString(),
    };

    setProgress(updatedProgress);
    // In real app, save to AsyncStorage/API here
  };

  const isWorkoutCompleted = (workoutId: string): boolean => {
    return progress?.completedWorkouts.includes(workoutId) ?? false;
  };

  return {
    progress,
    loading,
    markWorkoutComplete,
    isWorkoutCompleted,
  };
};