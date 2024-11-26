import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

async function getdata() {
  const fetchData = await client.fetch(`*[_type == 'rich'] { content }`);
  return fetchData;
}

async function Home() {
  const data = await getdata();
  console.log("Fetched Data:", data);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Sanity Tutorial</h1>

      {/* Content */}
      <div className="bg-white shadow-md rounded-md p-6 max-w-3xl w-full">
        {data?.[0]?.content ? (
          <PortableText value={data[0].content} />
        ) : (
          <p className="text-gray-500">No content available.</p>
        )}
      </div>

      {/* Button */}
      <button className="mt-6 bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-600 transition">
        <Link href="/studio">Go to Studio Page</Link>
      </button>
    </div>
  );
}

export default Home;
