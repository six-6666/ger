<template>
	<view class="buy-navber">
		<view class="buy-navber-left">
			<view>
				<image src="/static/category/GoodsCon/icon-service.png"></image>
				<text>客服</text>
			</view>
			<view>
				<image src="/static/category/GoodsCon/icon-collect.png"></image>
				<text>收藏</text>
			</view>
			<view>
				<image src="/static/category/GoodsCon/icon-shopping-trolley.png"></image>
				<text>购物车</text>
			</view>
		</view>
		<view class="buy-navber-right">
			<view class="button-add">加入购物车</view>
			<view class="button-buy">立即购买</view>
		</view>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
	.buy-navber {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 750rpx;
		height: 100rpx;
		padding: 16rpx 30rpx;
		background: #ffffff;
		box-shadow: 0px 0px 2rpx 0px rgba(0, 0, 0, 0.15);
		.buy-navber-left {
			display: flex;
			flex: auto;
			justify-content: space-between;
			& > view {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				> image {
					width: 32rpx;
					height: 29rpx;
				}
				> text {
					font-size: 22rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #999999;
					line-height: 32rpx;
				}
			}
		}
		.buy-navber-right {
			display: flex;
			margin-left: 40rpx;
			.button-add {
				width: 200rpx;
				height: 76rpx;
				line-height: 76rpx;
				text-align: center;
				background: #ffc000;
				border-radius: 38rpx 0px 0px 38rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #ffffff;
			}
			.button-buy {
				width: 200rpx;
				height: 76rpx;
				line-height: 76rpx;
				text-align: center;
				background: #ff9900;
				border-radius: 0 38rpx 38rpx 0;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #ffffff;
			}
		}
	}
</style>
