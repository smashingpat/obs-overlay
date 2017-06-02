import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';


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
            },
        }),
        !isServer && new HtmlWebpackPlugin({
            template: './source/shell.html',
        }),
    ].filter(Boolean);
}
