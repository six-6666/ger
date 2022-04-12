<template>
	<view class="or-item">
		<shop :approve="false">
			<template #img>
				<image src="/static/img/img4.jpg"></image>
			</template>
			<template #title><text class="title">百色市天之娇芒果基地</text></template>
			<template #content><text class="content"></text>广西省百色市百色区芒果基地</template>
			<template #botton>
				<view class="botton" @click="todetails()">进入果园</view>
			</template>
		</shop>
		<view class="center">
			<view class="center-item">
				<text>8</text>
				年果园
			</view>
			<view class="center-item">
				<text>8W</text>
				访问
			</view>
			<view class="center-item">
				<text>18W</text>
				关注
			</view>
		</view>
		<view class="bottom">
			<view class="bottom-item" v-for="item of 3">
				<image src="/static/img/img4.jpg" mode=""></image>
				<view class="right-bottom-box">
					￥69
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Shop from '@/compotents/shop/Shop.vue'
	export default {
		components: {
			Shop
		},
		data(){
			return{
				
			}
		},
		methods:{
			todetails(){
				uni.navigateTo({
					url:'/pages/orchard/orchard-details/OrchardDetails'
				})
			}
		}
	}
</script>

<style lang="scss">
	.or-item {
		width: 100%;
		height: 492rpx;
		position: 24rpx 30rpx;
		background: #FFFFFF;
		padding: 24rpx 30rpx;

		.center {
			margin: 24rpx 0;
			display: flex;
			justify-content: space-between;

			&-item {
				width: 200rpx;
				height: 56rpx;
				// line-height: 56rpx;
				// text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #F8F8F8;
				border-radius: 28rpx;
				font-size: 28rpx;
				color: #666666;

				&>text {
					padding: 0 12rpx;
					font-size: 40rpx;
					font-weight: 600;
					color: #111111;
				}
			}
		}

		.bottom {
			display: flex;
			justify-content: space-between;

			&-item {
				position: relative;

				&>image {
					width: 220rpx;
					height: 220rpx;
					border-radius: 20rpx;
				}

				.right-bottom-box {
					position: absolute;
					right: 0;
					bottom: 0;
					width: 88rpx;
					height: 48rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					background: rgba($color: #000000, $alpha: .3);
					border-radius: 20rpx 0px 20rpx 0px;
					font-size: 28rpx;
					font-weight: 600;
					color: #FFFFFF;
				}
			}
		}
	}

	.title {
		font-size: 28rpx;
		font-weight: 600;
		color: #111111;
	}

	.content {
		font-size: 28rpx;
		color: #999999;
	}

	.botton {
		width: 120rpx;
		height: 48rpx;
		line-height: 48rpx;
		text-align: center;
		background: linear-gradient(90deg, #FFC900 0%, #FF9900 100%);
		border-radius: 25rpx;
		font-size: 22rpx;
		color: #FFFFFF;
	}
</style>
