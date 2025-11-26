import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ onFinish }) {
  const greetings = [
    "Selamat Datang",
    "Welcome",
    "Bienvenido",
    "Bienvenue",
    "Willkommen",
    "Benvenuto",
    "欢迎",
    "ようこそ",
    "환영합니다",
    "أهلاً وسهلاً",
    "Добро пожаловать",
    "स्वागत है",
    "ברוך הבא",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 < greetings.length ? prev + 1 : prev
      );
    }, 1000); // 1 detik per kata

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setShow(false);
      if (onFinish) onFinish();
    }, greetings.length * 1000 + 1000); // total durasi ~14 detik

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [greetings.length, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ backgroundColor: "#000" }} // tirai hitam
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold text-white text-center px-4 absolute"
            >
              {greetings[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
