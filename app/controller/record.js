const Controller = require('egg').Controller

class RecordController extends Controller {
  async create() {
    const { ctx } = this
    const user_id = ctx.helper.toInt(ctx.session.user.id)
    const { tag_id, type, amount, notes } = ctx.request.body
    const record = await ctx.model.Record.create({
      tag_id,
      type,
      amount,
      notes,
      user_id
    })
    ctx.body = { resource: record }
  }

  async update() {
    const { ctx } = this
    const record_id = ctx.helper.toInt(ctx.params.id)
    const { tag_id, type, amount, notes } = ctx.request.body
    const record = await ctx.model.Record.findByPk(record_id)
    await record.update({tag_id, type, amount, notes})
    ctx.body = { resource: record }
  }

  async remove() {
    const { ctx } = this
    const record_id = ctx.helper.toInt(ctx.params.id)
    const record = await ctx.model.Record.findByPk(record_id)
    if(!record) {
      ctx.status = 403
      ctx.body = { error: '记录不存在' }
      return
    }
    await record.destroy()
    ctx.status = 200
  }

  // 获取所有记录
  async list() {
    const { ctx } = this
    const user_id = ctx.helper.toInt(ctx.session.user.id)
    const { count, rows } = await ctx.model.Record.findAndCountAll({
      where: { user_id },
      order: [['created_at', 'DESC']]
    })
    ctx.body = {
      resource: rows,
      total: count
    }
  }

  // 获取单个记录
  async item() {
    const { ctx } = this
    const record_id = ctx.helper.toInt(ctx.params.id)
    const record = await ctx.model.Record.findByPk(record_id)
    if (!record) {
      ctx.status = 403
      ctx.body = { error: '记录不存在' }
      return
    }
    ctx.body = { resource: record }
  }
}

module.exports = RecordController
