// 导入数据库配置
const db_conf = require('config').get('dbConfig');
// 建立数据库连接池
const mariadb = require('mariadb');
const pool = new mariadb.createPool(db_conf);

// 封装数据库查询的方法
exports.query = async (sql, sqlParams) => {
    let conn;
    try {
        conn = await pool.getConnection();
        return await conn.query(sql, sqlParams);
    } catch (err) {
        return err;
    } finally {
        if (conn) conn.release();
    }
};

// 过滤 SQL 语句中的空入参条件
exports.conditionReplace = (condition, param) => {
    if (param != null && param != undefined && param != '') {
        return condition;
    } else {
        return '1 = 1';
    }
};

// 过滤 SQL 语句中的空参数
exports.paramsReplace = (params) => {
    return params.filter((item) => item != null && item != undefined && item != '');
};
