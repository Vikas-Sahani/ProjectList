import './App.css';

function App() {
  let arr=[]
  for(let i=0; i<=20; i++){
    arr[i] = i;
  }
  window.addEventListener("scroll", function(e){
    console.log(e);
  })
  return (
    <div className="text-4xl"> 
    {arr.map(el => {
      return (<div
        key={el}
        id="6"
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: `rgb(${Math.floor(
            Math.random() * 255
          )} ${Math.floor(Math.random() * 255)} ${Math.floor(
            Math.random() * 255
          )})`,
          top: "40px"
        }}
        onScroll={function (event) {
          console.log(event);
        }}
      >
        hello {el}
      </div>)
       })}
    </div>
  );
}

export default App;
