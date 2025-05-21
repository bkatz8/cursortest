import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({ settings }) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100 * settings.tension });
  const springY = useSpring(y, { stiffness: 100 * settings.tension });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-cursor-target]");
    targets.forEach((el) => {
      el.addEventListener("pointerenter", () => setHovered(true));
      el.addEventListener("pointerleave", () => setHovered(false));
    });
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        width: settings.size,
        height: settings.size,
        borderRadius: "50%",
        backgroundColor: settings.color,
        border: `2px solid ${settings.outline}`,
        transform: `translate(-50%, -50%) scale(${hovered ? settings.scale : 1})`,
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 0.2s ease"
      }}
    />
  );
}
