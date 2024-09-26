"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Op() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 1.1,
      fill: "rgba(0, 0, 0, 1)",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div
      className="absolute flex h-full w-full items-center bg-white p-96"
      style={{
        opacity: isVisible ? 1 : 0,
        zIndex: isVisible ? 1 : -1,
        transition: "opacity 0.5s ease",
      }}
    >
      <motion.svg
        id="logo"
        data-name="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 485.17 264.38"
      >
        <motion.path
          d="M3.27,92.12C3.27,43.05,42.9,3.27,91.78,3.27s88.51,39.78,88.51,88.85"
          style={{
            fill: "none",
            stroke: "#231815",
            strokeMiterlimit: 10,
            strokeWidth: "6.54px",
          }}
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M152.75,93.47c0,46.64,39.98,84.45,89.29,84.45s89.29-37.81,89.29-84.45c0,0-2.8-22.57,9.85-31.26,1.45-.98,2.88-1.9,4.22-2.75.05-.03.1-.06.15-.09,8.8-5.48,19.92-5.25,28.94-.13,5.17,2.93,10.7,7.73,14.13,15.53,2.01,4.57,6.41,11.59,15.11,13.88s18.45,8.26,21.34,12.91-5.72,5.58-8.08,5.36c-9.38-.9-21.52-5.18-32.24-7.82s-12.38-3.34-19.76.44-13,7.73-13,7.73"
          style={{
            fill: "none",
            stroke: "#231815",
            strokeMiterlimit: 10,
            strokeWidth: "6.41px",
          }}
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.g>
          <motion.path
            d="M468.59,93.47c0-41.48-33.83-77.28-75.56-77.28s-75.56,35.8-75.56,77.28v2.17c0,39.51-33.3,70.11-75.08,70.11s-75.24-33.71-75.63-72.92v-1.39c-.37-41.27-33.8-76.76-74.97-76.76S16.8,50.55,16.8,92.12"
            style={{
              fill: "none",
              stroke: "#231815",
              strokeMiterlimit: 10,
              strokeWidth: "5.56px",
            }}
            variants={icon}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M303.49,93.47c0-48.96,39.94-88.65,89.2-88.65s89.2,39.69,89.2,88.65"
            style={{
              fill: "none",
              stroke: "#231815",
              strokeMiterlimit: "10",
              strokeWidth: "6.56px",
            }}
            variants={icon}
            initial="hidden"
            animate="visible"
          />
        </motion.g>
        <motion.circle
          cx="372.03"
          cy="70.75"
          r="2.49"
          style={{
            fill: "none",
            stroke: "#231815",
            strokeMiterlimit: "10",
            strokeWidth: "5.56px",
          }}
          variants={icon}
          initial="hidden"
          animate="visible"
        />
        <motion.path
          d="M177.5,180.06h28.17c.16,0,.26.18.17.31-2.39,3.6-25.36,37.31-52.8,47.02-.14.05-.29-.06-.28-.21,1.33-27.18,23.4-46.06,24.61-47.08.04-.03.08-.04.13-.04Z"
          style={{
            fill: "#none",
            stroke: "#231815",
            strokeMiterlimit: "10",
            strokeWidth: "5.56px",
          }}
          variants={icon}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    </div>
  );
}
