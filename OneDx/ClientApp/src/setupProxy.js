const { createProxyMiddleware } = require('http-proxy-middleware');
const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:1607';

const context = [
    "/doctor/all",
    "/users/all",
    "/patient/all",
    "/diagnosis/all",
    "/doctor/create",
    "/patient/create",
    "/diagnosis/create",
    "/diagnosis/createforpatient",
    "/doctor/edit",
    "/patient/edit",
    "/diagnosis/edit",
    "/doctor/update",
    "/patient/update",
    "/diagnosis/update",
    "/patient/bydoctor",
    "/diagnosis/bypatient",
    "/_configuration",
    "/.well-known",
    "/Identity",
    "/connect",
    "/ApplyDatabaseMigrations",
    "/_framework"
];

module.exports = function(app) {
  const appProxy = createProxyMiddleware(context, {
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  });

  app.use(appProxy);
};
