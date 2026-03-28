import HomeOrbit from "./HomeSections/HomeOrbit";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold text-blue-500">Home Page</h1>
      <div className="w-full mt-60 mb-60 flex items-center justify-center">
        <HomeOrbit />
      </div>
      
    </>
  );
}
