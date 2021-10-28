<template>
    <div id="app">
        <pdf-demo />
    </div>
</template>

<script>
import PdfDemo from './components/PdfDemo.vue'

export default {
    name: 'app',
    components: {
        PdfDemo,
    },
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
