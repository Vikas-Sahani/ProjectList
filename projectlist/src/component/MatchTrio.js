// for sliding image in React + tailwind => https://www.youtube.com/watch?v=tXlZCW26bto

import React, { useState } from 'react';
// npm install react-icons --save => run this command to add icons in React project
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

// MT => Match-Trio
import MTPage1 from "../images/MatchTrioImages/Page1.png";
import MTPage2 from "../images/MatchTrioImages/Page2.png";
import MTPage3 from "../images/MatchTrioImages/Page3.png";
import MTPage4 from "../images/MatchTrioImages/Page4.png";
import MTPage5 from "../images/MatchTrioImages/Page5.png";
import MTPage6 from "../images/MatchTrioImages/Page6.png";
import MTPage7 from "../images/MatchTrioImages/Page7.png";
import MTPage8 from "../images/MatchTrioImages/Page8.png";
import MTPage9 from "../images/MatchTrioImages/Page9.png";
import MTPage10 from "../images/MatchTrioImages/Page10.png";
import MTPage11 from "../images/MatchTrioImages/Page11.png";
import MTPage12 from "../images/MatchTrioImages/Page12.png";


function Slides(props) {
  const slides =[{url: MTPage1},{url: MTPage2},{url: MTPage3},{url: MTPage4},{url: MTPage5},{url: MTPage6},{url: MTPage7},{url: MTPage8},{url: MTPage9},{url: MTPage10},{url: MTPage11},{url: MTPage12}];

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
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group' style={props.styleObj}>
      <div
        style={{ backgroundImage: `url(${ 
          slides[currentIndex].url
          
        })` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
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