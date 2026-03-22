import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="text-xl font-bold">STEM</div>
      <div className="hidden md:flex gap-6 text-sm">
        <a href="/" className="hover:text-gray-400">
          Home
        </a>
        <a href="/domain1" className="hover:text-gray-400">
          Domain 1
        </a>
        <a href="/domain2" className="hover:text-gray-400">
          Domain 2
        </a>
        <a href="/domain3" className="hover:text-gray-400">
          Domain 3
        </a>
        <a href="/domain4" className="hover:text-gray-400">
          Domain 4
        </a>
        <a href="/domain5" className="hover:text-gray-400">
          Domain 5
        </a>
        <a href="/about" className="hover:text-gray-400">
          About
        </a>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden">
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block hover:text-gray-400">
            Home
          </a>
          <a href="/domain1" className="block hover:text-gray-400">
            Excellence
          </a>
          <a href="/domain2" className="block hover:text-gray-400">
            Growth
          </a>
          <a href="/domain3" className="block hover:text-gray-400">
            Commitment
          </a>
          <a href="/domain4" className="block hover:text-gray-400">
            Citizenship
          </a>
          <a href="/domain5" className="block hover:text-gray-400">
            Connections
          </a>
          <a href="/about" className="block hover:text-gray-400">
            About
          </a>
        </div>
      )}
    </nav>
  );
}
