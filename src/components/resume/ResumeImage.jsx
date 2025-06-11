import React from 'react';
import ParCV from '../assets/ParCV.pdf.jpg';

const ResumeImage = () => {
  return (
    <section className="w-full py-20 flex justify-center">
      <img
        src={ParCV}
        alt="Resume Preview"
        className="w-full max-w-4xl rounded-lg shadow-lg"
      />
    </section>
  );
};

export default ResumeImage;
