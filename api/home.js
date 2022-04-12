import { get,post } from "@/api/request/request"

// 轮播图
export const advertisement = (type) => get(`/orders/api/advertisement/list?type=${type}`)
//热销推荐
export const getOdGoodList = (isRecommend) => get(`/orders/api/odgood/getOdGoodList?isRecommend=${isRecommend}`)
// 推荐果园接口联调（店铺）
export const getShopList = (isRecommend) => get(`/orders/api/shop/getShopList?isRecommend=${isRecommend}`)



//直供、预约、认养 列表数据
export const selectgoodsbytype = (goodstype) => get(`/orders/api/goods/selectgoodsbytype?goodstype=${goodstype}`)