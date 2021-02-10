Webpack tutorial

-> npm init -y
-> npm install --save-dev webpack webpack-cli

Then, to add loaders, pex (https://webpack.js.org/loaders/sass-loader/):

-> npm install --save-dev style-loader css-loader sass sass-loader

Next thing we'll do, is working with Plugins. We can start with HtmlWebpackPlugin (https://webpack.js.org/plugins/html-webpack-plugin/):

-> npm install --save-dev html-webpack-plugin

--------------------------------

In order to be able to have two different versions (dev + prod), we can use webpack-merge (https://www.npmjs.com/package/webpack-merge):

-> npm install --save-dev webpack-merge

Then, we'll add webpack-serve (https://www.npmjs.com/package/webpack-serve):

-> npm install --save-dev webpack-serve

(Look at package.json to proper configure)

--------------------------------

Now we have to deal with the images.

First of all, we are gonna handle the html by using html-loader (https://webpack.js.org/loaders/html-loader/):
-> npm install --save-dev html-loader

And we include test in common rules: 

{
    test: /\.html$/i,
    loader: 'html-loader',
}


The main idea of this module, is to require every html source, as a js require.

Then, we will directly work with our images, by using file-loader (https://webpack.js.org/loaders/file-loader/):

-> npm install file-loader --save-dev

For rules, we are gonna add some of the basics image types (in our case, also svg):

{
    test: /\.(svg|png|jpe?g|gif)$/i,
    use: {
        loader: 'file-loader',
        options: {
            name: "[name].[hash].[ext]",
            outputPath: "images"
        }
    },
},

--------------------------------

At this point, basic webpack features are working fine. Now we are gonna install a plugin to clean build directory (https://www.npmjs.com/package/clean-webpack-plugin):

-> npm install --save-dev clean-webpack-plugin

--------------------------------

Loading all the CSS using JS, can negatively affect on the performance on production. 
For this reason, we are gonna split our styles in CSS files using (https://webpack.js.org/plugins/mini-css-extract-plugin/):

-> npm install --save-dev mini-css-extract-plugin