import React from "react";
import MatchTrio from "./component/MatchTrio";
import CandyCrush from "./component/CandyCrush";


import candyPage1 from "./images/CandyCrushImages/Page1.png";
import candyPage2 from "./images/CandyCrushImages/Page2.png";
import candyPage3 from "./images/CandyCrushImages/Page3.png";
import candyPage4 from "./images/CandyCrushImages/Page4.png";

// MT => Match-Trio
import MTPage1 from "./images/MatchTrioImages/Page1.png";
import MTPage2 from "./images/MatchTrioImages/Page2.png";
import MTPage3 from "./images/MatchTrioImages/Page3.png";
import MTPage4 from "./images/MatchTrioImages/Page4.png";
import MTPage5 from "./images/MatchTrioImages/Page5.png";
import MTPage6 from "./images/MatchTrioImages/Page6.png";
import MTPage7 from "./images/MatchTrioImages/Page7.png";
import MTPage8 from "./images/MatchTrioImages/Page8.png";
import MTPage9 from "./images/MatchTrioImages/Page9.png";
import MTPage10 from "./images/MatchTrioImages/Page10.png";
import MTPage11 from "./images/MatchTrioImages/Page11.png";
import MTPage12 from "./images/MatchTrioImages/Page12.png";

// for laptop devices
// console.log(window.innerHeight=714+" "+window.innerWidth=1536)

function App() {
  let cnt = 0;
  let width = 500*1.5;
  let height = 230*1.5;
  const projectArr = [CandyCrush, MatchTrio ];
  const projectObj = [{
    MatchTrio:[{url: MTPage1},{url: MTPage2},{url: MTPage3},{url: MTPage4},{url: MTPage5},{url: MTPage6},{url: MTPage7},{url: MTPage8},{url: MTPage9},{url: MTPage10},{url: MTPage11},{url: MTPage12}]
  },{
    CandyCrush:[{url: candyPage1},{url: candyPage2},{url: candyPage3},{url: candyPage4}]
  }];

  // for laptop devices
  // window.addEventListener("scroll", function (e) {
  //   const cards = document.getElementsByClassName("cards");
  //   // for (let i = 0; i < cards.length; i++) {
  //     cards[0].style.transform = `translate(${
  //       -Math.floor(window.scrollY) * 6.4
  //     }px,
  //       ${-Math.floor(window.scrollY) * 2}px)`;
  //   // }
  // });

  let styleObj ={
    width: `${width}px`,
    height: `${height}px`,
    left: `${width * cnt++}px`,
    backgroundColor: `rgb(${Math.floor(
      Math.random() * 255
    )} ${Math.floor(Math.random() * 255)} ${Math.floor(
      Math.random() * 255
    )})`
  }

  return (
    <div className="text-4xl cards">
      {projectArr.map((Element,i) => {
        console.log(<Element />)
        return (
          <Element
            arr={projectObj[i][Object.keys(projectObj[i])] }
            key={i}
            className=" relative rounded-3xl border-red-800 border-4"
            
            // style={{
            //   width: `${width}px`,
            //   height: `${height}px`,
            //   left: `${width * cnt++}px`,
            //   backgroundColor: `rgb(${Math.floor(
            //     Math.random() * 255
            //   )} ${Math.floor(Math.random() * 255)} ${Math.floor(
            //     Math.random() * 255
            //   )})`
            // }}
            style = {styleObj}
          />
        
        );
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
