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
      {arr.map((el) => {
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
