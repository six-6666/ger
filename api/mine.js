import {get,post} from '@/api/request/request'
//获取用户信息
export const getInfo = (id) => get(`/system/api/consume/getInfo/${id}`)