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
    const collect = await userDao.addCollect(userId, jobId);
    return collect;
};

exports.addReport = async (userId, jobId) => {
    const report = await userDao.addReport(userId, jobId);
    return report;
};

exports.addUser = async (userId, phoneNumber, password, identityParam, nickname) => {
    const user = await userDao.addUser(userId, phoneNumber, password, identityParam, nickname);
    return user;
};

exports.getUserPassword = async (userId) => {
    const password = await userDao.getUserPassword(userId);
    return password;
};

exports.getResume = async (userId) => {
    const Resume = await userDao.getResume(userId);
    return Resume;
};

exports.addSendResume = async (resumeId, userId, recruitersId) => {
    const sendResume = await userDao.addSendResume(resumeId, userId, recruitersId);
    return sendResume;
};
