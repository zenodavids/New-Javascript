# Things I learnt in javascript;

# Strings

## Escaping Literal Quotes in Strings

What happens when you need a literal quote: " or ' inside of your string?

```js
// escape a quote by placing a backslash (\) in front of the quote.
const sampleStr = 'Alan said, "Peter is learning JavaScript".';
console.log(sampleStr); //Alan said, "Peter is learning JavaScript".
```

## Concatenating Strings with the Plus Equals(+=) Operator

Concatenate a string onto the end of an existing string variable.

```js
let ourStr = 'I come first. ';
ourStr += 'I come second.';
console.log(ourStr); //I come first. I come second.
```

## Appending Variables to Strings

append variables to a string using the plus equals (+=) operator.

```js
const anAdjective = 'awesome!';
let ourStr = 'Metacrafters is ';
ourStr += anAdjective;
console.log(ourStr); //Metacrafters is awesome!
```

# The Switch Statement

## Multiple Identical Options in Switch Statements

If you have multiple inputs with the same output, you can represent them in a switch statement like this:

```js
let result = '';
switch (val) {
  case 1:
  case 2:
  case 3:
    result = '1, 2, or 3';
    break;
  case 4:
    result = '4 alone';
}
```

> Cases for 1, 2, and 3 will all produce the same result.

# Ternary Operators

## Use Multiple Conditional (Ternary) Operators

You can also chain them together to check for multiple conditions.

> just like **_if, else if_**, and **_else_** statements to check multiple conditions

**_Instead of;_**

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return 'a and b are equal';
  } else if (a > b) {
    return 'a is greater';
  } else {
    return 'b is greater';
  }
}
```

**_do this instead_**

```js
function findGreaterOrEqual(a, b) {
  return a === b
    ? 'a and b are equal'
    : a > b
    ? 'a is greater'
    : 'b is greater';
}
```

---

# Functions

## Returning Boolean Values from Functions

return a boolean true or false value.

**_instead of ;_**

```js
// returns true or false
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```

**_Do this ;_**

```js
// returns true or false
function isEqual(a, b) {
  return a === b;
}
```

# Loops

## Iterate _Even Numbers_ With a For Loop

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

```js

```

```js

```

```js

```
