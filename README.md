## Overview




## Notes

Steps followed to setup this project


### Installing pre-reqs

Download and install nodeJS from [here](https://nodejs.org/en/)

Once installed the Yarn package manager can be installed using 
the following command

```
npm set ~/.npm -g   # This creates a ~/.npmrc file with config
npm install -g yarn # Install Yarn "globally" under ~/.npm
export PATH=$PATH:~/.npm/bin
```


### Adding Packages

Adding the package using yarn

```
yarn add @hapi/hapi
yarn add @hapi/inert
yarn add fuse.js
```

Development packages

```
yarn add --dev qunit
yarn add --dev csvtojson
```


### Converting csv to json

Using the `csvtojson` command

```
yarn run csvtojson < data/vehicles-reduceddata.csv > data/vehicles-reduceddata.json
```




## References

### Javascript

* [async and await](https://javascript.info/async-await)
* [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
* [fetch data](https://npspublicsafetyjira.atlassian.net/secure/RapidBoard.jspa?rapidView=833&selectedIssue=CON-89861)
* [Current time](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)


### Tools

* [Node.js](https://nodejs.org/en/)
* [npm config](https://docs.npmjs.com/cli/config)
* [Yarn](https://yarnpkg.com)


### Testing

* [QUnit introduction](https://qunitjs.com/intro/)
* [QUnit API](https://api.qunitjs.com)

### Node

* [Package.json format](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/)


### Packages

* [Hapi getting started](https://hapi.dev/tutorials/?lang=en_US)
* [Fuse installation](https://fusejs.io/getting-started/installation.html)
* [Qunit](https://qunitjs.com)
* [Inert package](https://hapi.dev/module/inert/)
* [Hapi Inert](https://github.com/hapijs/inert)
* [Inert API](https://hapi.dev/module/inert/api/?v=6.0.3)
* [csvtojson](https://yarnpkg.com/package/csvtojson)



