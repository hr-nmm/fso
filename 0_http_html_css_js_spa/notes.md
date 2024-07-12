# Fundamentals of web apps(https://studies.cs.helsinki.fi/exampleapp/)

## HTTP protocol

- https://developer.mozilla.org/en-US/docs/Web/HTTP
- TO-DO: learn about http protocol and build a http: client-server model from first principles

## Traditional web applications

- Run application logic in the browser

## Event Handlers and callback functions

- https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
- https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers
- xml api
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseText

## DOM manipulation

- https://en.wikipedia.org/wiki/Document_Object_Model

## CSS

- https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics

## Forms and HTTP POST

- https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form

## Single page application

- https://fullstackopen.com/en/part0/fundamentals_of_web_apps#single-page-app

## EXERCISE : https://github.com/salmanarshad2000/fullstackopen/tree/main/part0

## HTML form - is like <div> and <section> tags

- li is used to structure and style conviniently.
- "for" in label and "id" in input/text-area will be same.
- "value" attrib. is used in input but text-area place holder is text bw open-close tag.
- button types- submit,reset,button(for custom buttons)

- We provide a name attribute for each form control. The names are important on both the client- and server-side; they tell the browser which name to give each piece of data and, on the server side, they let the server handle each piece of data by name. The form data is sent to the server as name/value pairs.

- On the server side, the script at the URL "/my-handling-form-page" will receive the data as a list of 3 key/value items contained in the HTTP request. The way this script will handle that data is up to you. Each server-side language (PHP, Python, Ruby, Java, C#, etc.) has its own mechanism of handling form data.
