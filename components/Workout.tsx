import WorkoutButton from './WorkoutButton';
import { Workout } from '../components/WorkoutList'

const WorkoutItem = ({ workout }: { workout: Workout }) => {
  return (
    <article>
      <h3>{workout.exercise}</h3>
      <ul>
        <li>
          <strong>weight: </strong> {workout.weight}{workout.unit && workout.unit}
        </li>

        <li>
          <strong>reps: </strong> {workout.reps}
        </li>


        <WorkoutButton />
      </ul>
    </article>
  )
};

export default WorkoutItem;
