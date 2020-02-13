import ApolloClient from 'apollo-boost';
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import { NextPage, NextPageContext } from 'next';
import fetch from 'isomorphic-unfetch';
import { Context } from 'vm';
import { InMemoryCache } from 'apollo-cache-inmemory'

interface Props {
}

export function withApollo(PageComponent: NextPage) {

  // setting initial props
  const withApollo = ({ apolloClient, apolloState, ...pageProps }: any) => {
    const client = apolloClient || initApolloClient();

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps as Props} />
      </ApolloProvider>
    )
  };

  // Set the context where the props will be applied
  withApollo.getInitialProps = async (ctx: NextPageContext & Context) => {
    const { AppTree } = ctx;
    // Apollo will manage our state
    const apolloClient = (ctx.apolloClient = initApolloClient());

    let pageProps = {};
    if (PageComponent.getInitialProps) {
      pageProps = await PageComponent.getInitialProps(ctx);
    }

    // undefined window runs in the server.
    if (typeof window === 'undefined') {
      if (ctx.res && ctx.res.finished) {
        return pageProps;
      }

      try {
        // Mount app & get all data from tree before the app is rendered.
        // does not call component unmount
        const { getDataFromTree } = await import('@apollo/react-ssr')
        // get data from the APP tree (ctx.AppTree)
        await getDataFromTree(
          <AppTree
            pageProps={{
              ...pageProps,
              apolloClient
            }}
          />
        )
      } catch (e) {
        console.error(e);
      }
      // Clearning manually since component won't unmount from await get data tree
      Head.rewind();
    };
    // Craetes a peige

    const apolloState = apolloClient.cache.extract();
    return {
      ...pageProps,
      apolloState
    }
  }

  return withApollo;
}

// https://www.apollographql.com/docs/tutorial/client/
const initApolloClient = (initialState = {}) => {
  const ssrMode = typeof window === 'undefined';
  const cache = new InMemoryCache().restore(initialState);

  // setting up the cache within apollo with the initial state being blank
  const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    fetch,
    cache
  });
  return client;
}
