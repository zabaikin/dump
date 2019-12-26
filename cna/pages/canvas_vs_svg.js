import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Canvas vs Svg</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <canvas></canvas>
  </div>
)

export default Home
