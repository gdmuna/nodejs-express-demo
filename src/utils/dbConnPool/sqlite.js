// 导入数据库配置
const db_conf = require('config').get('dbConfig');
// 打开数据库文件
const sqlite = require('better-sqlite3');
const dbFile = new sqlite(db_conf.filename, {
    readonly: false, // 以只读模式打开数据库连接
    fileMustExist: false, // 如果数据库不存在，将抛出异常而不是创建新文件
    verbose: console.log // 提供一个函数，该函数与数据库连接执行的每个 SQL 字符串一起调用
});

// 封装 SQL 执行的方法
exports.query = async (sql, sqlParams) => {
    try {
        const stmt = dbFile.prepare(sql);
        const result = sqlParams ? stmt.all(sqlParams) : stmt.all();
        return result;
    } catch (err) {
        return err;
    }
};
