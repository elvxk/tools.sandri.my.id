"use client";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import getData from "@/lib/getData";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = () => {
  const url = "https://api.pradipta.dev";
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${url}/projects`, { method: "GET" })
      .then((res) => res.json())
      .then(({ data }) => {
        setData(data.filter((project) => project.is_tool));
      });
  }, []);

  // const data = await getData();
  return (
    <div className="container mx-auto px-6">
      <div className="flex gap-6 flex-col items-center justify-center min-h-[70vh]">
        <div className="flex flex-col items-center">
          <Image
            src="/eltoolnobg.webp"
            alt="ELVXK TOOL"
            width={100}
            height={100}
            priority
          />
          <h1 className="text-2xl font-bold">ELVXK TOOLS</h1>
          <h1 className="">Tools made by elvxk</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {data &&
            data.map((project) => {
              return <ToolCard project={project} key={project.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
