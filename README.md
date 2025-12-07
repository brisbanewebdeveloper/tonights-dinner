# Tonight's Dinner

My first React based web application.

## Background

- The other day, I saw [someone else's tweet saying she made a matrix for another person to let him choose the dinner instead of her coming up with what they are going eat tonight](https://twitter.com/yuyutamto/status/1439463611861135366).

- Since I had never built a web application with [React](https://reactjs.org/) before, I decided to build one with the tweet.

- With this web application, he does not even have to choose the dinner because the app chooses one for them.

## How to use

- Open the web application.

- Each section represents the type of food, like Chinese Cuisine.

- If you click/tap the header area, the web application randomly chooses the food from the section.

## How to run

```
npm run build
npm run preview
```

## Testing

```
npm run test
```

Run tests once (without watch mode):

```
npm run test -- --run
```

## Dev Time

A couple of days including the time I read the books about [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
