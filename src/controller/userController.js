const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');

router.post('/getUserList', async (req, res, next) => {
    const result = await userService.getUserList();
    res.ResultVO(0, '成功', result);
});

router.post('/addqrContent', async (req, res, next) => {
    const result = await userService.addqrContent(req.body.upurl, req.body.qrName, req.body.userId, req.body.codeUrl);
    res.ResultVO(0, '成功', result);
});
