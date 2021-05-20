'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.post('/user/register', controller.user.register);
  router.post('/user/login', controller.user.login);
  router.get('/user', controller.user.acquire);
  router.delete('/user/logout', controller.user.logout);

  router.post('/tags', controller.tag.create);
  router.get('/tags', controller.tag.getAll);
  router.get('/tags/item/:id', controller.tag.item);
  router.patch('/tags/item/:id', controller.tag.update);
  router.delete('/tags/item/:id', controller.tag.remove);

  router.get('/record', controller.record.list);
  router.post('/record', controller.record.create);
  router.patch('/record/:id', controller.record.update);
  router.delete('/record/:id', controller.record.remove);
  router.get('/record/item/:id', controller.record.item);
};
