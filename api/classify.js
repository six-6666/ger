import { get,post } from "@/api/request/request"
//分类列表数据
export const getOdCategoryList = () => get(`/orders/api/category/getOdCategoryList`)
//分类内容数据
export const getOdGoodList = (categoryId) => get(`/orders/api/odgood/getOdGoodList?categoryId=${categoryId}`)
//请求详情商品数据
export const selectgoodsdetailbyid = (goodsId) => get(`/orders/api/goods/selectgoodsdetailbyid?goodsId=${goodsId}`)
//评论数据
export const list = (goodsId,star='') => get(`/orders/api/evaluation/list?goodsId=${goodsId}&star=${star}`)