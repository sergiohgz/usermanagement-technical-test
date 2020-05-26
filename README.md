# User management technical test

A simple user management application created for LaLiga as a technical test

## Requirements

The technical requirements to work with this project are:

- Node.js >=10
- Yarn 1

## Installation

To install dependencies, you have to perform next command

```shell
yarn install --frozen-lockfile
# Or it simpler version:
# yarn --frozen-lockfile
```

## Technolgies used

### Main

- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/react-router/)
- [Redux](https://redux.js.org/) using [Redux Toolkit](https://redux-toolkit.js.org/)
- [Emotion](https://emotion.sh/) as a replacement of Styled Components
- [Material UI](https://material-ui.com/) to create a Material Design feeling
- [Axios](https://github.com/axios/axios) as http client

### Secondary technologies
- [Testing Library](https://testing-library.com/)
- [ESLint](https://eslint.org/)
- [Husky](https://github.com/typicode/husky) to enable Git Hooks
- [Lint Staged](https://github.com/okonet/lint-staged) to lint files in Git stage
- [Commitlint](https://commitlint.js.org/) to force follow a commit style convention
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) as commit convention

## Requirements implemented

- [x] User list
- [ ] User detail
  - [x] Detail
  - [x] Remove
  - [ ] Edition
- [ ] User login

## License

This project implementation is under a [MIT license](./LICENSE)
