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
}

module.exports = RecordController
