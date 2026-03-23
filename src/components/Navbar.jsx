import { useState } from "react";
import {
  Home,
  Book,
  TrendingUp,
  Brain,
  Users,
  Link as LinkIcon,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/domain1", label: "Excellence", icon: Book },
  { path: "/domain2", label: "Growth", icon: TrendingUp },
  { path: "/domain3", label: "Commitment", icon: Brain },
  { path: "/domain4", label: "Citizenship", icon: Users },
  { path: "/domain5", label: "Connections", icon: LinkIcon },
];

export default function BubbleNavbar() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="
        flex items-center gap-2
        bg-white/70 border 
        border-gray-200
        px-4 py-3 rounded-full shadow-lg
      "
      >
        {navItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredIdx === idx;
          const isNeighbor =
            hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`
  group relative flex items-center justify-center
  rounded-full transition-all duration-300

  ${
    isActive
      ? "bg-primary-100 text-primary-600 shadow-md scale-110"
      : "text-muted hover:text-accent-500 hover:bg-primary-100"
  }

  ${isHovered ? "w-14 h-14" : isNeighbor ? "w-12 h-12" : "w-10 h-10"}
`}
            >
              <item.icon
                className={`
                  rounded-full transition-all duration-300 transform
                  ${isHovered ? "w-7 h-7" : isNeighbor ? "w-5 h-5" : "w-4 h-4"}
                `}
              />

              {/* Tooltip */}
              <span
                className="
                absolute -top-10
                scale-0 opacity-0
                bg-primary-100 text-white text-xs
                px-2 py-1 rounded-md
                rounded-full transition-all duration-200 transform
                group-hover:scale-100 group-hover:opacity-100
              "
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
