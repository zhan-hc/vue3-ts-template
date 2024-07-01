# 项目快捷模板
可以通过脚手架来安装项目模板
```sh
npm install zhc-cli -g
zhc create [project-name]
```

## vue3-ts-默认基础模板(分支-default)
就是一个基础的简单模板

### 功能
- vue3 + vue-router + pinia
- axios + sass
- mock


#### 接口封装axios
axios调用demo
```
  const [e, r] = await api.getUserInfo(userid)
  if (!e && r) this.userInfo = r.data.userinfo
```


## vue3-ts-mobile模板(分支-mobile)


### 功能
- vue3 + vue-router + pinia
- axios + sass + vant
- 移动端适配方案（postcss-pxtorem + amfe-flexible）
- 初始化css(normalize.css)


#### 接口封装axios
axios调用demo
```
  const [e, r] = await api.getUserInfo(userid)
  if (!e && r) this.userInfo = r.data.userinfo
```

#### 样式style
适用的是 `sass` ，src/assets/style/mixin.scss中定义了sass变量可以全局引用
