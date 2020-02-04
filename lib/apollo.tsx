import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

interface Props {
}

export function withApollo(PageComponent: NextPage) {
  const withApollo = (props: any) => {
    const client = new ApolloClient({
      uri: 'http://localhost:3000/api/graphql',
      fetch
    });

    return (
      <ApolloProvider client={client}>
        <PageComponent {...props as Props} />
      </ApolloProvider>
    )
  };

  return withApollo;
}
