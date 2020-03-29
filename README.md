[![Build Status](https://travis-ci.org/gerisztein/weather-forecast.svg?branch=master)](https://travis-ci.org/gerisztein/weather-forecast)

# Weather Dashboard

## TL;DR

Type the command below on terminal to install the dependencies and run the project locally.

	$ yarn && yarn serve

## API Key

You need to get an [OpenWeatherMap API key](https://openweathermap.org/api) and to add it to the `.env` file under the field `VUE_APP_API_KEY`.

Example:

```
VUE_APP_API_KEY=1234567890
```

## Introduction

This project was bootstrapped with Vue-CLI to speed up the process as it is just a **prototype**.

This prototype is intended to work on a mininum resolution of 1024x768px.

## Dependencies

The most relevant dependencies used on this project are:

- vue
- vue-router
- axios

### HTML and CSS

I used [Pug](https://pugjs.org/api/getting-started.html) as a template engine and [Stylus](https://stylus-lang.com/) as a CSS pre-processor.

## DevDependencies

I chose some tools to help during development such as:

- [ESLint](https://eslint.org)
- [husky](https://github.com/typicode/husky) and [commitlint](https://commitlint.js.org)


## @TODO

This is a short list of things I'd like to work on if I had more time (or if it was a real life project)

- Add tests
- Responsive layout
- Handle errors
- Improve navigation and filter
- Use the proper OpenWeatherMap endpoint (`/daily`) to fetch the data

## Deployment

This project is automatically deployed to [Github Pages](https://pages.github.com) using [TravisCI](https://travis-ci.org).

## Demo

A working demo can be visited [here](https://gerisztein.github.io/weather-forecast).
