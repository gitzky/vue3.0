import  { createRouter,createWebHashHistory  }   from 'vue-router'
// 路由设置页面，在这里可以设置按需加载路由

const routes = [
    {
        path:'/',
        name:'app',
        component:()=> import ("@/views"),
        children:[
            {
                path:'/a',
                name:'A',
                component:()=> import ("@/components/a"), 
            },
            {
                path:'/b',
                name:'B',
                component:()=> import ("@/components/b"), 
            }
        ]
    },
    {
        path:'/foo',
        name:'foo',
        component:()=> import ("@/views/foo"),
    }
    
]

// 实例化路由 传入routes 配置
const router =  createRouter({
    history:createWebHashHistory(), // 此处是hash模式
    routes 
})

// 抛出  生成vue实例并use(),要在 setup 函数中访问路由，请调用 useRouter 或 useRoute 函数,全局用this.$router()
// createApp(App).use(router).mount("#app")
export default router