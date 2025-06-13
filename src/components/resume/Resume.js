import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from "./Experience";
import resumePdf from '../../assets/resume.pdf'; // Import your PDF file

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  return (
    <section id="resume" className="w-full py-10 md:py-20 border-b border-b-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="" des="My Resume" />
      </div>

      {/* Horizontal scrollable tabs */}
      <div className="overflow-x-auto">
        <ul className="flex gap-4 px-4 md:px-0 whitespace-nowrap">
          <li
            onClick={() => {
              setEducationData(true);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(false);
            }}
            className={`min-w-[150px] text-center px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ${
              educationData ? "bg-designColor text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Education
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(true);
              setExperienceData(false);
              setAchievementData(false);
            }}
            className={`min-w-[150px] text-center px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ${
              skillData ? "bg-designColor text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(true);
              setAchievementData(false);
            }}
            className={`min-w-[150px] text-center px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ${
              experienceData ? "bg-designColor text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Experience
          </li>
          <li
            onClick={() => {
              setEducationData(false);
              setSkillData(false);
              setExperienceData(false);
              setAchievementData(true);
            }}
            className={`min-w-[150px] text-center px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ${
              achievementData ? "bg-designColor text-white shadow-md" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {/* Resume content */}
      <div className="mt-12 px-4 md:px-0">
        {educationData && <Education />}
        {skillData && <Skills />}
        {achievementData && <Achievement />}
        {experienceData && <Experience />}
      </div>

      {/* Download CV Button */}
      <div className="mt-12 flex justify-center">
        <a
          href={resumePdf}
          download="My_Resume.pdf"
          className="bg-designColor text-white px-6 py-2 rounded-md shadow-md hover:bg-opacity-90 transition duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Resume;
