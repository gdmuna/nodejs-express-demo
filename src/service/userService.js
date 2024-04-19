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

exports.getTypeList = async () => {
    const TypeList = await userDao.getTypeList();
    return TypeList;
};

exports.getTypeJob = async (typeId) => {
    const typeJob = await userDao.getTypeJob(typeId);
    return typeJob;
};

exports.addCollect = async (userId, jobId) => {
    await userDao.addCollect(userId, jobId);
};

exports.addReport = async (userId, jobId) => {
    await userDao.addReport(userId, jobId);
};
