import React from 'react'
import WorkoutItem from './Workout';

type Exercises = 'Bench Press' | 'Push Up' | 'Sit Up'
export type Workout = {
  exercise: Exercises;
  reps: number;
  weight: number;
  unit?: 'kg' | 'lbs';
}

interface Props {
  workouts: Workout[];
}
const WorkoutList = ({ workouts }: Props) => {
  return (
    <section>
      <h2>My Workouts</h2>
      {workouts.map((workout, i) =>
        <WorkoutItem
          key={`${workout.exercise}-${i}`}
          workout={workout}
        />
      )}

    </section>
  )
}

export default WorkoutList;
