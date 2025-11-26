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

  const [show, setShow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 300); 

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setShow(false);
      if (onFinish) onFinish();
    }, greetings.length * 300 + 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onFinish, greetings.length]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }} // tirai naik ke atas
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{ backgroundColor: "#000" }} // background hitam
        >
          <motion.h1
            key={currentIndex}
            className="text-4xl md:text-6xl font-bold text-white text-center px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }} // lebih cepat
          >
            {greetings[currentIndex]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
