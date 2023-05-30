# JavaScript Objects

Objects are similar to arrays, except that instead of using indexes to access and modify their data, we use **_properties_**.
Objects are useful for storing data in a structured way.

## Accessing Object Properties with Dot Notation

There are two ways to access the properties of an object:

- ### dot notation (.) and
  > use when you know the name of the property you're trying to access ahead of time

```js
const myObj = {
  properties1: 'value1',
  properties2: 'value2',
};

const prop1val = myObj.properties1; //value1
const prop2val = myObj.properties2; //value2
```

- ### bracket notation ([]).
  > similar to an array.
  > If the property of the object you are trying to access has a space in its name, you will need to use bracket notation... you can still use bracket notation on object properties without spaces.

```js
const myObj = {
  'Space Name': 'Kirk',
  'More Space': 'Spock',
  NoSpace: 'USS Enterprise',
};

myObj['Space Name'];
myObj['More Space'];
myObj['NoSpace'];
```

## Updating Object Properties

you can update its properties by either **"dot"** or **"bracket"** notation.

```js
const ourDog = {
  name: 'Camper',
  legs: 4,
  tails: 1,
  friends: ['everything!'],
};

//  update ourDog name property:
ourDog.name = 'Happy Camper'; // dot notation
//  or
ourDog['name'] = 'Happy Camper'; // bracket notation
```

## Add new Object Properties

add new properties to existing JavaScript objects the same way you would modify them.

```js
ourDog.bark = 'bow-wow'; // dot notation
// or
ourDog['bark'] = 'bow-wow'; // bracket notation
```

## Delete Properties from a JavaScript Object

delete properties from objects like this:

```js
delete ourDog.bark;
```
