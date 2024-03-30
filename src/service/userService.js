const userDao = require('../dao/userDao');

exports.getUserList = async () => {
    const userList = await userDao.getUserList();
    return userList;
};

exports.getUserInfo = async (userId) => {
    const userInfo = await userDao.getUserInfo(userId);
    return userInfo;
};

exports.getUserSexAge = async (sex, age) => {
    const userSexAge = await userDao.getUserSexAge(sex, age);
    return userSexAge;
};
