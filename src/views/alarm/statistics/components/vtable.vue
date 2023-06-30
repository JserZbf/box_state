<template>
  <div class="vtable">
    <div class="vttable2">
      <el-table
        ref="singleTable"
        :data="tableData"
        height="100%"
        stripe
        style="width: 100%"
      >
        <el-table-column type="index" width="100" align="center" label="序号">
        </el-table-column>
        <el-table-column property="type1" align="center" label="一级分类">
        </el-table-column>
        <el-table-column property="type2" align="center" label="二级分类">
        </el-table-column>
        <el-table-column property="desc" align="center" label="停机描述">
        </el-table-column>
        <el-table-column property="date" align="center" label="停机开始时间">
        </el-table-column>
        <el-table-column property="dateTime" align="center" label="停机时长">
        </el-table-column>
        <el-table-column property="renyuan" align="center" label="反馈人员">
        </el-table-column>
        <el-table-column property="status" align="center" label="状态">
        </el-table-column>
        <el-table-column property="status" align="center" label="操作">
          <template #default>
            <el-link type="primary">反馈</el-link>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="operation">
      <div class="operationr">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          background
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total,sizes, prev, pager, next,jumper"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vtable",
  components: {},
  props: {
    id: {
      type: String,
      default() {
        return "";
      },
    },
  },
  data() {
    return {
      status: "",
      currentPage: 1,
      tableData: [
        {
          dateTime: "00:25:36",
          date: "2022-01-27 12:16:20",
          renyuan: "反馈人员",
          desc: "--",
          type1: "--",
          type2: "--",
          status: "未反馈",
        },
        {
          dateTime: "00:25:36",
          date: "2022-01-27 12:16:20",
          renyuan: "反馈人员",
          desc: "--",
          type1: "--",
          type2: "--",
          status: "未反馈",
        },
        {
          dateTime: "00:25:36",
          date: "2022-01-27 12:16:20",
          renyuan: "反馈人员",
          desc: "--",
          type1: "--",
          type2: "--",
          status: "未反馈",
        },
        {
          dateTime: "00:25:36",
          date: "2022-01-27 12:16:20",
          renyuan: "反馈人员",
          desc: "--",
          type1: "--",
          type2: "--",
          status: "未反馈",
        },
        {
          dateTime: "00:25:36",
          date: "2022-01-27 12:16:20",
          renyuan: "反馈人员",
          desc: "--",
          type1: "--",
          type2: "--",
          status: "未反馈",
        },
        {
          dateTime: "00:25:36",
          date: "2022-01-27 12:16:20",
          renyuan: "反馈人员",
          desc: "--",
          type1: "--",
          type2: "--",
          status: "未反馈",
        },
        {
          dateTime: "00:25:36",
          date: "2022-01-27 12:16:20",
          renyuan: "反馈人员",
          desc: "--",
          type1: "--",
          type2: "--",
          status: "未反馈",
        },
        {
          dateTime: "00:25:36",
          date: "2022-01-27 12:16:20",
          renyuan: "反馈人员",
          desc: "--",
          type1: "--",
          type2: "--",
          status: "未反馈",
        },
        {
          dateTime: "00:25:36",
          date: "2022-01-27 12:16:20",
          renyuan: "反馈人员",
          desc: "--",
          type1: "--",
          type2: "--",
          status: "未反馈",
        },
        {
          dateTime: "00:25:36",
          date: "2022-01-27 12:16:20",
          renyuan: "反馈人员",
          desc: "--",
          type1: "--",
          type2: "--",
          status: "未反馈",
        },
      ],
      currentRow: null,
    };
  },
  watch: {},
  mounted() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.vttable2 {
  position: relative;
  height: calc(100% - 40px);
  width: 100%;
}

.vtable {
  position: relative;
  height: calc(100% - 48px);
  width: 100%;

  :deep(.vttable2) {
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
  justify-content: flex-end;
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
</style>
