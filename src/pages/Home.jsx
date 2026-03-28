import HomeOrbit from "./HomeSections/HomeOrbit";

export default function Home() {
  return (
    <>
      <div className="text-center py-8">
        <h1 className="font-special text-6xl text-primary-600 font-bold">STEM Seal Portfolio</h1>

        <p className="mt-4 text-lg text-accent-600 text-text/70">Heona Liu</p>
      </div>
      <div className="w-full mt-40 mb-60 flex items-center justify-center">
        <HomeOrbit />
      </div>
    </>
  );
}
