const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://az24d1aisswn01.search.windows.net',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
