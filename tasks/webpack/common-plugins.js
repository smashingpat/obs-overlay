import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import config from '../config';


export default (isServer = false) => {
    const getEnviroment = () => {
        if (isServer) {
            return 'server';
        }

        return 'development';
    };

    return [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(getEnviroment()),
                'SERVER_PORT': config.serverPort,
            },
        }),
        !isServer && new HtmlWebpackPlugin({
            template: './source/shell.html',
        }),
    ].filter(Boolean);
}
