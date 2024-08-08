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
