import React from 'react';
import { useNavigate } from 'react-router-dom';
import ParCV from '../../assets/ParCV.pdf.jpg';

const ResumeImage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 flex flex-col items-center gap-6">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
      >
        ← Back
      </button>
      <img
        src={ParCV}
        alt="Resume Preview"
        className="w-full max-w-4xl rounded-lg shadow-lg"
      />
    </section>
  );
};

export default ResumeImage;
