<script setup>
import { ref } from 'vue'
import { artGetChannelsService, artDelChannelService } from '@/api/article'
import { Edit, Delete } from '@element-plus/icons-vue'
import ChannelEdit from '@/views/article/components/ChannelEdit.vue'

//加载效果
const loading = ref(false)

//弹层
const dialog = ref()

//分类列表
const channelList = ref([])

//获取分类列表
const getChannelList = async () => {
  loading.value = true
  const res = await artGetChannelsService()
  channelList.value = res.data.data
  loading.value = false
}
getChannelList() //获取数据

//操作-编辑
const onEditChannel = (row) => {
  dialog.value.open(row)
}

//操作-删除
const onDelChannel = async (row) => {
  await ElMessageBox.confirm('确认删除该分类吗？', '温馨提示', {
    type: 'warning',
    confirmButtonText: '确认',
    cancelButtonText: '取消'
  })
  await artDelChannelService(row.id)
  ElMessage.success('删除成功')
  getChannelList() //刷新页面
}

// 添加
const onAddChannel = () => {
  dialog.value.open({})
}

// 刷新页面
const onSuccess = () => {
  getChannelList() //获取数据
}
</script>
<template>
  <page-container title="文章分类">
    <!-- 主按钮-->
    <template #extra>
      <el-button @click="onAddChannel" type="primary" plain>添加分类</el-button>
    </template>

    <!-- 表格 -->
    <el-table v-loading="loading" :data="channelList" style="width: 100%">
      <el-table-column type="index" label="序号" width="100" />
      <el-table-column prop="cate_name" label="分类名称" />
      <el-table-column prop="cate_alias" label="分类别名" />
      <el-table-column prop="address" label="操作" width="180">
        <template #default="{ row, $index }">
          <el-button
            @click="onEditChannel(row, $index)"
            :icon="Edit"
            circle
            type="primary"
            plain
          >
          </el-button>
          <el-button
            @click="onDelChannel(row, $index)"
            :icon="Delete"
            circle
            type="danger"
            plain
          >
          </el-button>
        </template>
      </el-table-column>

      <!-- 没有数据 -->
      <template #empty>
        <el-empty description="暂无数据" />
      </template>
    </el-table>

    <!-- 弹层 -->
    <ChannelEdit ref="dialog" @success="onSuccess"></ChannelEdit>
  </page-container>
</template>

<style lang="scss" scoped></style>
