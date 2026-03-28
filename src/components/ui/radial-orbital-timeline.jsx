"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function RadialOrbitalTimeline({
  timelineData,
  centerLogo,
  centerTitle = "Portfolio",
  centerSubtitle = "STEM Seal",
  showOrbitalLabels = true,
  enablePageLinks = false,
  showNodes = true,
}) {
  const [expandedItems, setExpandedItems] = useState({});
  const [viewMode, setViewMode] = useState("orbital");
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState({});
  const [centerOffset, setCenterOffset] = useState({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState(null);

  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});
  const navigate = useNavigate();

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };

      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) clearInterval(rotationTimer);
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index, total) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)),
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId) => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId) => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  return (
    <div
      className="w-full flex flex-col items-center py-10"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute flex flex-col items-center justify-center z-10">
            <div className="w-16 h-16 rounded-full bg-accent-500/20 via-blue-500 to-teal-500 flex items-center justify-center shadow-lg overflow-hidden">
              {centerLogo ? (
                <img
                  src={centerLogo}
                  alt="Center Logo"
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-white text-sm font-bold">HL</div>
              )}
            </div>
            <div className="mt-3 text-center">
              <p className="text-sm font-semibold text-text">{centerTitle}</p>
              <p className="text-xs text-text/60">{centerSubtitle}</p>
            </div>
          </div>

          {/* Orbit ring */}
          <div className="absolute w-96 h-96 rounded-full border border-primary-600/10"></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                {/* Pulse effect */}
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)",
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                />

                {/* Node */}
                <div
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${
                      isExpanded
                        ? "bg-primary-100 text-text"
                        : isRelated
                          ? "bg-primary-100/50 text-black"
                          : "bg-primary-100 text-text"
                    }
                    border-2
                    ${
                      isExpanded
                        ? "border-white shadow-lg shadow-white/30"
                        : isRelated
                          ? "border-white animate-pulse"
                          : "border-white/40"
                    }
                    transition-all duration-300
                    ${isExpanded ? "scale-150" : ""}
                  `}
                >
                  <Icon size={16} />
                </div>

                {/* Label */}
                {showOrbitalLabels && (
                  <div
                    className={`
                      absolute top-12 whitespace-nowrap
                      text-xs font-semibold tracking-wider
                      transition-all duration-300
                      ${isExpanded ? "text-text scale-125" : "text-text/70"}
                    `}
                  >
                    {item.title}
                  </div>
                )}

                {/* Expanded Card */}
                {isExpanded && (
                  <Card className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-primary-100/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-text/50">
                          {item.date}
                        </span>
                      </div>

                      <CardTitle className="text-sm mt-2">
                        {item.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="text-xs text-text/80">
                      <p>{item.content}</p>
                      {item.link && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <Button
                            asChild
                            className="w-full flex items-center bg-accent-500 text-white justify-center gap-2  hover:bg-accent-500/60"
                          >
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Link
                              <ArrowRight size={14} />
                            </a>
                          </Button>
                        </div>
                      )}
                      {enablePageLinks && item.path && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <Button
                            className="w-full flex items-center bg-accent-500 text-white justify-center gap-2  hover:bg-accent-500/60"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(item.path);
                              window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                              });
                            }}
                          >
                            View Page
                            <ArrowRight size={14} />
                          </Button>
                        </div>
                      )}
                      {item.relatedIds.length > 0 && showNodes && (
                        <div className="mt-4 pt-3 border-t border-white/10">
                          <div className="flex items-center mb-2">
                            <Link size={10} className="text-text/70 mr-1" />
                            <h4 className="text-xs uppercase tracking-wider text-text/70">
                              Connected Nodes
                            </h4>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId,
                              );

                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-6 px-2 py-0 text-xs rounded border-primary-500/60 bg-primary-600 hover:bg-primary-100/80 text-text/80 hover:text-text"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} className="ml-1" />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
