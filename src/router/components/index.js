export default [
  {
    path: '/components/count-to',
    component: () => import(/* webpackChunkName: "components-count-to" */ '@/views/components/count-to/index.vue')
  },
  {
    path: '/components/tree-table',
    component: () => import(/* webpackChunkName: "components-tree-table" */ '@/views/components/tree-table/index.vue')
  },
  {
    path: '/components/drag-list',
    component: () => import(/* webpackChunkName: "components-drag-list" */ '@/views/components/drag-list/index.vue')
  }
]
