---
layout: layouts/post.njk
title: Var, Let, and Const in JavaScript
featuredImage: https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png
date: 2023-11-01T12:49:00.000Z
description: ES6 introduced the let and const keywords. In this article I am
  going to explain the differences and when they should be used.
---
## ECMAScript 2015

ECMAScript 2015 (also known as ES6) was the second major revision to JavaScript. It was released in June 2015 and [introduced many new features](https://www.w3schools.com/js/js_es6.asp). Two of these new features are the `let` and `const` keywords. The differences between them comes down to scope, if they can be updated, and how they are hoisted.

## Var
A variable is used for storing data. Since ES6 was released, `var` has now been replaced by `let` and `const` due to their more predictable scoping behavior.

### Scope
If `var` is declared outside of a function, it is 'globally-scoped'. The variable is available for use in the whole window.

If `var` is declared inside a function, it is 'function-scoped'. The variable is available for use only in the function it is declared in.

### Redeclaration and updating
The value of `var` can be redeclared and updated.

```
var x = 'hello';
console.log(x); // Outputs: 'hello'
x = 10;
console.log(x); // Outputs: 10
```

### Hoisting
The declaration (but not the initialisation) of `var` variables are hoisted to the top of their scope. This means that they can be used before they are declared. The variable will not have a value until it is initialised, but will not throw an error.

```
console.log(x); // Outputs: undefined
var x = 5; // x is assigned the value of 5
console.log(x); Outputs: 5
```

## Let
The `let` keyword is used for variables that need to be reassigned, like counters or arrays.

### Scope
`let` is 'block-scoped'. This means that it is only available in the block it is declared in.

```
function counter() {
  for (let i = 0; i < 5; i++) {
    console.log(i); // i is outputted five times from 0 to 4
  }
  console.log("Final i:", i); // Outputs: ReferenceError: i is not defined
}
```

### Redeclaration and updating
`let` can be updated but not redeclared in the same scope

```
let userRoles = ['user', 'editor'];
userRoles.push('admin');
console.log(userRoles); // Outputs: ['user', 'editor', 'admin']
```

### Hoisting
`let` is not hoisted. Accessing `let` before the declaration results in an error.

```
console.log(a); // Outputs: ReferenceError: a is not defined
let a = 10;
console.log(a); // Outputs: 10
```

## Const
The `const` keyword is used for values that should not be reassigned, like configuration objects or mathematical constants.

```
const config = {
  apiUrl: 'https://api.example.com',
  maxRetries: 3,
  timeout: 5000
};
```

```
const PI = 3.14159;
```

### Scope
`const` is 'block-scoped'. It behaves in the same way as the example of `let` above.

### Redeclaration and updating
Cannot be updated or redeclared.

### Hoisting
`const` is not hoisted. Accessing `const` before the declaration results in an error.

