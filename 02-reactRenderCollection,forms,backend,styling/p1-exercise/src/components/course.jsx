const Header = ({ heading }) => {
  return <h2>{heading}</h2>;
};

const Part = ({ pName, exName }) => {
  return (
    <p>
      {pName} {exName}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} pName={part.name} exName={part.exercises}></Part>
      ))}
    </>
  );
};
const Total = ({ parts }) => {
  // let sum = parts.reduce((acc, curr) => (acc += curr.exercises), 0);
  return (
    <p style={{ color: `#ff0505` }}>
      Total exercises ={" "}
      {parts.reduce((acc, curr) => (acc += curr.exercises), 0)}
    </p>
  );
};
const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header heading={course.name}></Header>
            <Content parts={course.parts}> </Content>
            <Total parts={course.parts}></Total>
          </div>
        );
      })}
    </div>
  );
};
export default Course;
