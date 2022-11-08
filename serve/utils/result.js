// 成功
let SUCCESS = (res, msg, data = '') => {
    res.send({
        status: 200,
        msg,
        data
    })
}

// 失败
let ERROR = (res, msg, err = '') => {
    res.send({
        status: 500,
        msg,
        data: err,
    })
}
module.exports = {
    SUCCESS,
    ERROR
}