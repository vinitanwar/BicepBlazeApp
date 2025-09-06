import { WorkoutPlan } from '@/types/workout';
export const workoutPlans: WorkoutPlan[] = [
  {
    id: 'bicep-blaze',
    name: 'BICEP BLAZE',
    description: 'Bigger, stronger arms in 14 days',
    duration: '14 Days',
    difficulty: 'intermediate',
    mascot: '🐘',
    workouts: [
      {
        id: 'welcome-1',
        title: 'Welcome • 15m',
        description: 'Introduction to the program',
        duration: 15,
        exerciseCount: 2,
        difficulty: 'intermediate',
        targetMuscles: ['biceps', 'forearms'],
        imageUrl: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800',
        exercises: [
          {
            id: 'basic-curls',
            name: 'Basic Bicep Curls',
            duration: 300,
            sets: 3,
            reps: 12,
            restTime: 60,
            instructions: [
              'Stand with feet hip-width apart',
              'Hold weights with arms extended',
              'Curl weights up to shoulder level',
              'Lower slowly and repeat'
            ],
            targetMuscles: ['biceps'],
            imageUrl: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400',
          },
          {
            id: 'hammer-curls',
            name: 'Hammer Curls',
            duration: 600,
            sets: 3,
            reps: 10,
            restTime: 60,
            instructions: [
              'Hold weights with neutral grip',
              'Keep elbows close to sides',
              'Curl up maintaining hammer position',
              'Lower with control'
            ],
            targetMuscles: ['biceps', 'forearms'],
            imageUrl: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=400',
          }
        ]
      },
      {
        id: 'curling-power',
        title: 'Curling Power • 45m',
        description: 'Intense bicep focused workout',
        duration: 45,
        exerciseCount: 5,
        difficulty: 'intermediate',
        targetMuscles: ['biceps', 'forearms', 'shoulders'],
        imageUrl: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
        exercises: [
          {
            id: 'concentration-curls',
            name: 'Concentration Curls',
            duration: 480,
            sets: 4,
            reps: 10,
            restTime: 45,
            instructions: [
              'Sit on bench with elbow against inner thigh',
              'Curl weight with full range of motion',
              'Focus on squeezing bicep at top',
              'Lower slowly and repeat'
            ],
            targetMuscles: ['biceps'],
            imageUrl: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
          },
          {
            id: 'preacher-curls',
            name: 'Preacher Curls',
            duration: 540,
            sets: 4,
            reps: 8,
            restTime: 60,
            instructions: [
              'Position arms on preacher bench',
              'Start with arms slightly bent',
              'Curl weight up smoothly',
              'Lower with control, don\'t lock elbows'
            ],
            targetMuscles: ['biceps'],
            imageUrl: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400',
          }
        ]
      },
      {
        id: 'bicep-burn',
        title: 'Bicep Burn • 30m',
        description: 'High-intensity bicep workout',
        duration: 30,
        exerciseCount: 3,
        difficulty: 'intermediate',
        targetMuscles: ['biceps'],
        imageUrl: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
        exercises: [
          {
            id: 'incline-curls',
            name: 'Incline Curls',
            duration: 360,
            sets: 3,
            reps: 12,
            restTime: 45,
            instructions: [
              'Lie back on incline bench',
              'Hold weights with arms extended',
              'Curl weights up slowly',
              'Lower with control'
            ],
            targetMuscles: ['biceps'],
            imageUrl: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400',
          }
        ]
      },
      {
        id: 'strength-surge',
        title: 'Strength Surge • 40m',
        description: 'Build power with heavy lifts',
        duration: 40,
        exerciseCount: 4,
        difficulty: 'intermediate',
        targetMuscles: ['biceps', 'shoulders'],
        imageUrl: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=800',
        exercises: [
          {
            id: 'barbell-curls',
            name: 'Barbell Curls',
            duration: 420,
            sets: 4,
            reps: 10,
            restTime: 60,
            instructions: [
              'Stand with feet shoulder-width apart',
              'Grip barbell with palms up',
              'Curl up to chest level',
              'Lower slowly'
            ],
            targetMuscles: ['biceps'],
            imageUrl: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=400',
          }
        ]
      }
    ]
  }
];