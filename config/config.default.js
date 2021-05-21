/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1607845560799_8832';

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: '123456',
    port: 3306,
    database: 'egg-sequelize-default'
  };
  config.security = {
    csrf: {
      enable: false
    }
  }
  // add your middleware config here
  // 登录验证(auth)
  config.middleware = ['auth'];
  // 无需验证token有效性的路由
  config.whiteRouter = ['/user/register', '/user/login', '/']

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
