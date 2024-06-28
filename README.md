# vue3-ts-移动端模板

## Project Setup

```sh
pnpm install
pnpm dev
```

## 功能
- vue3 + vue-router + pinia
- axios + scss + vant
- 移动端适配方案（postcss-pxtorem + amfe-flexible）
- 初始化css(normalize.css)


### 接口封装axios
axios调用demo
```
  const [e, r] = await api.getUserInfo(userid)
  if (!e && r) this.userInfo = r.data.userinfo
```

### 样式style
适用的是 `sass` ，src/assets/style/mixin.scss中定义了sass变量可以全局引用
