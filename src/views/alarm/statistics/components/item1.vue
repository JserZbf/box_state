<template>
  <div class="itemBody">
    <echarts6></echarts6>
    <div class="list">
      <div class="listItem" v-for="(item, index) in list" :key="index">
        <div class="listIteml">
          <div class="dot"></div>
          <span>{{ item.title }}</span>
          <p>{{ item.schedule }}</p>
        </div>
        <div class="listItemr">{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import echarts6 from "./echarts/echarts6.vue";

const list = [
  {
    title: "停机无原因",
    schedule: "100%",
    time: "03:59:40",
  },
];
// export default {
//   name: "item1",
//   components: {echarts6},
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
//       list:
//     }
//   },
//   watch: {},
//   mounted() {
//   },
//   methods: {}
// }
</script>

<style lang="scss" scoped>
.itemBody {
  position: relative;
  height: 100%;
  width: 100%;
}

.list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;

  .listItem {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: flex-start;
    height: 32px;

    .listIteml {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;

      .dot {
        width: 12px;
        height: 9px;
        background: #5976bc;
      }

      span {
        font-size: 13px;
        font-family: MiSans;
        font-weight: 400;
        color: #333333;
        margin-left: 5px;
        margin-right: 5px;
      }

      p {
        font-size: 13px;
        font-family: MiSans;
        font-weight: bold;
        color: #5976bc;
      }
    }

    .listItemr {
      font-size: 13px;
      font-family: MiSans;
      font-weight: 400;
      color: #333333;
    }
  }

  .listItem:nth-child(2) {
    .dot {
      background: rgba(118, 127, 247, 1);
    }

    p {
      color: rgba(125, 133, 247, 1);
    }
  }

  .listItem:nth-child(3) {
    .dot {
      background: rgba(245, 96, 132, 1);
    }

    p {
      color: rgba(245, 96, 132, 1);
    }
  }

  .listItem:nth-child(4) {
    .dot {
      background: rgba(253, 192, 89, 1);
    }

    p {
      color: rgba(253, 192, 89, 1);
    }
  }

  .listItem:nth-child(5) {
    .dot {
      background: rgba(52, 206, 174, 1);
    }

    p {
      color: rgba(52, 206, 174, 1);
    }
  }
}
</style>
