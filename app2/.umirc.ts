import { defineConfig } from '@umijs/max';

export default defineConfig({
  qiankun: {
    slave: {},
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // layout: {
  //   title: '@umijs/max',
  // },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Page1',
      path: '/page1',
      component: './page1',
    },
    {
      path: '/page2',
      component: './page2',
    },
    {
      path: '/pageMicroApp',
      component: './p_microapp',
    },
    {
      path: '/userSelect',
      component: './userSelect',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
  ],
  npmClient: 'yarn',
});
