<template>
  <div class="info">
    <div class="equipment hideScrollBar">
      <div class="selectInfo">
        <el-select class="select_box" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="equipment2">
        <div class="equipmentl">
          <img src="@/assets/shebei.png" alt="">
        </div>
        <div class="equipmentr">
          <div class="equipmentrInfo">
            <span>设备名称：</span>
            <p>XXXX</p>
          </div>
          <div class="equipmentrInfo">
            <span>当前状态：</span>
            <p>停机无原因</p>
          </div>
          <div class="equipmentrInfo">
            <span>状态持续时间：</span>
            <p>00:37:45</p>
          </div>
          <div class="equipmentrInfo mt32">
            <span>近30日报警次数：</span>
            <p>5次</p>
          </div>
          <div class="equipmentrInfo">
            <span>近30日报警时间：</span>
            <p>xx分钟</p>
          </div>
          <div class="equipmentrInfo">
            <span>近30日报警占比：</span>
            <p>10%</p>
          </div>
        </div>
      </div>
    </div>
    <div class="homeMain2rTopItem">
      <div class="mTitle">设备状态占比</div>
      <item3></item3>
    </div>
  </div>
</template>

<script>
import echarts1 from "./echarts/echarts1.vue";
import item3 from './item3.vue'

export default {
  name: "info",
  components: {echarts1, item3},
  props: {
    id: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {
      options: [{
        value: '选择设备',
        label: '选择设备'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '选择设备'
    }
  },
  watch: {},
  mounted() {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.info {
  width: calc(100% - 0px);
  position: relative;
  height: calc(100% - 0px);

  .equipment {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: flex-start;
    background: #fff;
    border-radius: 16px;
    height: 48%;
    width: 100%;
    // overflow-y: scroll;

    .equipment2 {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
      width: 100%;
      padding-top: 25px;
    }

    .equipmentl {
      width: 137px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;

      img {
        width: 91px;
        height: 86px;
      }
    }

    .equipmentr {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: column;
      align-content: flex-start;
      width: calc(100% - 150px);

      .equipmentrInfo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: nowrap;
        width: 100%;
        flex-direction: row;
        align-content: flex-start;

        span {
          font-size: 14px;
          font-family: MiSans;
          font-weight: 400;
          color: #999999;
          line-height: 30px;
        }

        p {
          color: rgba(51, 51, 51, 1);
        }
      }
    }
  }
}

.mt32 {
  margin-top: 32px;
}

.selectInfo {
  width: calc(100% - 40px);
  margin: 0 auto;
  padding-top: 20px;

  .select_box{
    width: 100%;
  }
  :deep(.select_box) {
    .el-input__inner {
      font-size: 16px;
      font-family: MiSans;
      font-weight: 600;
      color: #333333;
    }
  }
}

.homeMain2rTopItem {
  position: relative;
  margin-top: 20px;
}
.homeMain2rTopItem {
  width: calc(100% - 40px);
  position: relative;
  background: #fff;
  border-radius: 16px;
  height: calc(52% - 40px);
  padding: 0 20px 20px 20px;
}
.mTitle {
  font-size: 16px;
  font-family: MiSans-Bold;
  font-weight: bold;
  color: #333333;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  align-content: flex-start;
}
</style>
