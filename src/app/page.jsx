import ToolCard from "@/components/ToolCard";
import getData from "@/lib/getData";

const Home = async () => {
  const data = await getData();
  return (
    <div className="container mx-auto px-6">
      <div className="flex gap-6 flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
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
  );
};

export default Home;
