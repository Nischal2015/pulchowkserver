---
Title: Pulchowk student api wrapper 👋
Author: Nischal Shakya
Date: November 18, 2022
---

# Pulchowk Student api Wrapper

## Introduction

This is the api wrapper around the [Student api](http://assmnt.pcampus.edu.np/api/students/test.php) provided by Pulchowk Campus which provides easy to use api than what is provided by the college.

[NestJS](https://nestjs.com/) was used for building this API as it provides very clean architecture with how the files are arranged. Since, Typescript support is available by default, it provides very good developer experience.

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![RxJS](https://img.shields.io/badge/rxjs-%23B7178C.svg?style=for-the-badge&logo=reactivex&logoColor=white)

## Table of Contents

- ✨ [Demo](#demo)
- 🚀 [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- 👏 [Contributing](#contributing)
  - ⚙️ [Installation](#installation)
  - 👨‍💻 [Development scripts](#development-scripts)
- 📝 [License](#license)

## Demo

This simple demo is presented using Insomnia. It gives an idea of the type of data that is returned by the API.

![demo](https://raw.githubusercontent.com/Nischal2015/pulchowkserver/development/assets/demo.gif)

## Usage

The base URL of the api is provides as `https://pul-stu-server.onrender.com/api`.

The request parameters are to be used with following values

- `prog` => To input Program Code, values can be **BCT**, **BEI**, **BEX**, **BEL**, **BME**, **BAR**, **BAE**, **BAS**, **BCE** or **BCH**
- `batch` => To input Batch, values can be **074** or **075** or so on.
- `group` => To input Group, values can be **A**, **B**, **C** or **D** or so on.

### API Endpoints

#### POST

- `/students`
  > Returns all the students according to `prog`, `batch` and `group`.

#### Example

```javascript
// with axios
axios.post('https://pul-stu-server.onrender.com/api/students/', {
  prog: "BCT",
  batch: "075",
  group: "C",
})
...

// with fetch
await fetch('https://pul-stu-server.onrender.com/api/students/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prog: 'BCT',
    batch: '075',
    group: 'C',
  }),
})
...
```

## Contributing

Make sure you have [Node](https://nodejs.org/en/download/) installed on your PC. We recommend using the LTS version.

### Installation

Run the following script to install all the dependencies.

```bash
npm install
# or
yarn
```

### Development scripts

```bash
# development
yarn start

# watch mode
yarn start:dev

# build
yarn build

# production mode
yarn start:prod
```

## License

[MIT](https://github.com/Nischal2015/pulchowkserver/blob/development/LICENSE)

-the end -
