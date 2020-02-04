import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Movie = () => {
  const router = useRouter();
  const { movie } = router.query;
  return (
    <Layout>
      <h1>{movie}</h1>
    </Layout>
  )
}

export default Movie;