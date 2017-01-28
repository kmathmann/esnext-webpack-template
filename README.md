# ESNEXT-Webpack-Template

## Includes
* webpack v2
* webpack-dev-server v2
* babel
    * babel-preset-latest
    * babel-preset-stage-0
    * babel-plugin-runtime-transform
* eslint (with airbnb-base config)
* SCSS -> extract to a bundled css file
* autoprefixer
* bundles will be appended to HTML automatically
* appcache will be generated automatically
* fetch


## Installation
1. Install dependencies via `yarn` or `npm i`.
2. Fire up dev server via `yarn start` or `npm start`.
3. Open [localhost:8080](http://localhost:8080) in an browser.
4. Start development.

## Building
You can build the project via `yarn run build` or `npm run build`. 

You can build the project with sourceMaps via `yarn run build:qa` or `npm run build:qa`. 

## Rename Bundle Filename

Just change "template" under entry in `dev.babel.js` and `prod.babel.js`.
``` json
{
    ...
    entry: {
        <filename>: [
            ...
        ]
    },
    ...
}
```
