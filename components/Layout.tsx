import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children }: { children: React.ReactNode}) => {

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='shortcut icon' href='/favicon.png' />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="description" content="Create a list of your favourite movies and never forget a movie you wanted to watch" />
      </Head>
      <Nav />
      <main>
        {children}
      </main>
    </>
  );
}
export default Layout;
