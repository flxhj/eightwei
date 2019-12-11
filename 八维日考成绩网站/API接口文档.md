
#### baseurl:http://127.0.0.1:
---
#### 注册
**/regist**
> 请求方式:POST

参数 |示例
---|---
user | 宇智波
pwd| 131313
inenter|1
++注意:inenter:(1:学生) (2:老师) （3:班主任）++
```
返回示例:
{
"code":1,
"msg":"success"
}
```
---
#### 获取身份
**//ident**
> 请求方式:GET

参数 |无
---|---

```
返回示例:
[
    {"id":1,"ident":"学生"},
    {"id":2,"ident":"老师"},
    {"id":3,"ident":"班主任"}
]
```
---
#### 登陆
**/login**
> 请求方式:POST

参数 |示例
---|---
user | 宇智波
pwd| 131313
```
返回示例:
{
    "code":1,
    "mes":"success",
    "data":{
        "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsInVzZXIiOiLmiL_no4oiLCJwd2QiOiIxMjM0NTYiLCJpZGVudGVyIjoiMSIsImlhdCI6MTU3NjA1MzAwOSwiZXhwIjoxNTc2MDU2NjA5fQ.xMUWtYipIm4QRnlxlhVVWBYMFgxDXfNx5G0ydbbrXLQ"
    }
}
```
---
#### 获取身份权限信息
**/title**
> 请求方式:GET

参数 |无
---|---
```
返回示例:
{
    "code":1,
    "mes":"成功",
    "data":{
        "id":11,
        "user":"房磊",
        "pwd":"123456",
        "identer":"1",
        "iat":1576053009,
        "exp":1576056609,
        "title":"学生",
        "viewInfo":{
            "title":"学生",
            "views":[
                {
                    "path":"/index/date",
                    "ctitle":"提交日期"
                },
                {
                    "path":"/index/show",
                    "ctitle":"展示成绩"
                }
            ] 
        }
    }
}
```







