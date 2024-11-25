const db = require(`../utils/dbConnPool/db`);

// 用户登录
exports.login = async (userId) => {
    const sql = `
        SELECT
            user_id AS userId,
            user_name AS userName,
            password_hash AS passwordHash
        FROM
            user_info
        WHERE
            user_id = ?
    `;
    const sqlParams = [userId];
    return await db.query(sql, sqlParams);
};
