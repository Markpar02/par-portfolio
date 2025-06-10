import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import LogoItemSeeker from '../../assets/images/projects/LogoItemSeeker.png'; // update the path accordingly

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b border-black">
      <div className="flex justify-center items-center text-center mb-10">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>

      <div className="flex justify-center">
      <ProjectsCard
  title="Itemseeker"
  des="A smart home mobile app that uses AI and CCTV footage to help users locate forgotten or misplaced items in their home."
  src={LogoItemSeeker}
  />
      </div>
    </section>
  );
};

export default Projects;
