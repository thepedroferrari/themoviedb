import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from '../components/Layout';
import WorkoutForm from '../components/WorkoutForm'
import WorkoutList, { Workout } from '../components/WorkoutList'
import { withApollo } from '../lib/apollo';

const HOME_QUERY = gql`
  query HomeQuery {
    sayHello
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(HOME_QUERY);
  const [workouts, setWorkouts] = useState <Workout[]>([
    {
      exercise: 'Bench Press',
      reps: 5,
      weight: 120,
      unit: 'kg'
    },
    {
      exercise: 'Push Up',
      reps: 50,
      weight: 0
    }
  ]);


  if (loading) return <div>Loading...</div>

  console.log(data);

  return (
    <Layout>
      <h1>Hello world!</h1>
      <WorkoutForm onSubmit={(workout: Workout) => {
        setWorkouts([...workouts, workout])
        localStorage.setItem("workouts", JSON.stringify(workouts));
      }} />
      <WorkoutList workouts={workouts} />
    </Layout>
  )
}

export default withApollo(Home);
