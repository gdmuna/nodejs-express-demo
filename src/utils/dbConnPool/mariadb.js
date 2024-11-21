// 导入数据库配置
const db_conf = require('config').get('dbConfig');
// 建立数据库连接池
const mariadb = require('mariadb');
const pool = new mariadb.createPool(db_conf);

// SQL 组装器 - 仅用于预览 SQL 语句
const generateSql = (sql, params) => {
    let finalSQL = sql;
    let index = 0;

    // 替换 SQL 查询语句中的参数占位符（例如 ?）为实际的参数值
    finalSQL = finalSQL.replace(/\?/g, () => {
        return typeof params[index] === 'string' ? "'" + params[index++] + "'" : params[index++];
    });

    return finalSQL;
};

// 封装 SQL 执行的方法
exports.query = async (sql, sqlParams) => {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log('Executing SQL query:', generateSql(sql, sqlParams));
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
