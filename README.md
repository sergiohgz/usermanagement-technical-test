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
- [x] User detail
  - [x] Detail
  - [x] Remove
  - [x] Edition
- [x] User login

## Technical decisions

This application is build using:
- Typescript as language, to have a robust types system over Javascript
- React as UI library, implementing components with function components and hooks, using JSX as sugar syntax for defining them
- Redux as state management, with Redux Toolkit (RTK), the official opinionated way to use this library, with next middlewares and configuration
  - Redux DevTools configuration (disabled for production manually)
  - Redux Thunk middleware to dispatch asynchronous actions
  - Immutable State Invariant middleware to compare state values across mutations (by default, enabled only for development)
  - Serializable State Invariant middleware, because state should contain only serializable values to recover state in a deterministic way (by default, enabled only for development)
  - Immer library to create reducers with simple assigns (with `=` operator) (feature provided by RTK but not used as it creates a false feeling of mutability on immutable state updates)
- React Router DOM as single page application routing framework
- Emotion to create styled components with a similar syntax to StyledComponents (no CSS classes directly)
- Material UI as framework to keep consistency in app styles with Material Design
- ESLint with my own set of rules, configured to apply different rules for different filetypes (e.g, Typescript Eslint rules are only applied in TS files)
- React Testing Library to create some DOM test examples, using Jest as runner and Jasmine as syntax (inherit by React Scripts)
- Husky, Lint Staged and Commitlint as dev tools to force user to follow a consistent guidelines in development
  - Husky installs Git Hooks to run commands when they are executed (in this case, used only when commit is done)
  - Lint Staged to lint only modified code when preparing the commit
  - Commitlint with Conventional Commits configuration to check if commit follows a visual syntax that allows to automatize releases with tools such as Standard Version or Semantic Release
- Github CI to check pushes on master or branches that have a pull request opened to be merged in master branch
- Docker with a multistage configuration (based on Alpine Linux to keep a small microservice)
  - Node 12 (LTS) to build application
  - Nginx to serve application

## License

This project implementation is under a [MIT license](./LICENSE)
