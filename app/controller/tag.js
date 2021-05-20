const Controller = require('egg').Controller

function toInt (str) {
  if(typeof str === 'number') {return str}
  if(!str) {return  str}
  return parseInt(str, 10) || 0
}

class TagController extends Controller {
  async create() {
    const { ctx } = this
    const { name, type } = ctx.request.body
    const user_id = toInt(ctx.session.user.id)
    const [tag, create] = await ctx.model.Tag.findOrCreate({
      where: {name, user_id},
      defaults: {
        name,
        user_id,
        type: toInt(type)
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

  async remove() {}

  async update() {}

  async item() {
    const { ctx } = this
    const tag_id = toInt(ctx.params.id)
    const tag = await ctx.model.Tag.findByPk(tag_id)
    if (!tag) {
      ctx.status = 403
      ctx.body = { error: '标签不存在' }
      return
    }
    ctx.status = 200
    ctx.body = { resource: tag }
  }

  async getAll() {
    const { ctx } = this
    const user_id = toInt(ctx.session.user.id)
    const { count, rows } = await ctx.model.Tag.findAndCountAll({
      where: { user_id },
    })
    ctx.status = 200
    ctx.body = {
      resource: rows,
      total: count
    }
  }
}

module.exports = TagController
