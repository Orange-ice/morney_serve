'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/user/register', controller.user.register);
  router.post('/user/login', controller.user.login);
  router.get('/user/:id', controller.user.acquire);
  router.delete('/user/logout', controller.user.logout);

  router.post('/tags', controller.tag.create);
};
