import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaAndroid, FaFigma } from "react-icons/fa";
import { DiSwift } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const TechStacks = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Tech Stack" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {/* Mobile Development */}
        <Card
          title="Mobile Development"
          des="Building cross-platform and native mobile applications for Android and iOS."
          icon={
            <div className="flex gap-0 text-5xl text-designColor"> {/* Increased size to text-5xl */}
              <FaReact title="React Native" />
              <FaAndroid title="Android (Java/Kotlin)" />
              <DiSwift title="Swift (iOS)" />
            </div>
          }
        />

        {/* Web Development */}
        <Card
          title="Web Development"
          des="Creating fast, responsive, and modern web applications using latest web technologies."
          icon={
            <div className="flex gap-0 text-5xl text-designColor"> {/* Increased size to text-5xl */}
              <FaHtml5 title="HTML5" />
              <FaCss3Alt title="CSS3" />
              <FaJs title="JavaScript" />
              <TbBrandNextjs title="Next.js" />
            </div>
          }
        />

        {/* Web Design */}
        <Card
          title="Web Design"
          des="Designing clean and user-friendly UI/UX using modern tools and frameworks."
          icon={
            <div className="flex gap-0 text-5xl text-designColor"> {/* Increased size to text-5xl */}
              <FaFigma title="Figma" />
              <SiTailwindcss title="Tailwind CSS" />
              <FaCss3Alt title="CSS" />
            </div>
          }
        />
      </div>
    </section>
  );
};

export default TechStacks;
