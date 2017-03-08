# koa-mock-api
a mock-api server based Koa

基于Koa开发的rest接口模拟工具，可以让前端根据接口文档进行独立开发。

### 安装

```
git clone https://github.com/liujianhuanzz/koa-mock-api.git
cd koa-mock-api
npm install
npm run mock
```

**接口服务默认地址： http://localhost:3000**

### 使用

根据接口文档按照下列格式将模拟数据以`json`存储在`mock-data`文件夹中, 文件名可以任意取。

    [
        {
            "method": "get",
            "url": "/v1/user/info",
            "response": {
                "errorCode": 0,
                "errorMsg": "",
                "data": {
                    "name": "Jianhuan Liu"
                }
            }
        },
        {
            "method": "post",
            "url": "/v1/user/info",
            "response": {
                "errorCode": 0,
                "errorMsg": "",
            }
        }
    ]

其中：

1. `method`字段为请求方式，支持`get`,`post`,`put`,`delete`
2. `url`字段为请求的接口地址, 按照rest API格式书写即可, 比如获取id用户为`/v1/user/info/:id`
3. `response`字段为接口返回数据, 根据接口文档进行书写

### 说明

1. 该工具已对跨域进行了处理，可以直接请求访问
2. 目前不支持热更新，更改了`mock-data`中的文件后需要手动重启，后续添加热更新

### 更新记录

20170308   首次提交，实现基本mock功能

