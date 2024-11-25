# nodejs-express-demo

一个基于 Node.js Express 框架构建的后端服务 Demo 。

## 技术栈

-   框架
    -   [Express.js](https://expressjs.com/)
-   代码规范
    -   [ESLint](https://eslint.org/)
    -   [Prettier](https://prettier.io/)
-   数据库
    -   [SQLite](https://www.sqlite.org/index.html)
    -   [MySQL](https://www.mysql.com/)
    -   [MariaDB](https://mariadb.org/)

## 项目结构

    ```plaintext
    .
    ├── .husky              # Git 钩子
    ├── .vscode             # VSCode 配置与扩展
    ├── config              # 项目配置文件
    ├── node_modules        # 项目依赖
    ├── src                 # 源码
    │   ├── controller      # 控制层
    │   ├── dao             # 数据访问层
    │   ├── middleware      # 中间件
    │   ├── service         # 业务逻辑层
    │   └── utils           # 工具函数
    ├── test                # 模拟发包测试
    ├── .eslintrc.cjs       # ESLint 配置
    ├── .gitattributes      # Git 格式化提交配置
    ├── .gitignore          # Git 代码跟踪忽略规则
    ├── .npmrc              # NPM 镜像源配置
    ├── .prettierrc.cjs     # Prettier 配置
    ├── .yarnrc             # Yarn 镜像源配置
    ├── app.js              # 项目入口文件
    ├── db-sqlite.db        # SQLite 数据库文件（仅当数据库选择使用 SQLite 才会出现）
    ├── Dockerfile          # Docker 镜像构建文件
    ├── LICENSE             # 开源协议
    ├── package.json        # 项目信息
    ├── README.md           # 项目说明
    ```

## 数据库表结构

```sql
CREATE TABLE "user_info" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "password_hash" TEXT,
    PRIMARY KEY ("user_id")
);
```

## 如何运行项目

1. 前置条件

    - Node.js 20 LTS 及以上版本
    - NPM / Yarn / PNPM
    - SQLite / MySQL / MariaDB

2. 自行创建相关的数据库表

3. 安装依赖

    ```bash
    yarn install
    ```

4. 启动项目

    ```bash
    yarn dev
    ```

5. 调试项目

    按键盘快捷键 <kbd>F5</kbd> 启动调试，在该模式下可以对程序进行单步调试。

6. 在生产环境启动项目

    ```shell
    yarn start
    ```
