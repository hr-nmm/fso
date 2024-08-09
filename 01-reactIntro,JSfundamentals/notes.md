# a. Introduction to React

## Vite-

- https://vitejs.dev/

## React-

- https://react.dev/learn

## Roadmap -

- https://roadmap.sh/react

- Learning sequence react => next.js => react-native.

### React Road map:

- 1. Try to write apps vanilla way
- 2. Understand reconciliation: react under the hood
- 3. Components, state , rendering and props
- 4. Hooks
- 5. Create custom hooks
- 6. Prop drilling, context API and suspense API
- 7.  State Management tools like redux
- 8. Routing
- 9. Stying
- 10. Tailwind (CSS framework)
- 11. Vite => history and why it is used
- 12. Performance : you can write forms in extremely slow, use tools like react-hook-forms or formik
- 13. Testing

## first react application

- npm 7+, extra double-dash is needed:
- npm create vite@latest part1 -- --template reactcopy
- cd part1
- npm installcopy
- The application is started as follows: - npm run dev

## some notes

- jsx is the templating lang used here, not html
- jsx tags nedd to be closed: <br /> istead of <br>
- Console should always be open.
- First letter of React component names must be capitalized
- content of a React component (usually) needs to contain one root element either <div> or fragments.

## do not render objects

- the application tries to render objects and it fails again. The code tries to render the information of one friend as follows

- <p>{friends[0]}</p> and this causes a problem because the item to be rendered in the braces is an object.

- { name: 'Peter', age: 4 }
- In React, the individual things rendered in braces must be primitive values, such as numbers or strings.

# b. JavaScript

## Transpilation and runtime environment

- Browsers do not yet support all of JavaScript's newest features, so code run in browsers has been transpiled from a newer version of JavaScript to an older(compatible one) using Babel.

- Node.js is a JavaScript runtime environment based on Google's Chrome V8 JavaScript engine and works practically anywhere - from servers to mobile phones.

## Variables

- const declaration ensures the immutability of the reference itself, not the data it points to.
  eg, changing furniture, while the address of the house remains the same.

## Arrays

- arr.forEach(callback_function)
- React style is functional+declarative => use always immutable objects. eg: arr2 = arr1.concat(element) instead of arr1.push(element)

- use of map is common => arr2 = arr1.map(val => val\*2)

- destructuring assignment is like tuple unpacking

## Objects

- https://javascript.info/object

## Object methods and this

- use of react hooks instead of object methods and classes(blueprint)
- use of arrow functions instead of declaration and expression

- When calling the method through a reference, the value of this becomes the so-called global object and the end result is often not what the software developer had originally intended.

- The value of this in JavaScript is defined based on how the method is being called. When setTimeout is calling the method, it is the JavaScript engine that actually calls the method and, at that point, this refers to the global object. eg: setTimeout(callback_func,time)

- preserve original "this" by bind method

# c. Component State and Event Handlers

## Component helper functions

- defining functions within functions is a commonly-used technique.

## Destructuring on the Component 1st parameter (props) replacement

- const Hello = ({ name, age }) => {
  COMPONENT BODY
  }

## Page re-rendering

- use of set Inerval with refreh function to render no of times refreshed

## Stateful Components (follow ./stateful-components)

- useState(0) function call adds state to the component
- `counter` renders it initialized with the value zero
- `setCounter` is assigned a function that will be used to modify the state.

- When the state modifying function setCounter is called, React re-renders the component(in which usestate() was invoked) which means that the function body of the component function gets re-executed

## Event Handling

- An event handler is supposed to be either a function or a function reference
