<template>
    <div>
        <el-button-group>
            <el-button
                type="primary"
                icon="el-icon-arrow-left"
                size="mini"
                @click="prePage"
                >上一页</el-button
            >
            <el-button type="primary" size="mini" @click="nextPage"
                >下一页<i class="el-icon-arrow-right el-icon--right"></i
            ></el-button>
        </el-button-group>
        <div style="margintop: 10px; color: #409eff">
            {{ pageNum }} / {{ pageTotalNum }}
        </div>
        <pdf
            :page="pageNum"
            :src="url"
            @progress="loadedRatio = $event"
            @num-pages="pageTotalNum = $event"
        ></pdf>
    </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
    components: {
        pdf,
    },
    data() {
        return {
            url: 'http://localhost:8080/2019_PDF.pdf',
            pageNum: 1,
            pageTotalNum: 1,
            loadedRatio: 0,
        }
    },
    mounted() {},
    methods: {
        // 上一页
        prePage() {
            let page = this.pageNum
            page = page > 1 ? page - 1 : this.pageTotalNum
            this.pageNum = page
        },

        // 下一页
        nextPage() {
            let page = this.pageNum
            page = page < this.pageTotalNum ? page + 1 : 1
            this.pageNum = page
        },
    },
}
</script>
<style lang="scss" scoped></style>
