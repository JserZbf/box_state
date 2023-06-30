<template>
  <div class="home">
    <!-- <sidebar active="/task/upkeep"></sidebar> -->
    <div class="homeMain">
      <div class="searchHead">
        <span>保养规则名称</span>
        <el-input
          style="width: 30%"
          v-model="input2"
          placeholder="请输入保养规则名称"
        ></el-input>
        <div class="searchBut ml20">
          <i class="el-icon-search"></i>
          <span>查询</span>
        </div>
        <div class="searchBut ml20" @click="drawer2 = !drawer2">
          <i class="el-icon-search"></i>
          <span>新增</span>
        </div>
      </div>
      <item1></item1>

      <el-drawer v-model="drawer2" :direction="direction">
        <template #header>
          <h4>新增保养规则</h4>
        </template>
        <template #default>
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="rules"
            label-width="120px"
            class="demo-ruleForm"
            :size="formSize"
            status-icon
          >
            <el-form-item label="保养规则名称" prop="name">
              <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-divider content-position="left">频率</el-divider>
            <el-form-item label="选择模式" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="日" />
                <el-radio label="周" />
                <el-radio label="月" />
                <el-radio label="年" />
              </el-radio-group>
            </el-form-item>
            <el-divider content-position="left">执行间隔</el-divider>

            <el-form-item label="执行间隔" prop="name">
              <el-input v-model="ruleForm.year" placeholder="请输入执行间隔">
                <template #append>年</template>
              </el-input>
            </el-form-item>

            <el-divider content-position="left">任务安排</el-divider>

            <el-form-item label="Activity time" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker
                    v-model="ruleForm.date1"
                    type="date"
                    label="Pick a date"
                    placeholder="Pick a date"
                    style="width: 100%"
                  />
                </el-form-item>
              </el-col>
              <el-col class="text-center" :span="2">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker
                    v-model="ruleForm.date2"
                    label="Pick a time"
                    placeholder="Pick a time"
                    style="width: 100%"
                  />
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-divider content-position="left">规则生产</el-divider>
            <el-form-item label="提前天数" prop="name">
              <el-input v-model="ruleForm.day" placeholder="请输入提前天数">
                <template #append>天</template>
              </el-input>
            </el-form-item>
            <el-divider content-position="left">持续时间</el-divider>
            <el-form-item label="开始日期" prop="count">
              <el-date-picker
                v-model="ruleForm.startTime"
                type="date"
                placeholder="Pick a day"
              />
            </el-form-item>
            <el-form-item label="结束日期" prop="count">
              <el-date-picker
                v-model="ruleForm.endTime"
                type="date"
                placeholder="Pick a day"
              />
            </el-form-item>
            <el-form-item label="启用状态" prop="delivery">
              <el-switch v-model="ruleForm.delivery" />
            </el-form-item>
            <el-form-item label="选择适用设备" prop="region">
              <el-select v-model="ruleForm.region" placeholder="Activity zone">
                <el-option label="设备1" value="1" />
                <el-option label="设备2" value="2" />
                <el-option label="设备3" value="3" />
                <el-option label="设备4" value="4" />
              </el-select>
            </el-form-item>
            <!-- <el-form-item label="Activity type" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="Online activities" name="type" />
                <el-checkbox label="Promotion activities" name="type" />
                <el-checkbox label="Offline activities" name="type" />
                <el-checkbox label="Simple brand exposure" name="type" />
              </el-checkbox-group>
            </el-form-item> -->
            <el-form-item label="保养内容描述" prop="desc">
              <el-input v-model="ruleForm.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm(ruleFormRef)">
                Create
              </el-button>
              <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
          </el-form>
        </template>
        <!-- <template #footer>
          <div style="flex: auto">
            <el-button @click="cancelClick">cancel</el-button>
            <el-button type="primary" @click="submitForm">confirm</el-button>
          </div>
        </template> -->
      </el-drawer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, onMounted, inject, reactive } from "vue"; // 主要
import { ElMessageBox, FormInstance, FormRules } from "element-plus";
import item1 from "./plan_components/item1.vue";
// import type { FormInstance, FormRules } from "element-plus";
var input2 = ref("");
const drawer = ref(false);
const drawer2 = ref(false);
const direction = ref("rtl");
const radio1 = ref("Option 1");
const handleClose = (done: () => void) => {
  ElMessageBox.confirm("Are you sure you want to close this?")
    .then(() => {
      done();
    })
    .catch(() => {
      // catch error
    });
};
function cancelClick() {
  drawer2.value = false;
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
    .then(() => {
      drawer2.value = false;
    })
    .catch(() => {
      // catch error
    });
}
// ================================
const formSize = ref("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
  name: "",
  region: "",
  count: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
  startTime: "",
  endTime: "",
  day: "",
  year: "",
});

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change",
    },
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change",
    },
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change",
    },
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change",
    },
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change",
    },
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  console.log(formEl);
  await formEl.validate((valid, fields) => {
    if (valid) {
      drawer2.value = false;
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}));
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  position: fixed;
  height: 100%;
  background: rgba(246, 248, 251, 1);
  //background: url("../assets/pageBg.jpg") no-repeat;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: row;
}

.homeMain {
  position: relative;
  width: calc(100% - 50px);
  height: calc(100% - 40px);
  padding: 0 16px 10px 14px;
  margin-top: 20px;
  //min-height: 800px;
}

.searchHead {
  margin-bottom: 16px;
  height: 36px;
  display: flex;
  align-items: center;
  //   justify-content: space-between;
  //   align-items: center;
  flex-wrap: wrap;
  //   flex-direction: row;
  //   align-content: flex-start;

  span {
    font-size: 14px;
    font-family: MiSans-Medium;
    font-weight: 500;
    color: #333333;
    flex-shrink: 0;
    margin-left: 20px;
    margin-right: 10px;
  }

  .ml0 {
    margin-left: 0 !important;
  }

  .searchBut {
    width: 80px;
    height: 36px;
    background: #5864ff;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    flex-shrink: 0;
    cursor: pointer;

    i {
      font-size: 14px;
      font-family: MiSans-Medium;
      font-weight: 500;
      color: #ffffff;
    }

    span {
      margin-left: 7px;
      font-size: 14px;
      font-family: MiSans-Medium;
      font-weight: 500;
      color: #ffffff;
    }
  }
}

.w100 {
  flex: 1;
}

.ml20 {
  margin-left: 20px;
}
</style>
