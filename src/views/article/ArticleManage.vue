<script setup>
import { ref } from 'vue'
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelSelect from '@/views/article/components/ChannelSelect.vue'
import ArticleEdit from '@/views/article/components/ArticleEdit.vue'
import { artGetListService, artDelService } from '@/api/article'
import { formatTime } from '@/utils/format'
import { ElMessage } from 'element-plus'

//数据
const articleList = ref([]) // 文章列表
const total = ref(0) //条数

//加载效果
const loading = ref(false)

//请求参数对象
const params = ref({
  pagenum: 1, //默认页
  pagesize: 5, //每页条数
  cate_id: '', //文章id
  state: '' //状态
})

// 获取数据
const getArticleList = async () => {
  loading.value = true
  const res = await artGetListService(params.value)
  articleList.value = res.data.data
  total.value = res.data.total
  loading.value = false
}
getArticleList()

//分页
const onSizeChange = (size) => {
  // 每页展示几条
  params.value.pagenum = 1
  params.value.pagesize = size
  getArticleList()
}
const onCurrentChange = (page) => {
  //跳转至第几页
  params.value.pagenum = page
  getArticleList()
}

// 搜索
const onSearch = () => {
  params.value.pagenum = 1 //重置页码
  getArticleList()
}
// 重置
const onReset = () => {
  params.value.pagenum = 1
  params.value.cate_id = ''
  params.value.state = ''
  getArticleList()
}

// 抽屉数据
const artcileEditRef = ref()

//添加文章
const onAddArticle = () => {
  artcileEditRef.value.open({})
}

//编辑文章
const onEditArticle = (row) => {
  artcileEditRef.value.open(row)
}

// 添加或删除成功
const onSuccess = (type) => {
  if (type === 'add') {
    //添加，渲染最后一页
    const lastPage = Math.ceil((total.value + 1) / params.value.pagesize)
    params.value.pagenum = lastPage
  }
  getArticleList()
}

//删除文章
const onDelArticle = async (row) => {
  await ElMessageBox.confirm('你确认删除该文章信息吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await artDelService(row.id)
  ElMessage.success('删除成功')
  getArticleList()
}
</script>

<template>
  <page-container title="文章管理">
    <!-- 主按钮-->
    <template #extra>
      <el-button type="primary" plain @click="onAddArticle">添加文章</el-button>
    </template>

    <!-- 表单 -->
    <el-form inline>
      <el-form-item label="文章分类">
        <ChannelSelect v-model="params.cate_id"></ChannelSelect>
      </el-form-item>
      <el-form-item label="发布状态"
        ><el-select v-model="params.state">
          <el-option label="已发布" value="已发布"></el-option>
          <el-option label="草稿" value="草稿"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">搜索</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="articleList" v-loading="loading">
      <el-table-column label="文章标题" align="center">
        <template #default="{ row }">
          <el-link type="primary" :underline="false">{{ row.title }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="分类" prop="cate_name" align="center">
      </el-table-column>
      <el-table-column label="发表时间" align="center">
        <template #default="{ row }"> {{ formatTime(row.pub_date) }}</template>
      </el-table-column>
      <el-table-column label="状态" prop="state" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <!-- 利用row获取当前行的数据 -->
        <template #default="{ row }">
          <el-button
            type="primary"
            :icon="Edit"
            circle
            plain
            @click="onEditArticle(row)"
          ></el-button>
          <el-button
            type="danger"
            :icon="Delete"
            circle
            plain
            @click="onDelArticle(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      v-model:current-page="params.pagenum"
      v-model:page-size="params.pagesize"
      :page-sizes="[5, 10, 20]"
      :background="true"
      prev-text="上一页"
      next-text="下一页"
      layout="jumper, total, sizes, prev, pager, next"
      :total="total"
      @size-change="onSizeChange"
      @current-change="onCurrentChange"
      style="margin-top: 20px; justify-content: center"
    />

    <!-- 抽屉 -->
    <ArticleEdit ref="artcileEditRef" @success="onSuccess"></ArticleEdit>
  </page-container>
</template>

<style lang="scss" scoped></style>
