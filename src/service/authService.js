const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwt_conf = require('config').get('jwtConfig');

const authDao = require('../dao/authDao');

// 用户登录
exports.login = async (userId, password) => {
    // 获取用户实体
    const user = await authDao.login(userId);
    if (!user || user.length === 0) {
        return;
    }
    // 验证密码
    const match = await bcrypt.compare(password, user[0].passwordHash);
    if (!match) {
        return;
    }
    // 生成 token
    const token = await jwt.sign(
        {
            userId: user[0].userId,
            userName: user[0].userName
        },
        jwt_conf.secret,
        {
            expiresIn: jwt_conf.expiresIn
        }
    );
    return token;
};

// 凭证校验
exports.tokenVerify = async (token) => {
    try {
        return await jwt.verify(token, jwt_conf.secret);
    } catch (err) {
        return;
    }
};
