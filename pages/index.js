import Head from 'next/head';
import React from 'react';
import Header from '../components/header';
import Ebook from '../components/ebook';
import Footer from '../components/footer';
import Students from '../components/students';
import Video from '../components/video';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta name="curso de enfermagem" content="receba ebook sobre curso técnico em enfermagem."/> 
        <title>Técnico em enfermagem</title>
        <link rel="icon" href="/saude.svg" />
      </Head>

      <main>
        <Header />
        <Ebook />
        <Students />
        <Video />
        <Footer />
      </main>   
    </div>
  )
}

