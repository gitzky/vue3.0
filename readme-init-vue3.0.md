## vue 3.0使用手册

### 一、环境部署

#### 1、安装node环境

```cmd
//下载安装
https://nodejs.org/dist/v16.13.1/node-v16.13.1-x64.msi
```

#### 2、安装cnpm

```cmd
npm install -g cnpm --registry=https://registry.npmmirror.com
```

#### 3、安装脚手架

```cmd
cnpm install @vue/cli -g
```



### 二、vue安装

#### 1、vue init webpack project 初始化一个项目

```cmd
vue init webpack project 初始化一个vue项目
安装完成之后运行
npm install
npm run dev
```

#### 2、vue create project 初始化一个项目

```cmd
vue create project  vue-cli 初始化一个vue项目
运行
npm run serve
```

### 三、vue配置

### 四、vue目录

- node_moudules：依赖包
- public：项目入口文件index.html
- src：vue主要内容
  - assets：静态资源目录（css，js，img，fonts）
  - components：组件库
  - router：路由存放
  - store：vuex使用
  - api：api接口层
  - utils：工具类
  - views：视图模板存放
- App.vue：子组件
- main.js：vue配置入口
- babel.config.js配置
- package.json依赖资源配置
- package-lock.json 记录模块与模块之间的依赖关系，锁定包的版本
- env 配置项目

### 五、vue基础组件库

### 六、vue插件使用

### 七、vue优化

### 、vue打包