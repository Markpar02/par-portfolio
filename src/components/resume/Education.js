import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020-2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="College"
            subTitle="Holy Cross Of Davao College "
            des="College education provides training to equip individuals with the knowledge and skills needed to work in various sectors of the economy or cultural fields."
          />
          <ResumeCard
            title="Senior HighScool"
            subTitle="University of Immaculate Conception."
            des="Secondary education is the stage following primary education and before tertiary education. 
            It includes middle and high school levels, focusing on developing students' knowledge and skills in preparation for higher education, vocational training, or entering the workforce."
          />
          <ResumeCard
            title="High School"
            subTitle="Our Lady of Fatima Academy of Davao,Inc."
            des="High school education covers the final phase of secondary education, 
            as defined by the International Standard Classification of Education, 
            preparing students for further education or entry into the workforce."
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Education;
