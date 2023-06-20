import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './public-path.js';
import routes from './router';
import store from './store';
// createApp(App).use(store).use(router).mount('#app')

let router = null
let instance:any = null

function render({ container }:any = {}){
  router = createRouter({
    routes,
    history: createWebHistory((window as any).__POWERED_BY_QIANKUN__ ? '/app1' : '/'),
    // base: (window as any).__POWERED_BY_QIANKUN__ ? '/app1' : '/'
  })
    
  instance = createApp(App)
  instance.use(store).use(router).mount(container ? container.querySelector('#app') : '#app')
}

// 如果是单独启动的子文件，保证仍能正常运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render()
}

// 生命周期的钩子函数
// 导出第一次进入当前子应用的钩子函数
export async function bootstrap() {
  console.log('第一次进入admin')
}

// 导出每次创建挂载时的钩子函数
export async function mount(props:any) {
  console.log("创建挂载组件",props)
  render(props)
}

// 导出每次销毁时的钩子函数
export async function unmount(props:any) {
  console.log("销毁组件")
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  router = null
}