// for sliding image in React + tailwind => https://www.youtube.com/watch?v=tXlZCW26bto

import React, { useState } from 'react';
// npm install react-icons --save => run this command to add icons in React project
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

// MT => Match-Trio
import ITPPage1 from "../images/IndianTravelingPlaces/Page1.png";
import ITPPage2 from "../images/IndianTravelingPlaces/Page2.png";
import ITPPage3 from "../images/IndianTravelingPlaces/Page3.png";
import ITPPage4 from "../images/IndianTravelingPlaces/Page4.png";
import ITPPage5 from "../images/IndianTravelingPlaces/Page5.png";
import ITPPage6 from "../images/IndianTravelingPlaces/Page6.png";
import ITPPage7 from "../images/IndianTravelingPlaces/Page7.png";
import ITPPage8 from "../images/IndianTravelingPlaces/Page8.png";


function Slides(props) {
  const slides = [{url: ITPPage1},{url: ITPPage2},{url: ITPPage3},{url: ITPPage4},{url: ITPPage5},{url: ITPPage6},{url: ITPPage7},{url: ITPPage8}]
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