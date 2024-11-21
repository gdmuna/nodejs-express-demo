const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');

router.get('/getUserList', async (req, res, next) => {
    const result = await userService.getUserList();
    res.ResultVO(0, '成功', result);
});

router.get('/getUserInfo', async (req, res, next) => {
    const { userId } = req.query;
    const result = await userService.getUserInfo(userId);
    res.ResultVO(0, '成功', result);
});
