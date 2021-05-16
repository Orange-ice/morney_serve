const Controller = require('egg').Controller
const shajs = require('sha.js')

const hash = raw => shajs('sha256').update(raw).digest('hex')

function toInt (str) {
  if(typeof str === 'number') {return str}
  if(!str) {return  str}
  return parseInt(str, 10) || 0
}

class UserController extends Controller {
  async register() {
    const { ctx, app } = this
    const { username, password } = ctx.request.body
    console.log('注册',username,password)
    const [user, created] = await ctx.model.User.findOrCreate({
      where: { username },
      attributes: { exclude: ['password'] },
      defaults: {
        password,
        avatar: `https://ui-avatars.com/api/?background=random&name=${username}`
      }
    })

    // findOrCreate 的 exclude: ['password'] 不知为何无法去除 password 属性，所以手动去掉
    const _user = JSON.parse(JSON.stringify(user))
    delete _user.password

    if(created) {
      ctx.body = { resource: _user }
      return
    }
    ctx.status = 400
    ctx.body = { msg: '用户已存在' }
  }
}

module.exports = UserController
