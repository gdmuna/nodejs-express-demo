// API 鉴权中间件

// 获取配置中的 baseUrl
const baseUrl = require('config').get('serverConfig').baseUrl;

const authService = require('../service/authService');

// 接口前缀白名单
const apiPrefixWhiteList = [
    '/auth', // 认证相关接口
    '/user' // 用户相关接口
];

// 鉴权函数
const apiProtected = async (req, res, next) => {
    // 先过滤掉请求路径中的 baseUrl 部分
    const pathWithoutBaseUrl = req.path.startsWith(baseUrl) ? req.path.slice(baseUrl.length) : req.path;
    // 检测请求路径前缀是否在白名单中
    const isWhitelisted = apiPrefixWhiteList.some((prefix) => pathWithoutBaseUrl.startsWith(prefix));
    if (isWhitelisted) {
        next();
    } else {
        // 如果请求路径不在白名单中，则检测请求头中是否包含 Authorization
        const authorization = req.headers['authorization'] || req.headers['Authorization'];
        if (!authorization) {
            res.ResultVO(401, '未提供 Authorization');
            return;
        }
        // 从 Authorization 中提取 token
        const token = authorization.split(' ')[1];
        if (!token) {
            res.ResultVO(401, 'Authorization 格式不满足 OAuth2 标准');
            return;
        }
        // 验证 token
        const payload = await authService.tokenVerify(token);
        if (!payload) {
            res.ResultVO(401, 'token 无效');
            return;
        }
        // 将 token 解析后的 payload 挂载到 req 上
        req.payload = payload;
        // 验证通过，继续执行后续操作
        next();
    }
};

module.exports = apiProtected;
