import Head from "next/head";

function Home() {
  return (
    <div>
      <Head>
        <title>NEWS - On the Top</title>
      </Head>
      <div className="grid grid-flow-col from-gray-50 grid-rows-2 grid-cols-3 gap-4">
        <div>1</div>
        <div className="col-start-3 border-4 border-light-blue-500 border-opacity-100">
          2
        </div>
        <div>3</div>
        <div>4</div>
        <div className="row-start-1 col-start-2 col-span-2">5</div>
      </div>
    </div>
  );
}

export default Home;
