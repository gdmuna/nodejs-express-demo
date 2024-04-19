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
//获取某个职位类型的所有职位
router.post('/home/getTypeJob', async (req, res, next) => {
    const result = await userService.getTypeJob(req.body.paramId);
    res.ResultVO(0, '成功', result);
});
//添加某个用户收藏的职位到收藏表
router.post('/addCollect', async (req, res, next) => {
    await userService.addCollect(req.body.userId, req.body.jobId);
    return res.sendStatus(200);
});
//添加举报的职位到举报表
router.post('/addReport', async (req, res, next) => {
    await userService.addReport(req.body.userId, req.body.jobId);
    return res.sendStatus(200);
});
