const Controller = require('egg').Controller

function toInt (str) {
  if(typeof str === 'number') {return str}
  if(!str) {return  str}
  return parseInt(str, 10) || 0
}

class TagController extends Controller {
  async create() {
    const { ctx } = this
    const { name } = ctx.request.body
    const user_id = toInt(ctx.session.user.id)
    const [tag, create] = await ctx.model.Tag.findOrCreate({
      where: {name, user_id},
      defaults: {
        name,
        user_id
      }
    })
    if (!create) {
      ctx.status = 403
      ctx.body = { error: '标签名已存在' }
      return
    }
    ctx.status = 200
    ctx.body = { resource: tag }
  }
}

module.exports = TagController
