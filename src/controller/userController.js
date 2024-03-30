const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');

router.post('/getUserList', async (req, res, next) => {
    const result = await userService.getUserList();
    res.ResultVO(0, '成功', result);
});

router.post('/getUserInfo', async (req, res, next) => {
    const result = await userService.getUserInfo(req.body.userId);
    res.ResultVO(0, '成功', result);
});

router.post('/getUserSexAge', async (req, res, next) => {
    const result = await userService.getUserSexAge(req.body.sex, req.body.age);
    res.ResultVO(0, '成功你好', result);
});
