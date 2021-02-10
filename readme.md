Webpack tutorial

-> npm init -y
-> npm install --save-dev webpack webpack-cli

Then, to add loaders, pex:

-> npm install --save-dev style-loader css-loader sass sass-loader

Next thing we'll do, is working with Plugins. We can start with HtmlWebpackPlugin:

-> npm install --save-dev html-webpack-plugin

--------------------------------

In order to be able to have two different versions (dev + prod), we can use webpack-merge:

-> npm install --save-dev webpack-merge

Then, we'll add webpack-serve:

-> npm install --save-dev webpack-serve

(Look at package.json to proper configure)

--------------------------------