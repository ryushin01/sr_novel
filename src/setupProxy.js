const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.aladdin.co.kr/ttb/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Remove '/api' prefix when forwarding the request
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log(
          `Proxying request: ${req.method} ${req.originalUrl} -> ${proxyReq._headers.host}${proxyReq.path}`,
        );
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log(`Received response: ${res.statusCode} ${req.originalUrl}`);
      },
    }),
  );
};
