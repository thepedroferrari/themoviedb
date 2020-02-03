import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='shortcut icon' href='/public/favicon.png' />
        <meta name="description" content="Create a list of your favourite movies and never forget a movie you wanted to watch" />
      </Head>
      <Nav />
      <h1>Hello world!</h1>
    </>
  )
}

export default Home;
