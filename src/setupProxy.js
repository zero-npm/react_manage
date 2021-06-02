const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware(process.env.REACT_APP_BASE_API, {
        target: 'http://dev.schaxk.com:8091',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
            ['^' + process.env.REACT_APP_BASE_API]: ''
        },
    }));
};
