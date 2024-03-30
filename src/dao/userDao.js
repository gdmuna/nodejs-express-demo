const db = require('../utils/dbConnPool/mariadb');

exports.getUserList = async () => {
    const sql = `
        SELECT
            user_id AS userId,
            user_name AS userName
        FROM
            user_info
    `;
    return await db.query(sql);
};

exports.getUserInfo = async (userId) => {
    const sql = `
        SELECT
            user_id AS userId,
            user_name AS userName,
            gender,
            age
        FROM
            user_info
        WHERE
            user_id = ?
    `;
    const sqlParams = [userId];
    return await db.query(sql, sqlParams);
};
