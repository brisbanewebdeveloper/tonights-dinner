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
sudo npm install -g serve

# To run via "http://localhost:5000"
serve -s build

# To run via "http://192.168.0.1:5000"
# (Change "192.168.0.1:5000"" to whatever it suits to your situation)
serve -l tcp://192.168.0.1:5000/ -s build
```

## Dev Time

A couple of days including the time I read the books about [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).
