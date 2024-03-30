// 响应格式化中间件
const responseFormat = (req, res, next) => {
    // 重写 res.json 方法 为 res.ResultVO
    res.ResultVO = (code = '0', message = 'Success.', data = '') => {
        // 处理 SQL 错误并返回适当的响应
        if (data.constructor.name === 'SqlError') {
            res.status(500).json({ code: data.code, message: data.name, error: data.text });
        }
        // 处理 SQL 成功并返回适当的响应
        else {
            // 如果是 insert 或 update 操作，格式化返回的执行状态信息
            if (data.constructor.name === 'OkPacket') {
                data = {
                    affectedRows: Number(data.affectedRows),
                    insertId: Number(data.insertId),
                    warningStatus: Number(data.warningStatus)
                };
            }
            // 向前端响应查询的结果数据或执行的状态信息
            res.status(200).json({ code, message, data });
        }
    };
    next();
};

module.exports = responseFormat;
