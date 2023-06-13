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

const candyImages = [candyPage1, candyPage2, candyPage3, candyPage4];
const MTImages = [MTPage1, MTPage2, MTPage3, MTPage4, MTPage5, MTPage6, MTPage7, MTPage8, MTPage9,MTPage10, MTPage11, MTPage12];

// for laptop devices
// console.log(window.innerHeight=714+" "+window.innerWidth=1536)

function App() {
  let cnt = 0;
  let width = 512*1.5;
  let height = 238*1.5;
  let arr = [];
  for (let i = 0; i <= 20; i++) {
    arr[i] = i;
  }

  // for laptop devices
  window.addEventListener("scroll", function (e) {
    const cards = document.getElementsByClassName("cards");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.transform = `translate(${
        -Math.floor(window.scrollY) * 6.4
      }px,
        ${-Math.floor(window.scrollY) * 2}px)`;
      console.log(-Math.floor(window.scrollY));
    }
  });

  return (
    <div className="text-4xl">
      {arr.map((el,i) => {
        return (
          <div
            key={el}
            className="cards relative rounded-3xl"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              left: `${width * cnt++}px`,
              transform: "translate(",
              backgroundColor: `rgb(${Math.floor(
                Math.random() * 255
              )} ${Math.floor(Math.random() * 255)} ${Math.floor(
                Math.random() * 255
              )})`
            }}
          >
            hello {el}
            <img src={MTImages[i]}  className="h-[90%] w-[100%]"></img>
          </div>
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
