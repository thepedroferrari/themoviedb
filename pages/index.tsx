import Layout from '../components/Layout';
import { withApollo } from '../lib/apollo';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

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
    </Layout>
  )
}

export default withApollo(Home);
