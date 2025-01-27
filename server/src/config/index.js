require('dotenv').config();

module.exports = {
  sequelizeInfo: {
    syncType: process.env.MODELS_SYNC_TYPE,
  },
  env: {
    nodeEnv: process.env.NODE_ENV,
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isSecureCookies: process.env.SECURE_COOKIES === 'true',
    cookieName: process.env.COOKIE_NAME,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    accessTokenExpTime: process.env.ACCESS_TOKEN_EXPIRATION_TIME,
    refreshTokenExpTime: process.env.REFRESH_TOKEN_EXPIRATION_TIME,
  },
  server: {
    port: process.env.SERVER_PORT,
  },
};
