<template>
  <div class="vtable">
    <el-table
      class="table_box"
      ref="singleTable"
      :data="tableData"
      height="100%"
      stripe
      style="width: 100%"
    >
      <el-table-column type="selection" align="center" width="55">
      </el-table-column>
      <el-table-column property="item1" align="center" label="报警级别">
      </el-table-column>
      <el-table-column property="item2" align="center" label="持续时间">
      </el-table-column>
      <el-table-column property="item3" align="center" label="间隔时间">
      </el-table-column>
      <el-table-column property="item4" align="center" label="发送形式">
      </el-table-column>
      <el-table-column property="item5" align="center" label="发送账号">
      </el-table-column>
      <el-table-column property="item6" align="center" label="是否生效">
      </el-table-column>
      <el-table-column property="item7" align="center" label="操作">
        <template slot-scope="scope">
          <el-link type="primary" style="color: #5864ff">修改</el-link>
        </template>
      </el-table-column>
    </el-table>
    <div class="operation">
      <div class="operationl">
        <div class="but">
          <img src="@/assets/icon_add.png" alt="" />
          <span>批量完成</span>
        </div>
        <div class="but2">
          <img src="@/assets/icon_delete_all.png" alt="" />
          <span>批量取消</span>
        </div>
      </div>
      <div class="operationr">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          background
          :page-sizes="[10, 200, 300, 400]"
          :page-size="10"
          layout="total,sizes, prev, pager, next,jumper"
          :total="tableData.length"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const tableData = [
  {
    item1: "1",
    item2: "5分钟",
    item3: "15分钟",
    item4: "邮件",
    item5: "123@123",
    item6: "是",
  },
  {
    item1: "1",
    item2: "5分钟",
    item3: "15分钟",
    item4: "邮件",
    item5: "123@123",
    item6: "是",
  },
  {
    item1: "1",
    item2: "5分钟",
    item3: "15分钟",
    item4: "邮件",
    item5: "123@123",
    item6: "是",
  },
  {
    item1: "1",
    item2: "5分钟",
    item3: "15分钟",
    item4: "邮件",
    item5: "123@123",
    item6: "是",
  },
  {
    item1: "1",
    item2: "5分钟",
    item3: "15分钟",
    item4: "邮件",
    item5: "123@123",
    item6: "是",
  },
  {
    item1: "1",
    item2: "5分钟",
    item3: "15分钟",
    item4: "邮件",
    item5: "123@123",
    item6: "是",
  },
  {
    item1: "1",
    item2: "5分钟",
    item3: "15分钟",
    item4: "邮件",
    item5: "123@123",
    item6: "是",
  },
  {
    item1: "1",
    item2: "5分钟",
    item3: "15分钟",
    item4: "邮件",
    item5: "123@123",
    item6: "是",
  },
  {
    item1: "1",
    item2: "5分钟",
    item3: "15分钟",
    item4: "邮件",
    item5: "123@123",
    item6: "是",
  },
  {
    item1: "1",
    item2: "5分钟",
    item3: "15分钟",
    item4: "邮件",
    item5: "123@123",
    item6: "是",
  }
];
const currentPage = ref(1);
// const currentRow = ref(null);
// export default {
//   name: "vtable",
//   components: {},
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
//       currentPage: 1,
// tableData: [
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
//   {
//     item1: "1",
//     item2: "5分钟",
//     item3: "15分钟",
//     item4: "邮件",
//     item5: "123@123",
//     item6: "是",
//   },
// ],
//       currentRow: null,
//     };
//   },
//   watch: {},
//   mounted() {},
//   methods: {
//     handleSizeChange(val) {
//       console.log(`每页 ${val} 条`);
//     },
//     handleCurrentChange(val) {
//       console.log(`当前页: ${val}`);
//     },
//   },
// };
</script>

<style lang="scss" scoped>
.vtable {
  position: relative;
  height: calc(100% - 60px);
  width: calc(100% - 40px);
  margin: 0 auto;
  :deep(.table_box) {
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
}

.operation {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;

  .operationl {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;

    .but {
      width: 110px;
      height: 36px;
      background: #0fa5e5;
      border-radius: 6px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;

      img {
        width: 16px;
        height: 16px;
      }

      span {
        font-size: 14px;
        font-family: MiSans;
        font-weight: 500;
        color: #ffffff;
        margin-left: 7px;
      }
    }

    .but2 {
      width: 110px;
      height: 36px;
      background: #34ceaf;
      border-radius: 6px;
      margin-left: 20px;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;

      img {
        width: 16px;
        height: 16px;
      }

      span {
        font-size: 14px;
        font-family: MiSans;
        font-weight: 500;
        color: #ffffff;
        margin-left: 7px;
      }
    }
  }

  .operationr {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
  }
}

.detail {
  width: 100%;

  img {
    width: 12px;
    height: 12px;
    margin-left: 8px;
  }
}
</style>
