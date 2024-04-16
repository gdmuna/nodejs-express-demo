const router = require('express').Router();
module.exports = router;

const userService = require('../service/userService');

//获取职位列表
router.post('/home/getJobList', async (req, res, next) => {
    const result = await userService.getJobList();
    res.ResultVO(0, '成功', result);
});

//以下是原文件，可做模仿模版，为传参模版
// router.post('/getUserInfo', async (req, res, next) => {
//     const result = await userService.getUserInfo(req.body.userId);
//     res.ResultVO(0, '成功', result);
// });

//获取可选的职位类型
router.post('/home/getTypeList', async (req, res, next) => {
    const result = await userService.getTypeList();
    res.ResultVO(0, '成功', result);
});

router.post('/home/getTypeJob', async (req, res, next) => {
    const result = await userService.getTypeJob(req.body.typeId);
    res.ResultVO(0, '成功', result);
});
