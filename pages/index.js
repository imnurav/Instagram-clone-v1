import Head from "next/head";
import Feed from "./component/Feed";
import Header from "./component/Header";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed/>
    </div>
  );
}
