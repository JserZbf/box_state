<template>
  <div class="vtable">
    <el-table
      ref="singleTable"
      :data="tableData"
      height="100%"
      stripe
      style="width: 100%"
    >
      <el-table-column type="selection" align="center" width="55">
      </el-table-column>
      <el-table-column type="index" align="center" label="序号">
      </el-table-column>
      <el-table-column property="item1" align="center" label="报警码">
      </el-table-column>
      <el-table-column property="item2" align="center" label="最近发生时间">
      </el-table-column>
      <el-table-column property="item3" align="center" label="上报来源">
      </el-table-column>
      <el-table-column property="title3" align="center" label="上报来源">
        <template #default="scoped">
          <div class="detail" @click="dialogVisible = true">
            <el-link type="primary">操作</el-link>
          </div>
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
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total,sizes, prev, pager, next,jumper"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>

    <el-dialog
      v-model="dialogVisible"
      title="编辑"
      width="30%"
      :before-close="handleClose"
    >
      <el-form :model="form" label-width="120px">
        <el-form-item label="报警码">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="默认一级分类">
          <el-select v-model="form.region" placeholder="默认一级分类">
            <el-option label="1" value="shanghai" />
            <el-option label="2" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="默认二级分类">
          <el-select v-model="form.region" placeholder="默认一级分类">
            <el-option label="1" value="shanghai" />
            <el-option label="2" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="报警描述">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item label="严重等级">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue"; // 主要
import { ElMessageBox } from "element-plus";
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
const onSubmit = () => {
  console.log("submit!");
};
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
    item1: "2022-01-27 12:16:20",
    item2: "2022-01-27 12:16:20",
    item3: "--",
    item4: "--",
    item5: "停机无原因",
    item6: "--",
    item7: "2022-01-27 12:16:20",
  },
  {
    item1: "2022-01-27 12:16:20",
    item2: "2022-01-27 12:16:20",
    item3: "--",
    item4: "--",
    item5: "停机无原因",
    item6: "--",
    item7: "2022-01-27 12:16:20",
  },
  {
    item1: "2022-01-27 12:16:20",
    item2: "2022-01-27 12:16:20",
    item3: "--",
    item4: "--",
    item5: "停机无原因",
    item6: "--",
    item7: "2022-01-27 12:16:20",
  },
  {
    item1: "2022-01-27 12:16:20",
    item2: "2022-01-27 12:16:20",
    item3: "--",
    item4: "--",
    item5: "停机无原因",
    item6: "--",
    item7: "2022-01-27 12:16:20",
  },
  {
    item1: "2022-01-27 12:16:20",
    item2: "2022-01-27 12:16:20",
    item3: "--",
    item4: "--",
    item5: "停机无原因",
    item6: "--",
    item7: "2022-01-27 12:16:20",
  },
  {
    item1: "2022-01-27 12:16:20",
    item2: "2022-01-27 12:16:20",
    item3: "--",
    item4: "--",
    item5: "停机无原因",
    item6: "--",
    item7: "2022-01-27 12:16:20",
  },
  {
    item1: "2022-01-27 12:16:20",
    item2: "2022-01-27 12:16:20",
    item3: "--",
    item4: "--",
    item5: "停机无原因",
    item6: "--",
    item7: "2022-01-27 12:16:20",
  },
  {
    item1: "2022-01-27 12:16:20",
    item2: "2022-01-27 12:16:20",
    item3: "--",
    item4: "--",
    item5: "停机无原因",
    item6: "--",
    item7: "2022-01-27 12:16:20",
  },
  {
    item1: "2022-01-27 12:16:20",
    item2: "2022-01-27 12:16:20",
    item3: "--",
    item4: "--",
    item5: "停机无原因",
    item6: "--",
    item7: "2022-01-27 12:16:20",
  },
  {
    item1: "2022-01-27 12:16:20",
    item2: "2022-01-27 12:16:20",
    item3: "--",
    item4: "--",
    item5: "停机无原因",
    item6: "--",
    item7: "2022-01-27 12:16:20",
  },
];
const currentRow = ref(null);

const handleSizeChange = (val) => {
  console.log(`每页 ${val} 条`);
};
const handleCurrentChange = (val) => {
  console.log(`当前页: ${val}`);
};

const dialogVisible = ref(false);

const handleClose = (done) => {
  ElMessageBox.confirm("关闭弹窗?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
</script>

<style lang="scss" scoped>
.vtable {
  position: relative;
  height: calc(100% - 110px);
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
