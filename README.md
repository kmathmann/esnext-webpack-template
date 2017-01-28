#ESNEXTTemplate
* webpack
* webpack-dev-server
* babel
    * babel-preset-latest
    * babel-preset-stage-0
    * babel-plugin-runtime-transform
* eslint (with airbnb-base config)
* SCSS -> extract to a bundled css file
* autoprefixer
* bundles become appendet to HTML automatic
* appcache becomes generated
* fetch


## Installation
1. Install deps via `npm i` oder `yarn`
2. Fire up dev server via `npm start` oder `yarn start`

## Building
You can build the project via `npm run build` oder `yarn run build`. 

You can build the project with sourceMaps via `npm run build:qa` oder `yarn run build:qa`. 

##Rename Bundle Filename

``` json
// ...
entry: {
        <<name>>: [
            // ...
        ]
    },
    // ...
```