'use strict' //严格模式 四最k的
// 引入mysql
let mysql = require('mysql');

let to = require('./await-to-js');

// 数据库封装
class DB {
        // 传参
        constructor({
                            host = "localhost", //主机名
                            user = "root", //用户名
                            password = "123456", //密码
                            database = "shop_db", //数据库名称
                            port = "3306" //端口号
                    } = {}) {
                // 给参数赋值
                this.connt = null;
                this.dbConfig = {
                        host,
                        user,
                        password,
                        database,
                        port
                }
        };
        // 创建链接
        connection() {
                // 返回一个promise对象
                return new Promise((resolve, reject) => {
                        this.connt = mysql.createConnection(this.dbConfig);
                        // 建立链接
                        this.connt.connect(err => {
                                err ? reject('链接失败') : resolve('链接成功');
                        })
                })
        };
        // 执行sql语句数据库查询
        async query(sql, params = []) {
                // 判断数据库是否链接成功
                let [err, data] = await to(this.connection());
                if (err) {
                        throw "错误"
                };
                let p = new Promise((resolve, reject) => {
                        this.connt.query(sql, params, (err, result) => {
                                err ? reject(err) : resolve(result);
                        })
                });
                return p;
        };
        // 关闭链接
        close() {
                this.connection.end();
        }
}

let db = new DB();

module.exports = db;
