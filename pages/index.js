import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import Ebook from '../components/ebook';
import Footer from '../components/footer';
import Students from '../components/students';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Técnico em enfermagem</title>
        <link rel="icon" href="/saude.svg" />
      </Head>

      <main>
        <Header />
        <Ebook />
        <Students />
        <Footer />
      </main>   
    </div>
  )
}
/*
<style jsx global>{`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}

* {
  box-sizing: border-box;
}
`}</style>*/