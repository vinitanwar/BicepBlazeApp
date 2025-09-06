export interface Exercise {
  id: string;
  name: string;
  duration: number; // in seconds
  sets?: number;
  reps?: number;
  restTime?: number; // in seconds
  instructions: string[];
  targetMuscles: string[];
  imageUrl?: string;
}

export interface Workout {
  id: string;
  title: string;
  description: string;
  duration: number; // in minutes
  exerciseCount: number;
  exercises: Exercise[];
  imageUrl: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  targetMuscles: string[];
}

export interface WorkoutPlan {
  id: string;
  name: string;
  description: string;
  duration: string; // e.g., "14 Days"
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  workouts: Workout[];
  imageUrl?: string;
  mascot?: string;
}

export interface UserProgress {
  userId: string;
  workoutPlanId: string;
  completedWorkouts: string[];
  currentDay: number;
  totalDays: number;
  startDate: string;
  lastWorkoutDate?: string;
}