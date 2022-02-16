import Head from 'next/head';
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Jay Heo's Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
  )
}