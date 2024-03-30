# 设定打包成 Docker 镜像时的 Node.js 版本
ARG VERSION="18.18.2"

FROM node:${VERSION}-alpine
EXPOSE 33001
ENV NODE_ENV=production

# 设定工作目录
WORKDIR /app

# 将当前目录下的所有文件拷贝到工作目录下
COPY ./. ./

RUN npm install

CMD ["npm", "start"]
