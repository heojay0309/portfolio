import Head from 'next/head';
import Project from "../../components/Project";

export default function Home() {
    return (
      <div className="space-y-14 lg:space-y-24">
        <Head>
          <title>Jay Heo's Profile</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <main className="max-w-4xl mx-auto mt-16 antialiased">
          <Project/>
        </main>
      </div>
    )
  }