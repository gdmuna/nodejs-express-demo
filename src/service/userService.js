const userDao = require('../dao/userDao');

exports.getUserList = async () => {
    const userList = await userDao.getUserList();
    return userList;
};

exports.addqrContent = async (upurl, qrName, userId, codeUrl) => {
    const qrContent = await userDao.addqrContent(upurl, qrName, userId, codeUrl);
    return qrContent;
};

exports.getSex = async (sex) => {
    const userSex = await userDao.getSex(sex);
    return userSex;
};
