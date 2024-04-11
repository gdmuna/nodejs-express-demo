const db = require('../utils/dbConnPool/mariadb');

exports.getJobList = async () => {
    const sql = `
        SELECT
            p.job_id AS jobId,
            p.title_job AS titleJob,
            p.job_description AS jobDescription,
            p.requirement_label AS requirementLabel,
            p.requirements_l AS requirementsL,
            p.salary,
            p.salary_unit AS salaryUnit,
            p.location,
            u.user_avatar AS userAvatar,
            u.nickname 
        FROM
            position_job p
        INNER JOIN
            user_basic_table u
        ON
            u.user_id=p.recruiters_id
    `;
    return await db.query(sql);
};
//以下为模版
// exports.getUserInfo = async (userId) => {
//     const sql = `
//         SELECT
//             user_id AS userId,
//             user_name AS userName,
//             gender,
//             age
//         FROM
//             user_info
//         WHERE
//             user_id = ?
//     `;
//     const sqlParams = [userId];
//     return await db.query(sql, sqlParams);
// };
