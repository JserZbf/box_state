import { createRouter, createWebHashHistory } from "vue-router";
const routerHistory = createWebHashHistory();
// eslint-disable-next-line array-bracket-newline

import Main from "@/components/layouts/index.vue";

export const routes = [
  //   {
  //     path: "/",
  //     name: "dashboard",
  //     component: Overview,
  //     children: [
  //       {
  //         path: "/state/overview",
  //         component: () => import("@/views/statusMonitoring/overviewState.vue"),
  //         name: "设备概览",
  //         meta: {
  //           title: "设备概览",
  //           icon: "",
  //         },
  //       },
  //     ],
  //   },
  {
    path: "/state",
    name: "状态监控",
    //   redirect: "/state/overview",
    component: Main,
    icon: "icon1",
    children: [
      {
        path: "/state/overview",
        component: () => import("@/views/statusMonitoring/overviewState.vue"),
        name: "设备概览",
        meta: {
          title: "设备概览",
          icon: "",
        },
      },
      {
        path: "/state/running",
        component: () => import("@/views/statusMonitoring/runningState.vue"),
        name: "运行状态",
        meta: {
          title: "运行状态",
          icon: "",
        },
      },
      {
        path: "/state/order",
        component: () => import("@/views/statusMonitoring/orderState.vue"),
        name: "工单状态",
        meta: {
          title: "工单状态",
          icon: "",
        },
      },
      {
        path: "/state/data",
        component: () => import("@/views/statusMonitoring/dataState.vue"),
        name: "参数状态",
        meta: {
          title: "参数状态",
          icon: "",
        },
      },
    ],
  },
  {
    path: "/task",
    name: "任务管理",
    icon: "icon2",
    component: Main,
    children: [
      {
        path: "/task/maintain",
        component: () => import("@/views/task/taskMaintain.vue"),
        name: "维修任务",
        meta: {
          title: "维修任务",
          icon: "",
        },
      },
      {
        path: "/task/production",
        component: () => import("@/views/task/taskProduction.vue"),
        name: "生产任务",
        meta: {
          title: "生产任务",
          icon: "",
        },
      },
      {
        path: "/task/plan",
        component: () => import("@/views/task/taskPlan.vue"),
        name: "保养计划",
        meta: {
          title: "保养计划",
          icon: "",
        },
      },
      {
        path: "/task/upkeep",
        component: () => import("@/views/task/taskUpkeep.vue"),
        name: "保养任务",
        meta: {
          title: "保养任务",
          icon: "",
        },
      },
    ],
  },
  {
    path: "/alarm",
    name: "报警管理",
    icon: "icon3",
    component: Main,
    children: [
      {
        path: "/alarm/statistics",
        component: () => import("@/views/alarm/statistics/index.vue"),
        name: "报警统计",
        meta: {
          title: "报警统计",
          icon: "",
        },
      },
      {
        path: "/alarm/safeguard",
        component: () => import("@/views/alarm/safeguard/index.vue"),
        name: "报警码维护",
        meta: {
          title: "报警码维护",
          icon: "",
        },
      },
      {
        path: "/alarm/way",
        component: () => import("@/views/alarm/way/index.vue"),
        name: "报警方式",
        meta: {
          title: "报警方式",
          icon: "",
        },
      },
    ],
  },
  {
    path: "/type",
    name: "维护管理",
    icon: "icon4",
    component: Main,
    children: [
      {
        path: "/type/fill",
        component: () => import("@/views/stick/fill/index.vue"),
        name: "维护填报",
        meta: {
          title: "维护填报",
          icon: "",
        },
      },
      {
        path: "/type/stick",
        component: () => import("@/views/stick/type/index.vue"),
        name: "类别维护",
        meta: {
          title: "类别维护",
          icon: "",
        },
      },
    ],
  },
  {
    path: "/configuration",
    name: "参数配置",
    icon: "icon5",
    component: Main,
    children: [
      {
        path: "/configuration/maintain",
        component: () => import("@/views/configuration/maintain/index.vue"),
        name: "产品维护",
        meta: {
          title: "产品维护",
          icon: "",
        },
      },
      {
        path: "/configuration/collect",
        component: () => import("@/views/configuration/collect/index.vue"),
        name: "采集参数",
        meta: {
          title: "采集参数",
          icon: "",
        },
      },
      {
        path: "/configuration/state",
        component: () => import("@/views/configuration/state/index.vue"),
        name: "状态配置",
        meta: {
          title: "状态配置",
          icon: "",
        },
      },
      {
        path: "/configuration/processing",
        component: () => import("@/views/configuration/processing/index.vue"),
        name: "加工配置",
        meta: {
          title: "加工配置",
          icon: "",
        },
      },
      {
        path: "/configuration/account",
        component: () => import("@/views/configuration/account/index.vue"),
        name: "账号管理",
        meta: {
          title: "账号管理",
          icon: "",
        },
      },
    ],
  },
];

// 公共路由
const router = createRouter({
  history: routerHistory,
  routes: routes,
});

//前置路由
router.beforeEach((from, to, next) => {
  console.log(from);
  console.log(to);
  if (from.meta.title) {
    next();
  } else {
    console.log("没有标题");
    next();
  }
});

export default router;
