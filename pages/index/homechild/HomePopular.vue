<template>
	<view class="popular">
		<view class="title">热销推荐</view>
		<view class="contents">
			<commodity-item 
			class="item"  
			v-for="(item,index) in sell" 
			:key="index"
			:price="item.costPrice"
			:title="item.name"
			:url="item.image"
			 />
		</view>
	</view>
</template>

<script>
	import CommodityItem from '@/compotents/commodity-item/CommodityItem.vue'
	export default {
		components:{CommodityItem},
		props:{
			sell:{
				type:Array,
				default:() =>[]
			}
		}
		
	}
</script>

<style lang="scss">
	.popular{
		width: 100%;
		margin-top: 24rpx;
		.title{
			padding: 24rpx 30rpx;
			font-size: 32rpx;
			font-weight: 600;
			color: #111111;
		}
		.contents{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.item{
				margin-bottom: 18rpx;
			}
		}
	}
</style>
