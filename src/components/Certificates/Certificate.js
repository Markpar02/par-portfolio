import React, { useState } from 'react';
import Slider from "react-slick";
import { IoClose } from "react-icons/io5";
import Title from '../layouts/Title';

import certificateOne from '../../assets/images/testimonial/certificateOne.png';
import certificateTwo from '../../assets/images/testimonial/certificateTwo.png';
import certificateThree from '../../assets/images/testimonial/certificateThree.png';
import certificateFour from '../../assets/images/testimonial/certificateFour.png';
import certificateFive from '../../assets/images/testimonial/certificateFive.png';


const Certificates = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // 👈 This hides the default next/prev arrows
  };
  
  const certificateItems = [
    { src: certificateOne, title: "" },
    { src: certificateTwo, title: "" },
    { src: certificateThree, title: "" },
    { src: certificateFour, title: "" },
    { src: certificateFive, title: "" },
  ];

  return (
    <section id="certificates" className="w-full py-20 border-b border-black relative">
      <div className="flex justify-center items-center text-center mb-10">
        <Title title="CERTIFICATES" des="My Achievements" />
      </div>

      <div className="max-w-4xl mx-auto relative px-4">
        <Slider {...settings}>
          {certificateItems.map((cert, index) => (
           <div key={index} className="flex items-center justify-center text-center h-[550px]">
           <div className="flex flex-col items-center h-full">
             <div className="w-full max-w-[500px] h-[430px] flex justify-center items-center bg-gray-200 rounded-lg shadow-lg mb-4">
               <img
                 src={cert.src}
                 alt={`Certificate ${index + 1}`}
                 loading="lazy"
                 className="object-contain w-full h-full"
                 onClick={() => openModal(cert.src)}
               />
             </div>
             <h3 className="text-xl font-bold">{cert.title}</h3>
           </div>
         </div>
         


          ))}
        </Slider>
      </div>

      {/* Modal for full image view */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center">
          <button onClick={closeModal} className="absolute top-5 right-5 text-white text-4xl z-50">
            <IoClose />
          </button>
          <img
            src={modalImage}
            alt="Certificate Full"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
