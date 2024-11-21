// 导入数据库配置
const db_conf = require('config').get('dbConfig');
// 根据数据库类型导入对应的CURD操作
const provider = db_conf.provider;

const db = require(`./${provider}`);

module.exports = db;
