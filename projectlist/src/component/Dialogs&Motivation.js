// for sliding image in React + tailwind => https://www.youtube.com/watch?v=tXlZCW26bto

import React, { useState } from 'react';
// npm install react-icons --save => run this command to add icons in React project
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

// MT => Match-Trio
import DMPage1 from "../images/Dialogs&Motivation/Page1.png";
import DMPage2 from "../images/Dialogs&Motivation/Page2.png";
import DMPage3 from "../images/Dialogs&Motivation/Page3.png";
import DMPage4 from "../images/Dialogs&Motivation/Page4.png";

function Slides(props) {
  const slides = [{url: DMPage1},{url: DMPage2},{url: DMPage3},{url: DMPage4}]
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='m-auto py-16 group' style={props.style}>
      <div
        style={{ backgroundImage: `url(${ slides[currentIndex].url})`, width:'75%' }}
        className='w-full h-full relative left-[13%] rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slides;