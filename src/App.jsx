import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Domain1 from "./pages/Domain1";
import Domain2 from "./pages/Domain2";
import Domain3 from "./pages/Domain3";
import Domain4 from "./pages/Domain4";
import Domain5 from "./pages/Domain5";



export default function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/excellence" element={<Domain1 />} />
          <Route path="/growth" element={<Domain2 />} />
          <Route path="/commitment" element={<Domain3 />} />
          <Route path="/citizenship" element={<Domain4 />} />
          <Route path="/connections" element={<Domain5 />} />
        </Routes>
      </main>
    </div>
  );
}