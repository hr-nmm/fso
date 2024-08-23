# a. NodeJS and ExpressJS

## Simple Web Server

- npm is a tool for managing JS packages like pypy.
- npm init => for generating package.json at root.

- 1. import 2. create web server 3. eventhandler 4. bind to port
- require("http") => is like import for node's built-in library(web server module) => browser:server :: import:require
- createServer method of the http module => creates a new web-server
- An event handler is registered to the server that is called every time an HTTP request is made to the server's address http://localhost:3001.
- The last rows bind the http-server(assigned to the app variable)to port 3001, so that it can listen to HTTP requests sent to port3001.

## Express

- transitive dependencies: https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/
- The first request parameter contains all of the information of the HTTP request, and the second response parameter is used to define how the request is responded to.
- It's worth noting that JSON is a string and not a JavaScript object like the value assigned to notes.

- nodemon(dev-dependency) will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application.
- "scripts"{"dev": "nodemon index.js",}

## REST

- https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm
- REST is not limited to web-applications
- https://martinfowler.com/articles/richardsonMaturityModel.html

## Fetching single resource

- use request.params and find method of array
- response.status(code) => http code you wanna send
- response.end() => signals no more data will be written

## post request

- use request.body for data content

## receiving data

- using rest-client extension is beter than postman
- To access the data easily, we need the help of the Express json-parser that we can use with the command app.use(express.json())
- to access header of request use response.header

- calling return is crucial in POST because otherwise the code will execute to the very end and the malformed note gets saved to the application.

## About HTTP request types

- 1. Safety(GET and HEAD) methods SHOULD NOT have the significance of taking an action other than retrieval.
- HEAD returns the status code and response headers. The response body will not be returned when you make a HEAD request.
- 2. Idempotance(GET, HEAD, PUT, and DELETE) - if a request does not generate side effects, then the result should be the same regardless of how many times the request is sent.
- POST - is neither safe nor idempotent.

## Middleware

- Middleware are functions that can be used for handling request and response objects. eg, express json-parser.
- The json-parser we used earlier takes the raw data from the requests that are stored in the request object, parses it into a JavaScript object and assigns it to the request object as a new property body.
- middlewares are executed one by one in the order that they were listed in the application code.
- Middleware is a function that receives three parameters req,res,next
- At the end of the function body, the next function that was passed as a parameter is called. The next function yields control to the next middleware. Middleware is used like this: => app.use(requestLogger)
- Middleware functions have to be used before ROUTES when we want them to be executed by the route event handlers. Sometimes, we want to use middleware functions after routes. We do this when the middleware functions are only called if no route handler processes the HTTP request.

# b. Deployment

## Same origin policy & CORS

- a url(http://example.com:80/index.html) consists of 4 things: protocol(http), host(example.com), port(80), route(/index.html)
- if resource(image,etc) is from another serverthen, Browser checks Access-Control-Allow-origin response header to be _. if _, then browser process the response else throw error.
- to enable cross-origin requestsby a mechanism (CORS: Cross-origin resource sharing ) => We can allow requests from other origins by using Node's cors middleware

## Application to the internet

- const PORT = process.env.PORT || 3001; =>using the port defined in the environment variable PORT or port 3001 if the environment variable PORT is undefined
-
