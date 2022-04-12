<template>
	<view class="subscribe">
		<top-nav :retreat="true" :titlewee="title"></top-nav>
			<scroll-view class="content" :scroll-y="true">
				<auction-item 
				v-for="(item,index) in watch" 
				:key="index" 
				@click.native="todetails(id,item.goodsId,item.farm_id)"
				:title="item.name"
				:price="item.price"
				>
					<template #img><image class="img" :src="item.image"></image></template>
					<template #botton><text class="stock-text">已售{{item.stock}}</text></template>
				</auction-item>
			</scroll-view>
	</view>
</template>

<script>
import TopNav from '@/compotents/topnav/TopNav.vue';
import AuctionItem from '@/compotents/auction-item/AuctionItem.vue'

import {selectgoodsbytype} from '@/api/home.js'
export default {
	components: { TopNav, AuctionItem},
	data(){
		return{
			watch:[],//列表数据
			id:0,//商品ID
			title:'',//导航标题
		}
	},
	onLoad(e) {
	// 接收首页传递来的类型ID 0:认养 1:直供 2:预约
		this.id = e.id
		this.title = e.title
		this.selectgoodsbytype()
	},
	methods:{
		// 请求列表数据
		selectgoodsbytype(){
			selectgoodsbytype(this.id).then(res =>{
				// console.log(res)
				this.watch = res.data
			})
		},
		//跳转到详情并传递参数
		todetails(id,goodsId,farm_id){
			uni.navigateTo({
				url:`/pages/classify/GoodsCon/index?id=${id}&goodsId=${goodsId}&farm_id=${farm_id}`
			})
		}
	}
};
</script>

<style lang="scss">
.subscribe {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	.content {
		flex: auto;
		overflow: auto;
		margin: 24rpx 0;
	}
}
.img{
	width: 240rpx;
	height: 240rpx;
	border-radius: 4rpx;
}
.stock-text{
	font-size: 24rpx;
	color: #999999;
}
</style>

