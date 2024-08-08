// file App.jsx now defines a React component with the name "App".
const Hello = (props) => {
  console.log(props);
  const firstName = props.name;
  return (
    // use of fragments - wrapping the elements to be returned by the component with an empty element
    <>
      <h2>
        this is a separate component named "hello"(with props) for{" "}
        {firstName.charAt(0).toUpperCase() + firstName.slice(1)}, {props.age}
      </h2>
    </>
  );
};

const App = () => {
  console.log(`first this "hello-world will run"`);
  const now = new Date();
  const num1 = 1,
    num2 = 2;
  const cricketer = "kohli";
  return (
    <>
      <p>Hello world, it is {now.toString()}</p>
      <ul>
        <li>uno is {num1}</li>
        <li>dos is {num2}</li>
        <li>their sum is {num1 + num2} </li>
      </ul>
      <div>
        <Hello name="kobe" age="24" />
        <Hello name="durant" age="35" />
        <Hello name={cricketer} age="23" />
      </div>
    </>
  );
};

export default App;
// We have defined a new component Hello and used it inside the component App. Naturally, a component can be used multiple times:
