# nodejs-express-demo

一个基于 Node.js Express 框架构建的后端服务 Demo 。

## 快速开始

### 1. 前置准备——安装 Node.js 开发环境

> 如果在 Windows 系统进行开发，推荐使用 nvm，nvm 是 node.js 的版本管理工具，可以让你电脑同时存在多个不同版本的 node.js 环境。
>
> 安装包下载地址：[nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

1.1 安装 nvm  
 打开页面之后下载最新版本的 `nvm-setup.exe` ，然后运行安装程序。

1.2 配置 node 和 nvm 的 镜像源  
nvm 安装完成后，在安装目录下找到 `settings.txt` 添加以下内容：

```txt settings.txt
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```

1.3 使用 nvm 下载一个 node.js 环境  
打开 Command Prompt (cmd) 或 Windows Terminal，执行如下命令：

```shell
nvm install 18.18.2
```

1.4 切换到这个下载好的 node.js 环境

```shell
nvm use 18.18.2
```

### 2. 启动项目

2.1 拉取项目使用的依赖

```shell
npm install
```

2.2 把项目跑起来（调试项目）  
按键盘快捷键 <kbd>F5</kbd> 启动调试，在该模式下可以对程序进行单步调试。

2.3 如有必要，可以尝试正式启动这个项目

```shell
# 以开发模式启动
npm run dev
# 以生产模式启动
npm run start
```
