import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import { AboutMe } from '../components/AboutMe';
import { Archive } from '../components/Archive';
import { Bottom } from '../components/Bottom';
import { Header } from '../components/Header'
import { Introduce } from '../components/Introduce';
import { Project } from '../components/Project';
import { Skills } from '../components/Skills';
import { Section } from '../styles/common';

const App = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Home: NextPage = () => {
  return (
    <App>
      <Head>
        <title>Suhyeon`s Portfolio</title>
        <meta name="description" content="Suhyeon`s Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Introduce />
        <AboutMe />
        <Skills />
        <Archive />
        <Project />
      </Main>
      <Bottom />
    </App>
  )
}

export default Home
