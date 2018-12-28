## Welcome to the SRC folder for the wwweihnachten Theme.

The contents of this folder are used to generate CSS and javascript. You may never have to touch anything here,  unless you want to more deeply customize your styles.

## Tools

### Yarn

We use [Yarn](https://yarnpkg.com) for package managment (instead of NPM) because it's fast and generates a lock file to make dependency management more consistent. The theme's `.gitignore` file should be kept intact to make sure that all files in the `node_modules` folder are not pushed to the repository.

### Webpack

We use Webpack to manage our asset pipeline. Arguably, Webpack is overkill for this use-case, but we're using it here because once it's set up (which we've done for you), it's really easy to use. If you want to use an external script, just add it via Yarn, and reference it in main.js. You'll find instructions in the js/main.js file.



## How to Use

You'll find the commands to run in `package.json`.

For development, you'll need Node and Yarn installed:

```
$ cd themes/wwweihnachten

$ yarn install

$ npm start

```
This will process both the postcss and scripts.

For production, instead of `npm start`, run `npm run build:production,` which will output minified versions of your files.
