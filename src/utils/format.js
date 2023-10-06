import { dayjs } from 'element-plus'

// 格式化日期
export const formatTime = (time) => dayjs(time).format('YYYY年MM月DD日')
