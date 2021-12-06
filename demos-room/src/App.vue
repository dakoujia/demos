<template>
    <div id="app">
        <div id="ThreeJS">
            <div style="position: absolute; width: 400px; height: 400px">
                <div id="heatmap" style="width: 100%; height: 100%"></div>
            </div>
        </div>
    </div>
</template>
<script>
import * as THREE from 'three'
import Heatmap from 'heatmap.js'
import Detector from './libs/Detector'
const floorImg = require('./assets/images/floor.jpg')
// 常量
const SCREEN_WIDTH = window.innerWidth
const SCREEN_HEIGHT = window.innerHeight
const VIEW_ANGLE = 75
const ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT
const NEAR = 0.1
const FAR = 10000

export default {
    name: 'app',
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            tween: null,
            materialArrayA: [],
            materialArrayB: [],
            matArrayA: [], // 内墙
            matArrayB: [], // 外墙
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        // 初始化函数
        init() {
            this.initScene()
            this.initCamera()
            this.initRender()
            this.initLight()

            this.initObject()
        },
        render() {
            this.renderer.render(this.scene, this.camera)
        },
        // 渲染热力图
        renderHeatmap() {
            // 热力图

            let points = []
            let max = 0

            const width = 600

            const height = 400

            let len = 200

            while (len--) {
                let val = Math.floor(Math.random() * 100)

                max = Math.max(max, val)

                let point = {
                    x: Math.floor(Math.random() * width),

                    y: Math.floor(Math.random() * height),

                    value: val,
                }

                points.push(point)
            }

            const data = {
                max: max,

                data: points,
            }
            let heatmapInstance = Heatmap.create({
                container: document.getElementById('heatmap'),
            })
            heatmapInstance.setData(data)
        },
        // 场景
        initScene() {
            this.scene = new THREE.Scene()
        },
        // 相机
        initCamera() {
            this.camera = new THREE.PerspectiveCamera(
                VIEW_ANGLE,
                ASPECT,
                NEAR,
                FAR
            )
            this.camera.position.set(0, 1000, 1800)
            this.camera.lookAt(this.scene.position)
            this.camera.lookAt(0, 0, 0)
            this.scene.add(this.camera)
        },
        // 渲染器
        initRender() {
            if (Detector.webgl)
                this.renderer = new THREE.WebGLRenderer({ antialias: true })
            else this.renderer = new THREE.CanvasRenderer()
            //设置渲染器的大小为窗口的内宽度，也就是内容区的宽度。
            this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT)
            this.container = document.getElementById('ThreeJS')
            this.container.appendChild(this.renderer.domElement)
            this.renderer.setClearColor(0x4682b4, 1.0)
        },
        // 光源
        initLight() {
            // 位置不同，方向光作用于物体的面也不同，看到的物体各个面的颜色也不同
            // A start, 第二个参数是光源强度
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1) //模拟远处类似太阳的光源
            directionalLight.position.set(0, 100, 0).normalize()
            this.scene.add(directionalLight)
            //A end
            const ambient = new THREE.AmbientLight(0xffffff, 1) //AmbientLight,影响整个场景的光源
            ambient.position.set(0, 0, 0)
            this.scene.add(ambient)
        },
        // 创建地板
        createFloor() {
            let loader = new THREE.TextureLoader()
            loader.load(floorImg, texture => {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping
                texture.repeat.set(10, 10)
                const floorGeometry = new THREE.BoxGeometry(1350, 1100, 1)
                const floorMaterial = new THREE.MeshBasicMaterial({
                    map: texture,
                    side: THREE.DoubleSide,
                })
                const floor = new THREE.Mesh(floorGeometry, floorMaterial)
                floor.position.y = -0.5
                floor.rotation.x = Math.PI / 2
                this.scene.add(floor)

                //茶色：0x58ACFA   透明玻璃色：0XECF1F3
                const glass_material = new THREE.MeshBasicMaterial({
                    color: 0xecf1f3,
                })
                glass_material.opacity = 0.4
                glass_material.transparent = true

                this.createCubeWall(
                    1,
                    110,
                    1100,
                    0,
                    glass_material,
                    -801,
                    100,
                    0
                )
                this.createCubeWall(
                    1,
                    110,
                    1100,
                    0,
                    glass_material,
                    801,
                    100,
                    0
                )
                this.render()
            })
        },
        // 创建墙
        createCubeWall(width, height, depth, angle, material, x, y, z) {
            const cubeGeometry = new THREE.BoxGeometry(width, height, depth)
            const cube = new THREE.Mesh(cubeGeometry, material)
            cube.position.x = x
            cube.position.y = y
            cube.position.z = z
            cube.rotation.y += angle * Math.PI //-逆时针旋转,+顺时针
            this.scene.add(cube)
        },
        // 返回墙对象
        returnWallObject(width, height, depth, angle, material, x, y, z) {
            const cubeGeometry = new THREE.BoxGeometry(width, height, depth)
            const cube = new THREE.Mesh(cubeGeometry, material)
            cube.position.x = x
            cube.position.y = y
            cube.position.z = z
            cube.rotation.y += angle * Math.PI
            return cube
        },
        // 创建墙纹理
        createWallMaterail() {
            this.matArrayA.push(
                new THREE.MeshPhongMaterial({ color: 0xafc0ca })
            ) //前  0xafc0ca :灰色
            this.matArrayA.push(
                new THREE.MeshPhongMaterial({ color: 0xafc0ca })
            ) //后
            this.matArrayA.push(
                new THREE.MeshPhongMaterial({ color: 0xd6e4ec })
            ) //上  0xd6e4ec： 偏白色
            this.matArrayA.push(
                new THREE.MeshPhongMaterial({ color: 0xd6e4ec })
            ) //下
            this.matArrayA.push(
                new THREE.MeshPhongMaterial({ color: 0xafc0ca })
            ) //左    0xafc0ca :灰色
            this.matArrayA.push(
                new THREE.MeshPhongMaterial({ color: 0xafc0ca })
            ) //右

            this.matArrayB.push(
                new THREE.MeshPhongMaterial({ color: 0xafc0ca })
            ) //前  0xafc0ca :灰色
            this.matArrayB.push(
                new THREE.MeshPhongMaterial({ color: 0x9cb2d1 })
            ) //后  0x9cb2d1：淡紫
            this.matArrayB.push(
                new THREE.MeshPhongMaterial({ color: 0xd6e4ec })
            ) //上  0xd6e4ec： 偏白色
            this.matArrayB.push(
                new THREE.MeshPhongMaterial({ color: 0xd6e4ec })
            ) //下
            this.matArrayB.push(
                new THREE.MeshPhongMaterial({ color: 0xafc0ca })
            ) //左   0xafc0ca :灰色
            this.matArrayB.push(
                new THREE.MeshPhongMaterial({ color: 0xafc0ca })
            ) //右
        },
        // 创建房间布局
        createLayout() {
            // 墙面1 立方体比较长的面  左一
            this.createCubeWall(10, 200, 900, 0, this.matArrayB, -651, 100, 0)
            // 墙面2  立方体比较长的面   右一
            this.createCubeWall(10, 200, 900, 1, this.matArrayB, 651, 100, 0)
            // 墙面3 门对面的墙 立方体比较短的面
            this.createCubeWall(
                10,
                200,
                1310,
                1.5,
                this.matArrayB,
                0,
                100,
                -451
            )

            // 房间A:隔墙1
            this.createCubeWall(10, 200, 250, 0, this.matArrayA, -151, 100, 325)
            //房间A:隔墙2  无门
            this.createCubeWall(
                10,
                200,
                220,
                0.5,
                this.matArrayA,
                -256,
                100,
                201
            )
            // 厨房：隔墙3
            this.createCubeWall(350, 200, 10, 0, this.matArrayA, 481, 100, 131)
            // 厨房：隔墙4 无门
            this.createCubeWall(10, 200, 200, 0, this.matArrayA, 301, 100, 225)
            // 房间B
            this.createCubeWall(350, 200, 10, 0, this.matArrayA, -471, 100, -50)
            //房间B  无门
            this.createCubeWall(200, 200, 10, 0.5, this.matArrayA, 0, 100, -350)
            // 房间C
            this.createCubeWall(220, 200, 10, 0, this.matArrayA, 540, 100, -50)
            //房间C 无门
            this.createCubeWall(
                200,
                200,
                10,
                0.5,
                this.matArrayA,
                250,
                100,
                -350
            )
        },
        // 初始化OBJ对象
        initObject() {
            //墙纹理
            this.createWallMaterail()
            this.createFloor()
            this.createLayout()
        },
    },
}
</script>

<style>
html,
body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
