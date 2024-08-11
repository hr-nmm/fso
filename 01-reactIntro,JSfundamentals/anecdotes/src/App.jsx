// Imports
import { useState } from "react";
// Components
const Heading = ({ text }) => {
  return <h2>{text}</h2>;
};
const Button = ({ clickHandler, value }) => {
  return <button onClick={clickHandler}>{value}</button>;
};
const Display = ({ message }) => {
  return <p>{message}</p>;
};
const App = () => {
  // Data
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  // States
  const [selected, setSelected] = useState(0);
  const [voteState, setVoteState] = useState(Array(8).fill(0));

  // functions
  const mostUpvoted = (arr) => {};

  return (
    <>
      <Heading text={"Anecdote of the Day"} />
      <Display message={anecdotes[selected]} />
      <Display message={`has ${voteState[selected]} votes`} />
      <Button
        clickHandler={() => setSelected(Math.floor(Math.random() * 8) % 8)}
        value={"next anecdote"}
      />
      <Button
        clickHandler={() => {
          const x = [...voteState];
          x[selected] += 1;
          return setVoteState(x);
        }}
        value={"VOTE"}
      />
      <Heading text={"Anecdote with most votes"} />
      <Display
        message={
          anecdotes[
            voteState.reduce((acc, val, index, arr) => {
              return val > arr[acc] ? index : acc;
            }, 0)
          ]
        }
      />
    </>
  );
};
export default App;
