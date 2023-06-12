import { useEffect } from "react";

function App() {
  let width = 150;
  let height = 150;
  let arr = [];
  for (let i = 0; i <= 20; i++) {
    arr[i] = i;
  }

  window.addEventListener("scroll", function(e){
    const cards = document.getElementsByClassName("cards");
    for(let i=0; i<cards.length; i++){
      cards[i].style.left = `${i*width}px`
      console.log(cards[i])
    }
  })

  return (
    <div className="text-4xl">
      {arr.map((el) => {
        return (
          <div
            key={el}
            className="cards"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              position:"relative",
              backgroundColor: `rgb(${Math.floor(
                Math.random() * 255
              )} ${Math.floor(Math.random() * 255)} ${Math.floor(
                Math.random() * 255
              )})`,
              top: "40px"
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
