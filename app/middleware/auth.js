module.exports = (options, app) => {
  return async function (ctx, next) {
    const whiteRouter = app.config.whiteRouter
    const url = ctx.url
    const flag = whiteRouter.includes(url)
    const user = ctx.session.user
    if (!flag && !user) {
      ctx.status = 401
      ctx.body = { error: '用户未登录' }
    }else{
      await next()
    }
  }
}
