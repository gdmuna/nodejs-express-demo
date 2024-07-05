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

exports.addqrContent = async (upurl, qrName, userId, codeUrl) => {
    const sql = `
        INSERT INTO 
            qr_code_table (QR_content_code_url, QR_code_name, user_id, QR_code_url) 
        VALUES 
            (?, ?, ?, ?);
    `;
    const sqlParams = [upurl, qrName, userId, codeUrl];
    return await db.query(sql, sqlParams);
};

exports.getSex = async (sex) => {
    const sql = `
        SELECT
            user_id AS userId,
            user_name AS userName,
            gender
            
        FROM
            user_info
        WHERE
            gender = ?
    `;
    const sqlParams = [sex];
    return await db.query(sql, sqlParams);
};
