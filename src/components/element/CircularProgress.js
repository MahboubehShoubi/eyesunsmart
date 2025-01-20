import React, { useState, useEffect } from "react";

const CircularProgress = ({
  size,
  strokeWidth,
  progress,
  duration,
  color,
  bgColor,
}) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(0); // تغییر مقدار اولیه به 0

  useEffect(() => {
    let start = 0;
    const increment = progress / ((duration * 1000) / 16); // مقدار افزایش برای هر فریم (16ms)
    const interval = setInterval(() => {
      start += increment;
      if (start >= progress) {
        setDisplayProgress(progress);
        setOffset((progress / 100) * circumference); // معکوس کردن جهت
        clearInterval(interval);
      } else {
        setDisplayProgress(Math.ceil(start));
        setOffset((start / 100) * circumference); // معکوس کردن جهت
      }
    }, 16);

    return () => clearInterval(interval);
  }, [progress, duration, circumference]);

  return (
    <div
      className="relative flex justify-center items-center"
    >
      <svg width={size} height={size} className="block mx-auto">
        {/* دایره پس‌زمینه */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
          className="stroke-gray-300"
        />

        {/* دایره جلوه انیمیشنی */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - offset} // معکوس کردن جهت
          style={{
            transition: "stroke-dashoffset 16ms ease-in-out",
            transform: "rotate(-90deg)", // چرخاندن انیمیشن 90 درجه
            transformOrigin: "50% 50%", // چرخش حول مرکز دایره
          }}
          strokeLinecap="round" // لبه گرد
        />
      </svg>

      {/* متن مقدار درصد */}
      <div className="absolute text-[2rem] font-bold text-primaryBlue">
        {`${displayProgress}%`}
      </div>
    </div>
  );
};

export default CircularProgress;
