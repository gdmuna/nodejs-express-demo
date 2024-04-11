const userDao = require('../dao/userDao');

exports.getJobList = async () => {
    const JobList = await userDao.getJobList();
    return JobList;
};

//以下为模版
// exports.getUserInfo = async (userId) => {
//     const userInfo = await userDao.getUserInfo(userId);
//     return userInfo;
// };
