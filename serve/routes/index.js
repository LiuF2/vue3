var express = require('express');
var router = express.Router();
let md5 = require('md5')
let to = require('../utils/await-to-js')
let db =require('../utils/DB')
let {SUCCESS,ERROR} = require('../utils/result')
const {signToken} = require("../utils/jwt");
/* GET home page. */
router.get('/', async function (req, res) {
  // 解析前端传过来的参数
  let {username, password} = req.query

  // if(username==='admin'&&password==='123456'){
  //   res.send({code:'200',msg:'登陆成功'});
  // }else {
  //   res.send({code:'201',msg:'账号或密码错误'});
  //
  // }
  // 校验用户是否存在
  let [err, data] = await to(db.query(`SELECT * FROM user WHERE username="${username}"`));
  if (err) {
    ERROR(res, "用户查询失败", err);
  };
  if (data.length <= 0) {
    ERROR(res, "用户未注册", err);
  }

  // 取出用户名和密码
  let uName = data[0].username;
  let pwd = data[0].password;
  // 校验用户名和密码是否匹配
  if (username == uName &&'31712b2a83ae8a095401c01e7884cc5b' == pwd) {
    let token = signToken({ username, exp: Math.floor(Date.now() / 1000) + (60 * 60) });
    // let token = signToken({ username, exp: Math.floor(Date.now() / 1000) + 30 });
    console.log(token)
    SUCCESS(res, "用户登录成功", token);
  } else {
    ERROR(res, "用户名或密码错误");
  }
});

module.exports = router;
