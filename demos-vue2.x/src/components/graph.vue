<template>
  <div class="graph-echart" id="graph"></div>
</template>

<script>
import G6 from "@antv/g6";
export default {
  name: "graph",
  data() {
    return {
      graph: null,
      pageCount: 0,
      data: {},
      topology: {
        nodes: [
          {
            id: "server",
            label: "服务器",
            imgName: "server",
            type: "imageNode",
            deviceType: null,
            meta: null,
          },
          {
            id: "control",
            label: "中控",
            imgName: "control",
            type: "imageNode",
            deviceType: null,
            meta: null,
          },
          {
            id: "backstage",
            label: "管理后台",
            imgName: "backstage",
            type: "imageNode",
            deviceType: null,
            meta: null,
          },
          {
            id: "pad",
            label: "控制PAD",
            imgName: "pad",
            type: "imageNode",
            deviceType: null,
            meta: null,
          },
          {
            id: "control-1",
            label: "播放终端",
            imgName: null,
            type: "rect",
            deviceType: 1,
            meta: null,
          },
          {
            id: "control-1-cardNode",
            label: null,
            imgName: null,
            type: "cardNode",
            deviceType: 1,
            meta: [
              {
                label: "展项1",
                items: [
                  {
                    name: "tv06",
                    status: true,
                    statusName: "在线",
                    program: "I remember-郭采洁.mp3",
                  },
                  {
                    name: "tv07",
                    status: true,
                    statusName: "在线",
                    program: "1634524857(1).png",
                  },
                ],
              },
              {
                label: "展项2",
                items: [
                  {
                    name: "tv08",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                ],
              },
              {
                label: "展项3",
                items: [
                  {
                    name: "tv09",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv01",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv02",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                ],
              },
              {
                label: "展项4",
                items: [
                  {
                    name: "tv03",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv04",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv12",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "LED02",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "LED01",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                ],
              },
              {
                label: "",
                items: [
                  {
                    name: "tv11",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv13",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv14",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv15",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv16",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv17",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv18",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv19",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "ty03",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "ty02",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "ty01",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "ty04",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv05",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "tv10",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                  {
                    name: "LED03",
                    status: false,
                    statusName: "离线",
                    program: null,
                  },
                ],
              },
            ],
          },
          {
            id: "control-8",
            label: "TV显示屏",
            imgName: null,
            type: "rect",
            deviceType: 8,
            meta: null,
          },
          {
            id: "control-8-cardNode",
            label: null,
            imgName: null,
            type: "cardNode",
            deviceType: 8,
            meta: [
              {
                label: "展项3",
                items: [
                  {
                    name: "TV显示屏3",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏4",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                ],
              },
              {
                label: "展项4",
                items: [
                  {
                    name: "TV显示屏1",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏2",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                ],
              },
              {
                label: "",
                items: [
                  {
                    name: "TV显示屏5",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏6",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏7",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏8",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏9",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏10",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏11",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏12",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏13",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏14",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏15",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏16",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏17",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏18",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "TV显示屏19",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                ],
              },
            ],
          },
          {
            id: "control-9",
            label: "LED显示屏",
            imgName: null,
            type: "rect",
            deviceType: 9,
            meta: null,
          },
          {
            id: "control-9-cardNode",
            label: null,
            imgName: null,
            type: "cardNode",
            deviceType: 9,
            meta: [
              {
                label: "展项3",
                items: [
                  {
                    name: "LED显示屏1",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "LED显示屏2",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                ],
              },
              {
                label: "展项4",
                items: [
                  {
                    name: "LED显示屏3",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                ],
              },
              {
                label: "",
                items: [
                  {
                    name: "LED显示屏4",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                ],
              },
            ],
          },
          {
            id: "control-2",
            label: "投影仪",
            imgName: null,
            type: "rect",
            deviceType: 2,
            meta: null,
          },
          {
            id: "control-2-cardNode",
            label: null,
            imgName: null,
            type: "cardNode",
            deviceType: 2,
            meta: [
              {
                label: "展项1",
                items: [
                  {
                    name: "投影仪1",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                  {
                    name: "投影仪2",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                ],
              },
              {
                label: "展项2",
                items: [
                  {
                    name: "投影仪3",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                ],
              },
              {
                label: "展项4",
                items: [
                  {
                    name: "投影仪4",
                    status: true,
                    statusName: "开启",
                    program: null,
                  },
                ],
              },
            ],
          },
        ],
        edges: [
          {
            source: "server",
            target: "control",
          },
          {
            source: "backstage",
            target: "server",
          },
          {
            source: "pad",
            target: "server",
          },
          {
            source: "control",
            target: "control-1",
          },
          {
            source: "server",
            target: "control-1",
          },
          {
            source: "control-1",
            target: "control-1-cardNode",
          },
          {
            source: "control",
            target: "control-8",
          },
          {
            source: "control-8",
            target: "control-8-cardNode",
          },
          {
            source: "control",
            target: "control-9",
          },
          {
            source: "control-9",
            target: "control-9-cardNode",
          },
          {
            source: "control",
            target: "control-2",
          },
          {
            source: "control-2",
            target: "control-2-cardNode",
          },
        ],
      },
    };
  },
  mounted() {
    this.mergeData();
    this.initG6();
  },
  destroyed() {
    this.graph.destroy();
  },
  methods: {
    mergeData() {
      // imageNode枚举
      const nodeImgs = new Map([
        ["pad", require("@/assets/images/memory.png")],
        ["backstage", require("@/assets/images/alertMarkIcon.png")],
        ["server", require("@/assets/images/avatar.png")],
        ["control", require("@/assets/images/warnMarkIcon.png")],
      ]);
      // deviceType枚举
      const deviceImgs = new Map([
        [1, require("@/assets/images/alertMarkIcon.png")],
        [2, require("@/assets/images/avatar.png")],
        [3, require("@/assets/images/baoj.png")],
        [4, require("@/assets/images/bfs.png")],
        [5, require("@/assets/images/event.png")],
        [6, require("@/assets/images/bfz.png")],
        [7, require("@/assets/images/jh.png")],
        [8, require("@/assets/images/memory.png")],
        [9, require("@/assets/images/shic.png")],
        [10, require("@/assets/images/warnMarkIcon.png")],
      ]);

      // 处理数据
      const { nodes = [], edges = [] } = this.topology;
      const _nodes = nodes.map(m => {
        let item = {};
        if (m.imgName) {
          item.img = nodeImgs.get(m.imgName);
        }
        if (m.type === "cardNode" && m.meta) {
          m.meta.map((row1, groupIndex) => {
            row1.groupIndex = groupIndex;
            row1.items &&
              row1.items.map(row2 => {
                row2.img = deviceImgs.get(m.deviceType);
                row2.offset = 0;
                row2.namePixel = this.getTextPixelWidth(row2.name);
                row2.programPixel = this.getTextPixelWidth(row2.program);
                return row2;
              });
            return row1;
          });
        }
        return { ...m, ...item };
      });
      const _edges = edges.map(m => {
        m.type = "line-arrow";
        m.sourceAnchor = 0;
        m.targetAnchor = 0;
        return m;
      });
      this.data = {
        nodes: _nodes,
        edges: _edges,
      };
    },
    getTextPixelWidth(text) {
      var span = document.createElement("span");
      span.style.cssText =
        "visibility:hidden;display:inline-block;white-space:nowrap;";
      document.body.appendChild(span);
      span.innerHTML = text;
      const pixelCount = span.offsetWidth;
      document.body.removeChild(span);
      return pixelCount;
    },
    initG6() {
      let self = this;
      // 图片节点
      G6.registerNode("imageNode", {
        draw(cfg, group) {
          group.addShape("text", {
            attrs: {
              x: 0,
              y: 50,
              fill: "#333",
              text: cfg.label,
              textBaseline: "bottom",
            },
          });
          return group.addShape("image", {
            attrs: {
              width: 40,
              height: 30,
              img: cfg.img,
            },
          });
        },
      });

      // 线节点
      G6.registerEdge("line-arrow", {
        draw: function draw(cfg, group) {
          const startPoint = cfg.startPoint;
          const endPoint = cfg.endPoint;
          // const hgap = Math.abs(endPoint.x - startPoint.x);

          const keyShape = group.addShape("path", {
            attrs: {
              path:
                // endPoint.x > startPoint.x
                //   ? [
                //       ["M", startPoint.x, startPoint.y],
                //       [
                //         "C",
                //         startPoint.x + hgap / 4,
                //         startPoint.y,
                //         endPoint.x - hgap / 2,
                //         endPoint.y,
                //         endPoint.x,
                //         endPoint.y,
                //       ],
                //     ]
                //   : [
                //       ["M", startPoint.x, startPoint.y],
                //       [
                //         "C",
                //         startPoint.x - hgap / 4,
                //         startPoint.y,
                //         endPoint.x + hgap / 2,
                //         endPoint.y,
                //         endPoint.x,
                //         endPoint.y,
                //       ],
                //     ],

                [
                  ["M", startPoint.x, startPoint.y],
                  ["L", endPoint.x / 2 + (1 / 2) * startPoint.x, startPoint.y],
                  ["L", endPoint.x / 2 + (1 / 2) * startPoint.x, endPoint.y],

                  [
                    "L",
                    !cfg.target.includes("-cardNode")
                      ? endPoint.x
                      : endPoint.x - 55,
                    endPoint.y,
                  ],
                ],
              stroke: "#2196f3",
              lineWidth: 1,
              startArrow: false,
              endArrow: false,
            },
          });
          return keyShape;
        },
      });

      // 卡片节点
      G6.registerNode("cardNode", {
        draw(cfg, group) {
          window.prev = (id, index) => {
            if (self.pageCount > 0) {
              const _cardIndex = self.data.nodes.findIndex(
                item => item.id === id
              );
              self.data.nodes[_cardIndex].meta[index].items = self.data.nodes[
                _cardIndex
              ].meta[index].items.map(m => {
                m.offset += 292;
                return m;
              });
              self.pageCount--;
              // 更新
              const item = graph.findById(id);
              item.update(self.data.nodes[_cardIndex]);
              console.log(event);
            }
          };
          window.next = (id, index) => {
            const _cardIndex = self.data.nodes.findIndex(
              item => item.id === id
            );
            const len = self.data.nodes[_cardIndex].meta[index].items.length;

            if (len >= (self.pageCount + 1) * 4) {
              self.pageCount++;
              self.data.nodes[_cardIndex].meta[index].items = self.data.nodes[
                _cardIndex
              ].meta[index].items.map(m => {
                m.offset = -292 * self.pageCount;
                return m;
              });
              // 更新
              const item = graph.findById(id);
              item.update(self.data.nodes[_cardIndex]);
            }
          };
          const children = cfg.meta
            .map(row1 => {
              const { label, items = [] } = row1;
              return `
                  <div style="position: relative;width:100%;padding:0 10px;">
                    <p style="text-align: left;font-weight: bold;">${label}
                    </p>

                    ${
                      label && items.length > 4
                        ? `<i class="el-icon-caret-left" style="position: absolute;left: 0;top: 50%;font-size: 30px;cursor: pointer;" onclick="prev('${cfg.id}',${row1.groupIndex})"></i>`
                        : ""
                    }

                    ${
                      label && items.length > 4
                        ? '<div style="justify-content: flex-start;width: 88%;display: inline-flex;flex-wrap: nowrap;overflow-x: hidden;overflow-y: auto;margin-left: -10px;">'
                        : '<div style="justify-content: flex-start;width: 100%;display: flex;flex-wrap: wrap;">'
                    }

                    ${items
                      .map(
                        row2 => `<div style="width:16%;min-width:50px;max-width:100px;border: 1px solid ${
                          row2.status ? "#0881f2" : "#c0c4cc"
                        }; padding: 5px;margin:5px;font-size:12px;position: relative;left: ${row2.offset ||
                          0}px;overflow: hidden;">
                        <img src="${row2.img}" width="100%" height="50px"/>
                        <p class="${
                          row2.namePixel > 40 ? "animate" : ""
                        }" style="padding:0;margin:0;text-overflow:ellipsis;overflow: hidden;white-space: nowrap;" title="${
                          row2.name
                        }">
                        ${row2.name}
                        </p>
                        <p style="padding:0;margin:0;">
                        ${row2.statusName}
                        </p>
                        <p class="${
                          row2.programPixel > 40 ? "animate" : ""
                        }" style="padding:0;margin:0;text-overflow:ellipsis;overflow: hidden;white-space: nowrap;" title="${
                          row2.program ? row2.program : ""
                        }">
                        ${row2.program ? row2.program : ""}
                        </p>
                      </div>`
                      )
                      .join("")}
                    </div>
                    ${
                      label && items.length > 4
                        ? `<i class="el-icon-caret-right" style="position: absolute;right: 15px;top: 50%;font-size: 30px;cursor: pointer;" onclick="next('${cfg.id}',${row1.groupIndex})"></i>`
                        : ""
                    }
                  </div>`;
            })
            .join("");
          return group.addShape("dom", {
            attrs: {
              width: 350,
              height: 450,
              html: `<div style="border:1px solid #2196f3;border-radius:5px;height: 400px;padding:0px; ">
                      <div style="overflow-x: hidden;overflow-y: auto;height: 100%;">
                        ${children}
                      </div>
                    </div>`,
            },
            draggable: true,
          });
        },
      });

      const graph = new G6.Graph({
        container: "graph", // 图例的容器 id 名称
        width: window.innerWidth,
        height: window.innerHeight,
        fitView: true, // 自动缩放
        fitViewPadding: [20, 40, 50, 20],
        controlPoints: false,
        renderer: "svg", // 使用 Dom node 的时候需要使用 svg 的渲染形势
        modes: {
          default: ["drag-canvas", "zoom-canvas"],
        },
        layout: {
          type: "dagre", //图例层级铺开
          nodeSize: [400, 100],
          nodesep: 5,
          ranksep: 5,
          rankdir: "TB",
        },
        animate: true,
        defaultNode: {
          style: {
            lineWidth: 2,
            stroke: "#000",
            fill: "#fff",
          },
          // 节点上的标签文本配置
          labelCfg: {
            // 节点上的标签文本样式配置
            style: {
              fill: "#000", // 节点标签文字颜色
              fontSize: 12,
            },
          },
        },
        defaultEdge: {
          shape: "polyline",
          size: 2,
          color: "#3BB5A0", //线的颜色
          style: {
            radius: 10,
            offset: 10,
            endArrow: false,
          },
        },
      });

      // 保存实例
      this.graph = graph;

      this.graph.data(this.data);
      this.graph.render(this.data);
      this.graph.fitView();
    },
  },
};
</script>

<style>
.graph-echart {
  width: 100%;
  height: 100%;
}
.animate {
  padding-left: 2px;
  font-size: 12px;
  color: #000;
  display: inline-block;
  white-space: nowrap;
  animation: 20s wordsLoop linear infinite alternate;
}

@keyframes wordsLoop {
  0% {
    transform: translateX(30px);
    -webkit-transform: translateX(30px);
  }
  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}

@-webkit-keyframes wordsLoop {
  0% {
    transform: translateX(30px);
    -webkit-transform: translateX(30px);
  }
  100% {
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
}
</style>
