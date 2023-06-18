import React from "react";
import MTSlides from "./component/MTSlides";
import CandyCrushSlides from "./component/CandyCrushSlides";
import CalSlide from "./component/Calender";
import DMSlides from "./component/Dialogs&Motivation";
import DLBSlides from "./component/DotLine&Boxe";
import ECSlides from "./component/E-Commerece";
import ITPSlides from "./component/IndianTravelingPlace";
import SQLW from "./component/SQLWebsite";
import WA from "./component/WeatherApp";

// for laptop devices
// console.log(window.innerHeight=714+" "+window.innerWidth=1536)

function App() {
  let cnt = 0;
  let width = 500*1.5;
  let height = 300*1.5;
  const projectArr = [CandyCrushSlides, MTSlides, CalSlide,DMSlides,DLBSlides,ECSlides, ITPSlides, SQLW, WA ];

  // for laptop devices
  window.addEventListener("scroll", function (e) {
    const cards = document.getElementsByClassName("cards");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.transform = `translate(${
        -Math.floor(window.scrollY) * 6.4
      }px,
        ${-Math.floor(window.scrollY) * 3.2}px)`;
    }
  });

  return (
    <div className="text-4xl cards">
      {projectArr.map((Element,i) => {
        return (
          <Element
            key={i}
            className="cards rounded-3xl border-red-800 border-4"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              position: "relative",
              left: `${width * cnt++}px`,
              borderRadius:'25px',
              backgroundColor: `rgb(${Math.floor(
                Math.random() * 255
              )} ${Math.floor(Math.random() * 255)} ${Math.floor(
                Math.random() * 255
              )})`
            }}
          />);
      })}
      
    </div>
  );
}

export default App;

// // for phone devices
// // console.log(window.innerHeight=714+" "+window.innerWidth=1536)

// function App() {
//   let cnt = 0;
//   let width = 125;
//   let height = 222;
//   let arr = [];
//   for (let i = 0; i <= 20; i++) {
//     arr[i] = i;
//   }

//   window.addEventListener("scroll", function (e) {
//     const cards = document.getElementsByClassName("cards");
//     for (let i = 0; i < cards.length; i++) {
//       cards[i].style.transform = `translate(${
//         -Math.floor(window.scrollY) * 1.1
//       }px,
//         ${-Math.floor(window.scrollY)}px)`;
//       console.log(-Math.floor(window.scrollY));
//     }
//   });

//   return (
//     <div className="text-4xl">
//       {arr.map((el) => {
//         return (
//           <div
//             key={el}
//             className="cards"
//             style={{
//               width: `${width}px`,
//               height: `${height}px`,
//               position: "relative",
//               left: `${width * cnt++}px`,
//               transform: "translate(",
//               backgroundColor: `rgb(${Math.floor(
//                 Math.random() * 255
//               )} ${Math.floor(Math.random() * 255)} ${Math.floor(
//                 Math.random() * 255
//               )})`
//               // top: "40px"
//             }}
//           >
//             hello {el}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;
