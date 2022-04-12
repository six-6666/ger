<template>
	<view class="referral-box">
		<view class="referral">
			<shop :approve="true">
				<template #img>
					<image src="/static/img/img4.jpg" mode=""></image>
				</template>
				<template #title><text class="title">百色市天之娇芒果基地</text></template>
				<template #content>
					<view class="content">
						<view>关注数：<text>12W</text></view>
						<view>访问量：<text>3W</text></view>
					</view>
				</template>
				<template #botton>
					<image class="botton" src="/static/orchard/attention-icon.png" mode=""></image>
				</template>
			</shop>
			<text class="referral-text">店铺简介：新鲜芒果专卖，芒果预约采摘，芒果树认养。新鲜芒果专卖，芒果预约采摘，芒果树认养。</text>
		</view>
		<view class="site">
			<image src="@/static/orchard/place-icon.png" mode=""></image>
			<text>广西省百色市百色区芒果基地</text>
		</view>
	</view>
</template>

<script>
	import Shop from '@/compotents/shop/Shop.vue'
	export default {
		components: {
			Shop
		}
	}
</script>

<style lang="scss">
	.referral-box {
		.referral {
			width: 100%;
			padding: 24rpx 30rpx;
			border: 2rpx solid #e8e8e8;
			background: #FFFFFF;
			border-radius: 40rpx 40rpx 0 0;

			.referral-text {
				display: inline-block;
				padding-top: 24rpx;
				font-size: 28rpx;
				color: #666666;
			}
		}

		.site {
			padding: 24rpx 36rpx;
			font-size: 28rpx;
			background: #FFFFFF;
			color: #333333;

			&>image {
				width: 28rpx;
				height: 32rpx;
				margin-right: 24rpx;
			}
		}
	}

	.title {
		font-size: 36rpx;
		color: #111111;
	}

	.content {
		display: flex;
		align-items: center;
		font-size: 22rpx;
		color: #333333;

		&>view {
			margin-right: 24rpx;
		}
	}

	.botton {
		width: 40rpx;
		height: 40rpx;
	}
</style>
