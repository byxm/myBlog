#  席梦的个人博客
这是我制作的个人博客的开源项目。主要使用react+redux+webpack技术栈进行开发,对应工程化前端开发规范，适配移动端与PC端，以下是项目的简介。

![PC端页面](http://img.027cgb.com/615103/687474703a2f2f69312e6276696d672e636f6d2f3637363537372f393538363363323930663164666134322e706e67.png
)
------
![移动端页面](http://img.027cgb.com/615103/687474703a2f2f69312e6276696d672e636f6d2f3637363537372f393538363363323930663164666134322e706e67.png)

- 预览：https://byxm.github.io/blogOnline

## 项目结构

```
- build               webpack开发打包配置文件，包含开发环境生产环境构建
- public              公共html模板入口文件，vendor.dll.js公共依赖包
- src                 项目资源文件
  -assets             放置静态图片，字体资源文件
  -components         封装的reactUI公共组件，用于渲染静态数据
  -containers         封装的react容器组件，处理页面功能主逻辑
  -generalComponents  通用组件封装，包含Modal提示组件，loading加载组件
  -httpAjax           基于优秀的ajax库axios的二次封装，采用promise异步处理
  -lazyLoad           react异步按需加载组件方法的封装
  -redux              redux状态管理配置文件
  -routes             react路由管理组件入口配置
  -test               测试组件
  -utils              页面公共方法
- static              公共依赖包生成文件的存放目录
- .babelrc            babel语法转换配置文件
- .eslintrc.js        eslint静态类型检测配置文件
- .gitignore          git上传忽略项配置文件
- bundle-config.json  打包公共依赖映射路径文件
- package.json        定义项目包，配置信息的文件
- postcss.config      定义js插件转换样式的工具
```

## 说明
我的这个项目从构建，开发，打包上线均由本人独立完成。环境构建使用webpack4.28.2版本从零构建，包含[开发环境和生产环境配置](https://github.com/byxm/myBlog/tree/master/build)。项目开发采用react16.7.0版本，搭配redux做状态管理，也是用了一点主流的[immutablejs](https://github.com/byxm/myBlog/blob/master/src/redux/home.redux.js)数据结构搭配redux，使用组件化开发的思想将页面的各个功能块拆分的尽量细致。在css预编译语言方面采用了sass进行开发，独立cssmodules避免样式的冲突，符合前端模块化开发的规范。数据交互使用[easy-mock](https://www.easy-mock.com/login)进行模拟，数据请求都是真实的。整体交互比较简单，尽量将自己现在所学的东西综合在里面，对自己的技术成长有了很大的帮助。博客页面UI参考了[这位大神的](https://lingxiankong.github.io/)。 项目本身还存在很多未能解决的问题，非常欢迎您的指点，一起学习进步。





