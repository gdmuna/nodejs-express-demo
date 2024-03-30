// ESLint 配置 - 代码规范检查
module.exports = {
    // 关闭所有不必要或可能与 Prettier 冲突的规则，仅启用检测潜在错误的规则
    extends: ['plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'latest'
    }
};
