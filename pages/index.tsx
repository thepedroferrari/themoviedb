import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from '../components/Layout';
import WorkoutList from '../components/WorkoutList'
import { withApollo } from '../lib/apollo';

const HOME_QUERY = gql`
  query HomeQuery {
    sayHello
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(HOME_QUERY);
  const [workouts, setWorkouts] = useState([['Bench Press', 5, 120], ['Sit Up', 25, 60]]);

  if (loading) return <div>Loading...</div>

  console.log(data);

  return (
    <Layout>
      <h1>Hello world!</h1>
      <WorkoutList workouts={workouts} />
    </Layout>
  )
}

export default withApollo(Home);
