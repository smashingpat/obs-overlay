export default () => [
    { test: /.css$/, use: ['style-loader', 'css-loader'] },
    { test: /.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
];
