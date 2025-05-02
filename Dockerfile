# -----build-----
FROM node:22-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# ----- run nginx-----
FROM nginx:stable-alpine
# 把build好的文件複製到到nginx的html目錄下
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80

# docker build -t social-client:1.0.0 .
# docker run -p 8080:80 --name social-front social-client:1.0.0
