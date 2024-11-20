"use client";
import { useEffect, useState } from "react";
import styles from "./ChangeText.module.css";
import { changingTexts } from "@/lib/changingText";

const ChangeText = () => {
  const [animation, setAnimation] = useState(false);
  const text = changingTexts;
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation(true);
      setTextIndex((prevText) => (prevText + 1) % changingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`h-screen w-screen text-white bg-gray-700 flex justify-center items-center p-10 font-mono relative`}
    >
      <section className='w-1/2 text-4xl s_lg:text-6xl s_wide:text-8xl flex flex-col justify-center items-center relative'>
        <h1 className={`${styles.sliding} ${animation ? `${styles.moving}` : ""}`}>
          {text[textIndex][0]}
        </h1>
        <h1 className={`${styles.sliding} ${animation ? `${styles.moving}` : ""}`}>
          {text[textIndex][1]}
        </h1>
        <h1 className={`${styles.sliding} ${animation ? `${styles.moving}` : ""}`}>
          {text[textIndex][2]}
        </h1>
      </section>
    </div>
  );
};

export default ChangeText;