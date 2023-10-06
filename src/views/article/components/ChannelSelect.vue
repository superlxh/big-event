<script setup>
import { ref } from 'vue'
import { artGetChannelsService } from '@/api/article'

defineProps({
  modelValue: {
    type: [Number, String]
  },
  width: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])
const channelList = ref()

// 获取文章分类
const getChannelList = async () => {
  const res = await artGetChannelsService()
  channelList.value = res.data.data
}

//获取文章分类
getChannelList()

defineExpose({
  emit
})
</script>
<template>
  <el-select
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', $event)"
    :style="{ width }"
  >
    <el-option
      v-for="channel in channelList"
      :key="channel.id"
      :label="channel.cate_name"
      :value="channel.id"
    ></el-option>
  </el-select>
</template>
