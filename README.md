#ESNEXT-Webpack-Template
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
* bundles become appendet to HTML automatically
* appcache becomes generated automatically
* fetch


## Installation
1. Install dependencies via `yarn` or `npm i`.
2. Fire up dev server via `yarn start` or `npm start`.
3. Open [localhost:8080](http://localhost:8080) in an browser.
4. Start development.

#### node? npm? yarn? what?!
- "Node.js is an open-source, cross-platform JavaScript runtime environment" - Wikipedia  
- NPM is the Node Package Manager.  
- Yarn is an alternative Package Manager from facebook.
 
 When you does not installed Node.js yet you can download it from [here](//nodejs.org/).   
 NPM becomes installed with Node.js.   
You don't need yarn to use this template, but if you want to use yarn you can download it from [here](//yarnpkg.com/).   

## Building
You can build the project via `yarn run build` or `npm run build`. 

You can build the project with sourceMaps via `yarn run build:qa` or `npm run build:qa`. 

##Rename Bundle Filename

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