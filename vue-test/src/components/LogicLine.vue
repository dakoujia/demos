<template>
  <section id="logic-line"></section>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "LogicLine",
  data() {
    return {
      containerId: "logic-line",
    };
  },
  mounted() {
    this.initCanvas();
  },
  methods: {
    initCanvas() {
      // 清空画布
      d3.select("#" + this.containerId)
        .selectAll("canvas")
        .remove();

      const width = document.querySelector("#" + this.containerId).clientWidth;
      const height = document.querySelector("#" + this.containerId)
        .clientHeight;
      let canvas = d3
        .select("#" + this.containerId)
        .append("canvas")
        .attr("id", this.containerId + "-canvas")
        .attr("width", width)
        .attr("height", height);
      this.drawLine();
    },
    drawLine() {},
  },
};
</script>

<style scoped>
#logic-line {
  width: 200px;
  height: 400px;
}
</style>
