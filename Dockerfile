# 指定基础镜像从 node16 构建
FROM node:16
# 创建对应文件夹，作为项目运行位置
RUN mkdir -p /usr/src/app
# 指定工作区，后面运行的任何命令都在此工作区中完成
WORKDIR /usr/src/app
# 从本地拷贝对应文件到工作区
COPY server.js /usr/src/app/
# 告知当前 docker image 暴露的是 3000 端口
EXPOSE 3001
# 执行启动命令
CMD node server.js