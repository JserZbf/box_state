<template>
  <div class="vtable">
    <div class="title">故障状态</div>
    <div class="tableX">
      <el-table ref="singleTable" :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" align="center" label="序号">
        </el-table-column>
        <el-table-column property="item1" align="center" label="状态名称">
        </el-table-column>
        <el-table-column property="item2" align="center" label="是否保养">
        </el-table-column>
        <el-table-column property="item3" align="center" label="状态逻辑">
        </el-table-column>
        <el-table-column
          property="item4"
          align="center"
          width="140"
          label="颜色"
        >
          <template #default="scope">
            <popWin>
              <div class="infoB">
                <el-color-picker v-model="scope.row.color" show-alpha />
              </div>
            </popWin>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref, defineComponent, onMounted, inject } from "vue"; // 主要
// eslint-disable-next-line vue/valid-define-props
import popWin from "./popWin.vue";
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
});
const status = "";
const currentPage = ref(1);
const tableData = [
  {
    item1: "--",
    item2: "加工中",
    item3: "自动模式&设备运行",
    item4: 0,
    color: "rgba(112, 173, 71, 1)",
  },
  {
    item1: "--",
    item2: "DB1.DBX0.1",
    item3: "DB1.DBB1",
    item4: 1,
    color: "rgba(255, 192, 0, 1)",
  },
  {
    item1: "--",
    item2: "DB1.DBX0.1",
    item3: "DB1.DBB1",
    item4: 2,
    color: "rgba(237, 125, 49, 1)",
  },
  {
    item1: "--",
    item2: "DB1.DBX0.1",
    item3: "DB1.DBB1",
    item4: 3,
    color: "rgba(237, 49, 49, 1)",
  },
];
const currentRow = ref(null);

const handleSizeChange = (val) => {
  console.log(`每页 ${val} 条`);
};
const handleCurrentChange = (val) => {
  console.log(`当前页: ${val}`);
};

// export default {
//   name: "vtable",
//   components: {popWin},
//   props: {
//     id: {
//       type: String,
//       default() {
//         return '';
//       }
//     }
//   },
//   data() {
//     return {
//       currentPage: 1,
//       tableData: [{
//         item1: '--',
//         item2: '加工中',
//         item3: '自动模式&设备运行',
//         item4: 0,
//       }, {
//         item1: '--',
//         item2: 'DB1.DBX0.1',
//         item3: 'DB1.DBB1',
//         item4: 1,
//       }, {
//         item1: '--',
//         item2: 'DB1.DBX0.1',
//         item3: 'DB1.DBB1',
//         item4: 2,
//       }, {
//         item1: '--',
//         item2: 'DB1.DBX0.1',
//         item3: 'DB1.DBB1',
//         item4: 3,
//       },],
//       currentRow: null,
//     }
//   },
//   watch: {},
//   mounted() {
//   },
//   methods: {
//     handleSizeChange(val) {
//       console.log(`每页 ${val} 条`);
//     },
//     handleCurrentChange(val) {
//       console.log(`当前页: ${val}`);
//     }
//   }
// }
</script>

<style lang="scss" scoped>
.vtable {
  position: relative;
  width: calc(100% - 40px);
  margin: 0 auto;
}
:deep(.vtable) {
  .el-table,
  .el-table__expanded-cell {
    background: none;
  }

  .el-table th,
  .el-table tr {
    background: none;
    font-size: 13px;
  }

  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background: rgba(248, 251, 254, 1);
  }

  .has-gutter {
    background: rgba(242, 247, 252, 1);
    color: rgba(255, 255, 255, 1);
  }

  .el-table td,
  .el-table th.is-leaf {
    border: none;
    font-size: 13px;
    font-family: MiSans;
    font-weight: 400;
    color: rgba(95, 112, 132, 1);
  }

  .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: rgba(248, 251, 254, 1);
    font-size: 13px;
    font-family: MiSans;
    font-weight: 400;
  }

  .el-table td,
  .el-table th {
    padding: 7px 0;
  }

  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    display: none;
  }

  .is-scrolling-none::-webkit-scrollbar {
    width: 6px;
    height: 200px;
  }

  /*滚动条滑块*/
  .is-scrolling-none::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(242, 247, 252, 1);
    background: rgba(242, 247, 252, 1);
  }

  /*滚动条轨道*/
  .is-scrolling-none::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px #fff;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0);
  }

  //横向horizontal

  .is-scrolling-left::-webkit-scrollbar {
    width: 100%;
    height: 10px;
  }

  /*滚动条滑块*/
  .is-scrolling-left::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background: #fff;
    border-radius: 5px;
  }

  /*滚动条轨道*/
  .is-scrolling-left::-webkit-scrollbar-track {
  }

  /*滚动条轨道*/
  .is-scrolling-left::-webkit-scrollbar-track-piece {
    background-color: rgba(2, 6, 23, 0);
  }

  //横向滚动右侧
  .is-scrolling-right::-webkit-scrollbar {
    width: 100%;
    height: 10px;
  }

  /*滚动条滑块*/
  .is-scrolling-right::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background: #fff;
    border-radius: 5px;
  }

  /*滚动条轨道*/
  .is-scrolling-right::-webkit-scrollbar-track {
  }

  /*滚动条轨道*/
  .is-scrolling-right::-webkit-scrollbar-track-piece {
    background-color: rgba(2, 6, 23, 0);
  }

  //横向滚动中部
  .is-scrolling-middle::-webkit-scrollbar {
    width: 100%;
    height: 10px;
  }

  /*滚动条滑块*/
  .is-scrolling-middle::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    background: #fff;
    border-radius: 5px;
  }

  /*滚动条轨道*/
  .is-scrolling-middle::-webkit-scrollbar-track {
  }

  /*滚动条轨道*/
  .is-scrolling-middle::-webkit-scrollbar-track-piece {
    background-color: rgba(2, 6, 23, 0);
  }
}
.title {
  font-size: 16px;
  font-family: MiSans;
  font-weight: bold;
  color: #333333;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}

.color {
  width: 14px;
  height: 14px;
  background: #70ad47;
}

.infoB {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
