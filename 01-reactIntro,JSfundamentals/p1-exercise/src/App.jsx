const Header = (props) => {
  console.log(props);
  console.log(typeof props);
  return <h1>{props.heading}</h1>;
};

const Content = (props) => {
  const lst = props.parts;
  const Part = (props) => {
    return (
      <p>
        {props.pName} {props.exName}
      </p>
    );
  };

  return (
    <>
      <Part pName={lst[0].name} exName={lst[0].exercises}></Part>
      <Part pName={lst[1].name} exName={lst[1].exercises}></Part>
      <Part pName={lst[2].name} exName={lst[2].exercises}></Part>
    </>
  );
};

const Total = (props) => {
  const lst = props.parts;
  let total = 0;
  lst.forEach((element) => {
    total += element.exercises;
  });
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header heading={course.name}></Header>
      <Content parts={course.parts}> </Content>

      <Total parts={course.parts}></Total>
    </>
  );
};

export default App;
