<template>
	<view class="price">
		<text class="chars">￥</text>
		<text class="digit">{{price}}</text>
	</view>
</template>

<script>
	export default {
		props:{
			price:{
				type:Number | String,
				default:undefined
			}
		}
	}
</script>

<style lang="scss">
	.price {
		color: #EE0000 !important;

		.chars {
			font-size: 28rpx !important;
		}

		.digit {
			font-size: 40rpx !important;
			font-weight: 600 !important;
		}
	}
</style>
