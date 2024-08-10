import { useState } from "react";
// Part-1
// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>left</button>
//       <button onClick={() => setRight(right + 1)}>right</button>
//       {right}
//     </div>
//   );
// };

// Part-2
// const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0,
//   });

//   const handleLeftClick = () => {
//     setClicks({
//       ...clicks,
//       left: clicks.left + 1,
//     });
//   };

//   const handleRightClick = () => {
//     setClicks({
//       ...clicks,
//       right: clicks.right + 1,
//     });
//   };
//   return (
//     <>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </>
//   );
// };

// Part-3: Handling Arrays
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {allClicks.join(" ")}</div>;
};

const Button = ({ btnHandler, text }) => {
  return <button onClick={btnHandler}>{text}</button>;
};

const App = () => {
  console.log("Update State");
  const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
    setAll(allClicks.concat("L"));
    setTotal(total + 1);
  };
  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
    // debugger;
    setAll(allClicks.concat("R"));
    setTotal(total + 1);
  };

  return (
    <>
      {clicks.left}
      <Button btnHandler={handleLeftClick} text={"LEFT"} />
      <Button btnHandler={handleRightClick} text={"RIGHT"} />
      {clicks.right}
      <History allClicks={allClicks} />
    </>
  );
};
export default App;
