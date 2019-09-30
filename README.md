# SparkAR Webpack Project

This repository contains a Webpack-powered scripting environment for SparkAR.

## Why

With this setup, you can enjoy all neat features from NPM packages, node and ESNEXT at your filters.
If you are a heavy _scripter_ like me, you must feel very frustrated by the scripting limitations from the SparkAR engine.
Throwing everything into a single file isn't a best practice and results into large, confusing and poorly written code.
Now you can create and reuse modules within your project.

## Features

* Webpack bundling
* Babel
  * `preset-env` transpiling;
  * [Optional Chaining](https://dev.to/nimmo/optional-chaining-what-is-it-and-how-can-you-add-it-to-your-javascript-application-right-now-37ie);
  * [Object Rest Spread](https://v8.dev/features/object-rest-spread).
* ESLint
  * Air-bnb ruleset based.
* TypeScript types
  * Contains all the SparkAR type system for VSCode IntelliSense (Updated to 30/09/2019 [v71]).

## Downloads

[Download the project](https://github.com/vinerz/spark-webpack-project/archive/master.zip)

## Usage

Install the project dependencies

```bash
yarn install
```

### Development

You should develop the filter using the `watch` script. This way Webpack will detect any changes and recompile the script on the fly.
**You must _`*never*`_ export the development version to Spark HUB as it contains a lot of boilerplate code and system comments.**
Only use the watch script for development purposes.

```bash
yarn watch
```

### Deployment

BEFORE sending your filter to Spark HUB, use the `build` script.
Webpack will then minify the code bundle and make it as smaller and efficient as it can possibly be.

```bash
yarn build
```

## Known issues

For now, this setup adds **989 bytes** of overhead code to the script.
As SparkAR itself adds a lot of comments and the code isn't optimized by default, I think that in the end these bytes will be less than what we usually send to Facebook servers.
