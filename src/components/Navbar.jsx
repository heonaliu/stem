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
  { path: "/excellence", label: "Excellence", icon: Book },
  { path: "/growth", label: "Growth", icon: TrendingUp },
  { path: "/commitment", label: "Commitment", icon: Brain },
  { path: "/citizenship", label: "Citizenship", icon: Users },
  { path: "/connections", label: "Connections", icon: LinkIcon },
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
        border-primary-500 rounded-full 
        px-4 py-3 shadow-lg
      "
      >
        {navItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredIdx === idx;
          const isNeighbor =
            hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;

          return (
            <div key={item.path} className="flex items-center">
              <button
                onClick={() => {
                  navigate(item.path);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
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

                  ${
                    isHovered
                      ? "w-14 h-14"
                      : isNeighbor
                        ? "w-12 h-12"
                        : "w-10 h-10"
                  }
                `}
              >
                <item.icon
                  className={`
                    transition-all duration-300
                    ${isHovered ? "w-7 h-7" : isNeighbor ? "w-5 h-5" : "w-4 h-4"}
                  `}
                />

                <span
                  className="
                    absolute -top-10
                    scale-0 opacity-0
                    bg-primary-500 text-white text-xs
                    px-2 py-1 rounded-md
                    transition-all duration-200 transform
                    group-hover:scale-100 group-hover:opacity-100
                  "
                >
                  {item.label}
                </span>
              </button>

              {/* Divider after Home */}
              {idx === 0 && <div className="mx-2 h-6 w-[1px] bg-gray-300" />}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
