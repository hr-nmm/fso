import Course from "./components/course.jsx";

const App = ({ courses }) => {
  return (
    <>
      <h1>Course Information</h1>
      <Course courses={courses} />
    </>
  );
};

export default App;
