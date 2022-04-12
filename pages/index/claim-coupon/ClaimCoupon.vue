<template>
	<view class="claim-coupon">
		<top-nav :retreat="true" titlewee="领取优惠券"></top-nav>
		<image src="/static/classify/banner_coupon.png" mode=""></image>
		<scroll-view class="content-box" :scroll-y="true">
			<card-item></card-item>
		</scroll-view>
	</view>
</template>

<script>
	import TopNav from '@/compotents/topnav/TopNav.vue'
	import CardItem from './child/CardItem.vue'
	export default{
		components:{TopNav,CardItem}
		
	}
</script>

<style lang="scss">
	.claim-coupon{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		&>image{
			width: 100%;
			height: 260rpx;
		}
		.content-box{
			padding: 24rpx 30rpx;
			flex: auto;
			overflow: auto;
		}
	}
</style>
