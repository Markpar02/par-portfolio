import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">On-the-Job Training (OJT)</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="OJT Intern - Front-end Developer"
            subTitle="Eonbotz Technologies - (2025 - Present)"
            result="Davao, Philippines"
            des="Assisting in the development of front-end components for web and mobile applications. Gaining hands-on experience with React, CSS, and JavaScript in real-world projects."
          />
          <ResumeCard
            title="OJT Intern - Web Development"
            subTitle="Eonbotz Technologies - (2024)"
            result="Davao, Philippines"
            des="Collaborating with senior developers to create dynamic and responsive websites. Focus on improving UI/UX and debugging existing web pages."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
