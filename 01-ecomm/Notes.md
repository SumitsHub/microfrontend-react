## Setup - products

- Initialize Node project with "npm init -y"
- Install dependencies using - "npm install webpack@5.88.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 faker@5.1.0 html-webpack-plugin@5.5.0"

### Webpack

- generates bundle file

### Html webpack plugin

- takes bundle files genarted by webpack and adds to the template html file

## Setup - container

- Initialize Node project with "npm init -y"
- Install dependencies using - "npm install webpack@5.88.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 html-webpack-plugin@5.5.0 nodemon"

### Async Script Loading

- moved script from index to bootstrap
- Error - shared modules are not available for eager consumption

### Shared Module Versioning

- Module Federation Plugin automatically loads different versions of shared modules if there is major version change

### Singleton Loading

- load only one dependency no matter what (even iff there is difference in module version)

```js
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/index',
      },
      shared: {
        faker: {
            singleton: true
        }
      },
    }),
```
