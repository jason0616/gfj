const route = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "赛事简介"
    },
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "index" */ "@/views/index/Info")
  },
  {
    path: "/404",
    name: "页面不存在",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/notExist/404")
  },
  {
    path: "/club",
    name: "club",
    meta: {
      title: "功夫联盟"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "club" */ "@/views/club/Club")
  },
  {
    path: "/detail",
    name: "detail",
    meta: {
      title: "功夫联盟"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "club" */ "@/views/club/Detail")
  },
  {
    path: "/award",
    name: "award",
    meta: {
      title: "中奖名单"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "competition" */ "@/views/competition/Award.vue")
  },
  {
    path: "/guess",
    name: "guess",
    meta: {
      title: "竞猜有奖",
      checkLogin: true
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "competition" */ "@/views/competition/Guess.vue")
  },

  {
    path: "/result",
    name: "result",
    meta: {
      title: "我的报名"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "pay" */ "@/views/pay/Result.vue")
  },
  {
    path: "/rule",
    name: "rules",
    meta: {
      title: "赛事规则"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "competition" */ "@/views/competition/Rule.vue")
  },
  {
    path: "/news",
    name: "news",
    meta: {
      title: "赛事新闻"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "competition" */ "@/views/competition/News.vue")
  },
  {
    path: "/join",
    name: "join",
    meta: {
      title: "填写资料",
      checkLogin: true
    },

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "join" */ "@/views/join/Join")
  },
  {
    path: "/my",
    name: "my",
    meta: {
      title: "我的报名"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "person" */ "@/views/person/My")
  },
  {
    path: "/pay",
    name: "pay",
    meta: {
      title: "支付页面"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/pay/Pay.vue")
  },
  {
    path: "/list",
    name: "list",
    meta: {
      title: "参赛名单"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "competition" */ "@/views/competition/List.vue")
  },
  {
    path: "*",
    name: "404",
    redirect: "/404"
  }
];
export default route;
