import React from 'react'
import Workout from './Workout';

import WorkoutForm from './WorkoutForm';


const WorkoutList = () => {
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
