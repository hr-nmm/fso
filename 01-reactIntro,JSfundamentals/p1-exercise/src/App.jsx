const Header = (props) => {
  return <h1>{props.heading}</h1>;
};

const Content = (props) => {
  const Part = (props) => {
    return (
      <p>
        {props.pName} {props.exName}
      </p>
    );
  };

  return (
    <>
      <Part pName={props.p1} exName={props.e1}></Part>
      <Part pName={props.p2} exName={props.e2}></Part>
      <Part pName={props.p3} exName={props.e3}></Part>
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <Header heading={course}></Header>
      <Content
        p1={part1}
        p2={part2}
        p3={part3}
        e1={exercises1}
        e2={exercises2}
        e3={exercises3}
      >
        {" "}
      </Content>

      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      ></Total>
    </>
  );
};

export default App;
