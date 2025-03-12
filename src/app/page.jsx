import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";
import getData from "@/lib/getData";
import Image from "next/image";

const Home = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="container mx-auto px-6">
        <div className="flex gap-6 flex-col items-center justify-center min-h-[70vh]">
          <div className="flex flex-col items-center">
            <Image
              src="/eltoolnobg.webp"
              alt="ELVXK TOOL"
              width={100}
              height={100}
            />
            <h1 className="text-2xl font-bold">ELVXK TOOLS</h1>
            <h1 className="">Tools made by elvxk</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {data.map((project) => {
              return <ToolCard project={project} key={project.id} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
