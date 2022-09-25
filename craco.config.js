const CracoLessPlugin = require('craco-less');
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true
                    }
                }
            }
        }
    ],
    webpack: {
        plugins: {
            add: [
                new StylelintPlugin({
                    extensions: ['css', 'less'],
                    files: '**/*.(less|css)'
                })
            ]
        }
    }
};