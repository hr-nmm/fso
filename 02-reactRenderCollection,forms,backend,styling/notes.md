# a. Introduction to React

## JS arrays

- React devs use functional programming operators of the JavaScript array, such as find, filter, and map - all of the time.
- reduce is most important can transform array to objects or reduce them to nos., indexes, etc.
- https://www.youtube.com/watch?v=1DMolJ2FrNY&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=4

## Rendering Collections

- store data in main.js
- <ul>
        {notes.map((note) => (
          <li key={note.id}> {note.content}</li>
        ))}
  </ul>
- above map's each return statement is executed
- Warning: Each child in a list should have a unique "key" prop.
- Keys tell React which array item each component corresponds to and how to update the view generated by a component when the component is re-rendered.

- Index as a key is an anti-pattern and is not recommended, eg =>
<ul> {notes.map((note,i) => <li key={i}>{note.content} </li>)} </ul>

## Refactoring modules

- https://dev.to/itswillt/folder-structures-in-react-projects-3dp8

## Misc

- Note that if you copy a project from one place to another, you might have to delete the node_modules directory and install the dependencies again with the command npm install before you can start the application.

- props being wrong data type is a common error. Print console.log(props)

# b. Forms(see ./02-../b-forms)

## event handler function for submit

- (event) parameter is the event that triggers the call to the event handler function.
- event.preventDefault() method prevents the default action of submitting a form.
- event.target => event of the target HTML element.

## How do we access the data contained in the form's input element?

- This method is Controlled Components (https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable) => controlling-an-input-with-a-state-variable

- this method handles {onsubmit} and {onChange}

## Filtering displayed elements using state

- use of ternary operator to assign notesToShow
- a button to change state on clicking + and that state determines notesToshow

# c. getting data from server

- JSON server(https://github.com/typicode/json-server) => acts as a fake REST API.
- npm install -g json-server(global installation)
- json-server --port 3001 --watch db.json
- npx json-server --port 3001 --watch db.json(if package in local)

## Multi-threading JS

- https://www.youtube.com/watch?v=8aGhZQkoFbQ
- https://medium.com/techtrument/multithreading-javascript-46156179cf9a
- setTimeout(callbackFn, 0) called with zero seconds behaves as defer coz event loop's job is to look at the stackand look at the task queue.

## npm

- will be using the json-react to act as our server=>(installed as a development dependency)
- will be using the axios library for communication between the browser and server=>(installed as a runtime dependency)
- all JavaScript projects are defined using the node package manager, aka npm. It is pypy for JS. It has package.json file located at the root of the project.

- npm install commmand downloads the dependency/librarries code into node_modules.
- npm install json-server --save-dev (development dependency (only used during development))
- "server": "json-server -p3001 --watch db.json" in scripts of package.json => replacement command (npm run server)

## axios and promises

- axios - makes XMLHTTPRequest from browser and HTTP request from nodejs server.
- axios's method get returns a promise with one of 3 possible states:pending fulfilled rejected.

## Effects Hooks

- Effects let a component connect to and synchronize with external systems. This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.
- useEffect 2params : 1st effect istelf, 2nd
- By default, effects run after every completed render, but you can choose to fire it only when certain values have changed.
- useEffect is executed after 1st render of main components.
- useEffect run after every completed render, but you can choose to fire it only when certain values have changed.
- The second parameter of useEffect is used to specify how often the effect is run. If the second parameter is an empty array [], then the effect is only run along with the first render of the component.

## DEVELOPMENT RUNTIME ENVIRONMENT

![Design](https://fullstackopen.com/static/0e3766361ce9d08f0c4fdd39152cf493/5a190/18e.png)

- The JavaScript code making up our React application is run in the browser. The browser gets the JavaScript Code (in the form of one big file which can be understood by the browser) from the React dev server(npm run dev wala).

- React application running in the browser fetches the JSON formatted data from json-server running on port 3001 on the machine. The server we query the data from - json-server - gets its data from the file db.json.

# d. Altering data in server

## REST API

- In REST, individual data objects are called resources(with unique URL).
- In json-server, an individual note exists at the resource URL notes/3, where 3 is the id of the resource.
- axios.put(url, changedNote).then((response) => {
  setNotes(notes.map((n) => (n.id !== id ? n : response.data)));
  });
- the above map trick is common pattern

## Extracting Communication with the Backend into a Separate Module

- src/services directory => notes.js
- The functions of the module can be used directly with the imported variable noteService with:
  1. export default {object of funcs} from src/services/notes.js
  2. funcs can be used as noteService.funcName
  3. import noteService from './services/notes'

## Promises and Errors

- chaining of promises: https://javascript.info/promise-chaining
- errors are handles using catch and finally

# e. Styling React App (see d-AlterDataInServer)

- CSS preprocessor: program that lets you generate CSS from the preprocessor's own unique syntax., eg: tailwind, materialUI, sass,bootstrap, etc.
- either install css compiler on web server or Or use the CSS preprocessor to compile on the development environment, and then upload compiled CSS file to the web server.

- In React we have to use the "className" attribute instead of the class attribute.

- while INLINE STYLE:=> Every CSS propertyin REACT is defined as a separate property of the JavaScript object and camelCase instead of kebab-case

## Couple of important Remarks

1. null

- state should store "null" initially not empty array or string.
- but if we use initial value we get typeError: can't read properties of null
- problem is that the effect is executed only after the first render.
- Solution: comnditional rendering=> if (!notes) return null; before App component returns

2. 2nd paramenter of useEffect (see ./currencyAPI)

- the second parameter is an empty array [], its content never changes and the effect is only run after the first render of the component. This is exactly what we want when we are initializing the app state from the server.
- The useEffect hook now has [currency] as the second parameter. The effect function is therefore executed after the first render, and always after the table as its second parameter [currency] changes
