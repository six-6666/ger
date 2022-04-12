<template>
	<view class="details">
		<!-- 顶部导航 -->
		<top-nav :bg="true" :retreat="true" titlewee="果园详情"></top-nav>
		<scroll-view :scroll-y="true" class="contents">
			<!-- 果园基地信息模块 -->
			<shop-referral></shop-referral>
			<!-- 商品类型筛选模块 -->
			<select-nav class="select" :wire="false" :title="title" @clicknav="clicknav">
			</select-nav>
			<view class="commodity-box">
				<commodity-item class="commodity"></commodity-item>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import TopNav from '@/compotents/topnav/TopNav.vue'
	import ShopReferral from './child/ShopReferral.vue'
	import SelectNav from '@/compotents/selectnav/SelectNav.vue'
	import CommodityItem from '@/compotents/commodity-item/CommodityItem.vue'
	export default {
		components: {
			TopNav,
			ShopReferral,
			SelectNav,
			CommodityItem
		},
		data() {
			return {
				title: ['最近热销', '直购商品', '预约采摘', '认养果树']
			}
		},
		methods: {
			// SelectNav组件传递出的事件
			clicknav(index) {
				console.log(index)
			}
		}

	}
</script>

<style lang="scss">
	.details{
		height: 100%;
		display: flex;
		flex-direction: column;
		background: url(../../../static/orchard/bg.png) no-repeat;
		background-position: left top right;
		background-size: 100% 500rpx;
		.contents{
			flex: auto;
			overflow: auto;
			margin-top: 24rpx;
		}
	.select {
		margin-top: 24rpx;
	}
	.commodity-box{
		padding: 24rpx 30rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.commodity{
			margin-bottom: 18rpx;
		}
	}
	}
</style>
