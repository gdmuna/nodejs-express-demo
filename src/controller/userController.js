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

//查用户为女的信息
router.post('/getSex', async (req, res, next) => {
    const result = await userService.getSex(req.body.sex);
    res.ResultVO(0, '成功', result);
});
