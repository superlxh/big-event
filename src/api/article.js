import request from '@/utils/request'

//分类-获取文章分类
export const artGetChannelsService = () => request.get('/my/cate/list')

//分类-添加文章分类
export const artAddChannelService = (data) => request.post('/my/cate/add', data)

//分类-修改文章分类
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)

//分类-删除文章分类
export const artDelChannelService = (id) =>
  request.delete('/my/cate/del', { params: { id } })

//文章-获取文章列表
export const artGetListService = (params) =>
  request.get('/my/article/list', { params })

//文章-发布文章
export const artPublishService = (data) => request.post('/my/article/add', data)

//文章-获取文章详情
export const artGetDeailService = (id) =>
  request.get('/my/article/info', { params: { id } })

// 文章-更新文章
export const artEditService = (data) => request.put('/my/article/info', data)

// 文章-删除文章
export const artDelService = (id) =>
  request.delete('my/article/info', { params: { id } })
