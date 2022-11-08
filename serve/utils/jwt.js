let jwt = require('jsonwebtoken');
let SESSION = require('./SESSION');

// token概念
// Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（(RFC 7519).该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。
// 流程：
// 用户使用用户名密码来请求服务器
// 服务器进行验证用户的信息
// 服务器通过验证发送给用户一个token
// 客户端存储token， 并在每次请求时附送上这个token值
// 服务端验证token值， 并返回数据

// 第一部分我们称它为头部（header),第二部分我们称其为载荷（payload, 类似于飞机上承载的物品)，第三部分是签证（signature).
// 例如
// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjQxNjA3OTgxNzA3LCJpYXQiOjE2NDE2MDczODF9.i2M_4WY0lBfpoQ8OHnH_p-a6uKRX5UJoWTNZdJzNuPs";

// 创建jwt
// jwt.sign(payload, secretOrPrivateKey)

// let newToken = jwt.sign({
//     username: 'admin',
//     exp: Date.now() + 1000 * 60 * 10,
// }, "qianduanerban");

// console.log(newToken);

// 解密jwt
// jwt.verify(token, secretOrPublicKey)
// let rst = jwt.verify(token, "qianduanerban");
// console.log(rst);

// 参考网址
// https://www.jianshu.com/p/576dbf44b2ae
// https://segmentfault.com/a/1190000021235208
// https://www.npmjs.com/package/jsonwebtoken


// 创建token
function signToken(payload) {
    return jwt.sign(payload, SESSION);
}

// 解析token
function verifyToken(token) {
    let str = '';
    try {
        str = jwt.verify(token, SECRECT);
    } catch (e) {
        return false;
    }
    return str;
}

module.exports = {
    signToken,
    verifyToken
}
