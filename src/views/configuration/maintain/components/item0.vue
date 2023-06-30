<template>
  <div class="itemBody">
    <div class="title">
      <div class="titlel">刀具主类型</div>
      <div class="titler">
        <span>编辑模式</span>
        <el-switch
          v-model="value"
          active-color="rgba(88, 100, 255, 1)"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
    </div>
    <div class="search">
      <input type="text" placeholder="请输入名称搜索" />
      <img src="@/assets/weihu/icon_search.png" alt="" />
    </div>
    <div class="treeBody">
      <el-tree
        ref="tree"
        node-key="id"
        :data="data"
        icon-class=" "
        :props="defaultProps"
        :default-expanded-keys="expandedKeys"
        :default-checked-keys="checkedKeys"
        :check-strictly="true"
        @check="handleNodeClick"
      >
        <template #default="{ node, data }">
          <div class="custom-tree-node">
            <div class="tree-node">
              <div class="tree-node-label">
                <icon :type="node.level" :node="node" />
                <span
                  class="ellipsis"
                  style="user-select: none"
                  :title="node.label"
                  >{{ node.label }}</span
                >
              </div>
              <div class="iconInfo">
                <img src="@/assets/weihu/icon_add.png" alt="" />
                <img src="@/assets/weihu/icon_edit.png" alt="" />
                <img src="@/assets/weihu/icon_delete.png" alt="" />
              </div>
            </div>
          </div>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<script setup>
import vtable from "./vtable.vue";
import icon from "./icon.vue";
import { ref } from "vue";

const value = ref(true);
const organizationTree = ref([]);
const checkedKeys = ref([]);
const expandedKeys = ref([]);
const data = [
  {
    label: "主标题一",
    children: [
      {
        label: "副标题一1-0",
        children: [
          {
            label: "子副标题一1",
            children: [
              {
                label: "文件1",
              },
              {
                label: "文件1",
              },
              {
                label: "文件1",
              },
              {
                label: "文件1",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "主标题一",
    children: [
      {
        label: "副标题一1-0",
        children: [
          {
            label: "子副标题一1",
            children: [
              {
                label: "文件1",
              },
              {
                label: "文件1",
              },
              {
                label: "文件1",
              },
              {
                label: "文件1",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "主标题一",
    children: [
      {
        label: "副标题一1-0",
        children: [
          {
            label: "子副标题一1",
            children: [
              {
                label: "文件1",
              },
              {
                label: "文件1",
              },
              {
                label: "文件1",
              },
              {
                label: "文件1",
              },
            ],
          },
        ],
      },
    ],
  },
];
const defaultProps = {
  children: "children",
  label: "label",
};
const handleNodeClick = (data) => {
  this.message = data.title;
};
const treeLeaf = (data, node) => {
  console.log(data, node);
  return !data.children;
};
// export default {
//   name: "item1",
//   components: { vtable, icon },
//   props: {
//     id: {
//       type: String,
//       default() {
//         return "";
//       },
//     },
//   },
//   data() {
//     return {
//       value: true,
//       organizationTree: [],
//       checkedKeys: [],
//       expandedKeys: [],
//       // data: ,
//       defaultProps: {
//         children: "children",
//         label: "label",
//       },
//     };
//   },
//   watch: {},
//   mounted() {},
//   methods: {
//     handleNodeClick(data) {
//       this.message = data.title;
//     },
//     treeLeaf(data, node) {
//       console.log(data, node);
//       return !data.children;
//     },
//   },
// };
</script>

<style lang="scss" scoped>
.itemBody {
  width: 330px;
  position: relative;
  height: calc(100% - 0px);
  padding: 0px 0 0 0;
  background: #fff;
  border-radius: 16px;

  .title {
    font-size: 16px;
    font-family: MiSans;
    font-weight: bold;
    color: #333333;
    margin-left: 20px;
    margin-right: 20px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    .titlel {
    }

    .titler {
      font-size: 14px;
      font-family: MiSans;
      font-weight: 500;
      color: #666666;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;

      span {
        margin-right: 5px;
      }
    }
  }
}

.search {
  width: 290px;
  height: 36px;
  background: #f5f7fa;
  border-radius: 6px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  input {
    width: 100%;
    height: 100%;
    border: 0;
    background: none;
    margin-left: 20px;
    outline: none;
  }

  img {
    width: 15px;
    height: 15px;
    margin-right: 20px;
  }
}

.treeBody {
  width: 290px;
  margin: 0 auto;
  margin-top: 10px;

  :deep(.treeBody) {
    /* 设置树形最外层的背景颜色和字体颜色 */
    .el-tree {
      color: rgba(51, 51, 51, 1);
      background: transparent;
    }

    /* 设置三角形图标的颜色 */
    .el-tree-node__expand-icon {
      color: rgba(51, 51, 51, 1);
    }

    /* 设置节点鼠标悬浮三角图标鼠标悬浮的颜色 */
    .el-tree-node__content:hover .el-tree-node__expand-icon {
      color: #000;
    }

    /* .el-tree-node__content:hover .el-tree-node__expand-icon.is-leaf {
      color: transparent;
    } */

    /* 树节点鼠标悬浮式改变背景色，字体颜色 */
    .el-tree-node__content:hover {
      background-color: rgba(243, 244, 255, 1);
      color: rgba(88, 100, 255, 1);
    }

    /* 改变节点高度 */
    .el-tree-node__content {
      height: 36px;
    }

    /* 节点前边的三角图标并不会被节点样式影响，需要单独修改 当前激活的颜色*/
    .el-tree-node:focus > .el-tree-node__content .el-tree-node__expand-icon {
      color: rgba(51, 51, 51, 1);
    }

    /* 改变被点击节点背景颜色，字体颜色 */
    .el-tree-node:focus > .el-tree-node__content {
      background-color: rgba(243, 244, 255, 1);
      color: rgba(88, 100, 255, 1);
    }
  }
}

.iconInfo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  img {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
}

.custom-tree-node {
  width: 100%;
}

.tree-node {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  flex-direction: row;
  align-content: flex-start;
}

.el-tree-node__expand-icon {
  width: 30px;
}

.tree-node-label {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
