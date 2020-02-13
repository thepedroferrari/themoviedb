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

  if (loading) return <div>Loading...</div>

  console.log(data);

  return (
    <Layout>
      <h1>Hello world!</h1>
      <WorkoutList />
    </Layout>
  )
}

export default withApollo(Home);
