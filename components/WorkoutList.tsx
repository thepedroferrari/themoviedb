import React from 'react'
import Workout from './Workout';

import WorkoutForm from './WorkoutForm';

interface Props {
  workouts: (string | number)[][];
}
const WorkoutList = ({workouts}: Props) => {
  return (
    <section>
      <h2>My Workouts</h2>
      <WorkoutForm onSubmit={({ email, firstName, lastName }) => {
        console.log(email, firstName, lastName)
      }} />
      <Workout />
    </section>
  )
}

export default WorkoutList;
