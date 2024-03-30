// 错误处理中间件
const errorHandler = (err, req, res, next) => {
    // 处理错误并返回适当的响应
    console.error(err);
    res.status(500).json({
        code: err.code,
        message: err.name,
        error: err.text
    });
};

module.exports = errorHandler;
