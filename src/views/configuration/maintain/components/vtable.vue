<template>
  <div class="vtable">
    <div class="tableX">
      <el-table
        ref="singleTable"
        :data="tableData"
        height="100%"
        stripe
        style="width: 100%">
        <el-table-column
          type="selection"
          align="center"
          width="55">
        </el-table-column>
        <el-table-column
          type="index"
          align="center"
          label="序号">
        </el-table-column>
        <el-table-column
          property="item1"
          align="center"
          label="产品名称">
        </el-table-column>
        <el-table-column
          property="item2"
          align="center"
          label="产品代码">
        </el-table-column>
        <el-table-column
          property="item3"
          align="center"
          label="工序">
        </el-table-column>
        <el-table-column
          property="item4"
          align="center"
          label="标准工时">
        </el-table-column>
        <el-table-column
          property="item5"
          align="center"
          label="操作">
          <template slot-scope="scope">
            <el-link type="primary">修改</el-link>
            <el-link class="ml20" type="danger">删除</el-link>
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
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref, defineComponent, onMounted, inject } from "vue"; // 主要
// eslint-disable-next-line vue/valid-define-props
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
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }, {
        item1: '--',
        item2: 'DB1.DBX0.1',
        item3: 'DB1.DBB1',
        item4: '01',
        item5: '1'
      }
];
const currentRow = ref(null);

const handleSizeChange = (val) => {
  console.log(`每页 ${val} 条`);
};
const handleCurrentChange = (val) => {
  console.log(`当前页: ${val}`);
};
</script>

<style lang="scss" scoped>
.vtable {
  position: relative;
  height: calc(100% - 20px);
  width: calc(100% - 40px);
  padding-top: 20px;
  margin: 0 auto;

  :deep(.tableX) {
    .el-table, .el-table__expanded-cell {
      background: none;
    }

    .el-table th, .el-table tr {
      background: none;
      font-size: 13px;
    }

    .el-table--enable-row-hover .el-table__body tr:hover > td {
      background: rgba(248, 251, 254, 1.00);

    }

    .has-gutter {
      background: rgba(242, 247, 252, 1);
      color: rgba(255, 255, 255, 1);
    }

    .el-table td, .el-table th.is-leaf {
      border: none;
      font-size: 13px;
      font-family: MiSans;
      font-weight: 400;
      color: rgba(95, 112, 132, 1.00);
    }

    .el-table--striped .el-table__body tr.el-table__row--striped td {
      background: rgba(248, 251, 254, 1.00);
      font-size: 13px;
      font-family: MiSans;
      font-weight: 400;
    }

    .el-table td, .el-table th {
      padding: 7px 0;
    }

    .el-table--border::after, .el-table--group::after, .el-table::before {
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
      box-shadow: inset 0 0 5px rgba(242, 247, 252, 1.00);
      background: rgba(242, 247, 252, 1.00);
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
      background: #0FA5E5;
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
        color: #FFFFFF;
        margin-left: 7px;
      }
    }

    .but2 {
      width: 110px;
      height: 36px;
      background: #34CEAF;
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
        color: #FFFFFF;
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

.tableX {
  position: relative;
  height: calc(100% - 60px);
}

.ml20 {
  margin-left: 20px;
}
</style>
