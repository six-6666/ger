<template>
	<view class="focus">
		<top-nav :retreat="true" titlewee="关注店铺"></top-nav>
		<scroll-view class="content-box" :scroll-y="true">
			<shop class="shop-box" :approve="true" v-for="item of 20">
				<template #img><image src="/static/img/img4.jpg" mode=""></image></template>
				<template #title><text class="title">百色市天之娇芒果基地芒果专卖</text></template>
				<template #content>
					<text>8888人关注</text>
				</template>
				<template #botton><image class="botton" src="/static/commin/collect-icon.png" mode=""></image></template>
			</shop>
		</scroll-view>
	</view>
</template>

<script>
	import TopNav from '../../../compotents/topnav/TopNav.vue'
	import Shop from '../../../compotents/shop/Shop.vue'
	export default {
		components:{TopNav,Shop}
	}
</script>

<style lang="scss">
	.focus{
		height: 100%;
		display: flex;
		flex-direction: column;
		.content-box{
			flex: auto;
			overflow: auto;
		}
	}
	.shop-box{
		margin: 24rpx 0;
		padding: 24rpx 30rpx;
		background: #FFFFFF;
	}
	.title{
		font-size: 28rpx;
		font-weight: 600;
		color: #111111;
	}
	.content{
		font-size: 22rpx;
		color: #999999;
	}
	.botton{
		width: 40rpx;
		height: 40rpx;
		margin-top: 40rpx;
	}
</style>
