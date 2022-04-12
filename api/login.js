import {get,post} from '@/api/request/request'
//账号密码登录 
export const consumerUserLogin = (phone,password) => get(`/auth/consumerUserLogin?phone=${phone}&password=${password}`)