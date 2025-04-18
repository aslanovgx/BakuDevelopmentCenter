import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Modal = ({ isOpen, onClose, instructor, salimovSlider }) => {
  if (!isOpen || !instructor) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-black text-xl"
        >
          ✖
        </button>

        <h2 className="text-xl font-bold mb-2">{instructor.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{instructor.role}</p>
        <p className="text-sm text-gray-500 mb-4">{instructor.experience}</p>

        {instructor.type === "image" && (
          <img src={instructor.image} alt={instructor.name} className="w-full rounded" />
        )}

        {instructor.type === "video" && instructor.videoUrl && (
          <div className="aspect-video">
            <iframe
              src={instructor.videoUrl}
              className="w-full h-full rounded"
              allowFullScreen
            />
          </div>
        )}

        {instructor.type === "slider" && (
          <Swiper {...salimovSlider.portfolioItems}>
            {instructor.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt="slide" />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {instructor.type === "external" && (
          <a href={instructor.externalUrl} target="_blank" className="text-blue-500 underline mt-2 inline-block">
            Xarici linkə bax
          </a>
        )}
      </div>
    </div>
  );
};

export default Modal;
