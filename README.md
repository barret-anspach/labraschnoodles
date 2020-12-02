# puppies

> Giant Labraschnoodles!

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Deploy
Site hosted on Heroku, using their heroku-cli-static plugin
Here's a [https://gist.github.com/hone/24b06869b4c1eca701f9](link to a tutorial).

Once `npm run build` has been executed:

``` bash
heroku static:deploy
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
