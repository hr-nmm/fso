import { useState } from "react";

// Components
const Heading = ({ text }) => {
  return <h2>{text}</h2>;
};
const Button = ({ clickHandler, text }) => {
  return <button onClick={clickHandler}> {text}</button>;
};

const Stat = ({ stat, value }) => {
  return (
    <tr>
      <td> {stat}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ state }) => {
  if (state.good === 0 && state.bad === 0 && state.neutral === 0) {
    return <p>No Feedback Given</p>;
  }
  return (
    <>
      <table>
        <tr>
          <th>Stat</th>
          <th>Data</th>
        </tr>
        <Stat stat={"Good"} value={state.good} />
        <Stat stat={"Neutral"} value={state.neutral} />
        <Stat stat={"Bad"} value={state.bad} />
        <Stat stat={"All"} value={state.bad + state.good + state.neutral} />
        <Stat
          stat={"Average"}
          value={
            (state.good - state.bad) / (state.bad + state.good + state.neutral)
          }
        />
        <Stat
          stat={"Positive"}
          value={
            (state.good * 100) / (state.bad + state.good + state.neutral) + "%"
          }
        />
      </table>
    </>
  );
};

// Main
const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const handleClick = (choice) => {
    return choice == "good"
      ? setState({ ...state, good: state.good + 1 })
      : choice == "bad"
      ? setState({ ...state, bad: state.bad + 1 })
      : choice == "neutral"
      ? setState({ ...state, neutral: state.neutral + 1 })
      : null;
  };

  return (
    <>
      <Heading text={"Give Feedback"} />
      <Button clickHandler={() => handleClick("good")} text={"Good"} />
      <Button clickHandler={() => handleClick("neutral")} text={"Neutral"} />
      <Button clickHandler={() => handleClick("bad")} text={"Bad"} />
      <Heading text={"Statistics"} />
      <Statistics state={state} />
    </>
  );
};
export default App;
