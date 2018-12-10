# Depenjekt [Beta]
[Proof of Concept] Dependency Injector for Node.js

&nbsp;

## Inspired by: 

This project is inspired by [Wire](https://github.com/google/wire) by Google, which is an automated dependency injector for Go.
The 'Let's Get Started' section below is heavily inspired by the [Developer Guide of Wire](https://github.com/google/wire/blob/master/docs/guide.md)

&nbsp;

## How to install?

Install Depenjekt by cloning this repository
```
git clone https://github.com/rohancl/Depenjekt
``` 

It contains two folders.

The `src` directory is where the core library resides

The `sample_files` directory where you can find simple files

&nbsp;

## Depenjekt in action

`STEP 1: Navigate to /sample_files`

`STEP 2: Open terminal`

`STEP 3: Execute`

```
node depenjekt_test
```

`STEP 4: Find generated.js with the injected code in the same folder`

&nbsp;

## Let's Get Started

Depenjekt works with **Providers**. We can implement them as shown below

### Defining providers

**Providers** are JS functions that are capable of returning a value

```js
class A {
  constructor(x) {
    this.x = x;
  }
}

const ProvideA = () => {
  return new A(1);
};
```

It returns the `A` object with the value `x` of 1

&nbsp;

Providers also supports parameters;

```js
class B {
  constructor(x) {
    this.x = x;
  }
}

const ProvideB = input => {
  return new B(-input.x);
};
```

Note that now the `ProvideB` function needs the `input` as a dependency;

&nbsp;

Providers can also return errors:

```js
class C {
  constructor(x) {
    this.x = x;
  }
}

const ProvideC = input => {
  if (input.x === 0) {
    throw new Error('Input is zero');
  }
  return new C(input.x);
};
```

&nbsp;

Lastly, export the **providers**:

```js
module.exports = {
  ProvideA,
  ProvideB,
  ProvideC,
};
```

&nbsp;

This is how it'll look like.
&nbsp;

![Screenshot](http://i.imgur.com/pr1p05O.png)

&nbsp;

## How to use Depenjekt on sample_file

Each provider file can be generated with dependencies using the format below

![Screenshot](http://i.imgur.com/XqKVdKr.png)

&nbsp;

## If everything goes well...

You'll notice a new file `generated.js` inside `sample` folder 

![Screenshot](http://i.imgur.com/WGwXR4o.png)

&nbsp;

## Voila! You just generated your first code base with injected dependencies. 

### NOTE: Depenjekt is in `BETA`. Hence it is not at all advised to use it in production. Help me improve this library by
opening issues and submitting a PR. I would be more than happy to review it. :)
