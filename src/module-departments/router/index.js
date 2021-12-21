/*
 * @Author: test <test> 
 * @Description: 部门 
 * @Date: 2018-04-13 16:13:27 
 * @Last Modified by: hans.taozhiwei
 * @Last Modified time: 2018-09-03 11:12:47
 */

import Layout from '@/module-dashboard/pages/layout'
const _import = require('@/router/import_' + process.env.NODE_ENV)

export default [
  {
    root: true,
    path: '/departments',
    component: Layout,
    redirect: 'noredirect',
    name: 'departments',
    meta: {
      title: '组织架构管理',
      icon: 'architecture'
    },
    children: [
      {
        path: 'index',
        component: _import('departments/pages/index'),
        name: 'departments-index',
        meta: {title: '部门', icon: 'architecture', noCache: true}
      }
    ]
  }
]
