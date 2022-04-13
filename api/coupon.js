import {
	get,
	post
} from '@/api/request/request'

// 优惠券接口
//点击领取
export const getcoupon = (data) => post('/sinonc-orders/api/coupon/award', data)
// 请求未领取的优惠券
export const getunclaimed = (data) => post('/sinonc-orders/api/coupon/list', data)
// 我的优惠券
export const getmycoupon = (data) => post('/sinonc-orders/api/coupon/myCoupon', data)
