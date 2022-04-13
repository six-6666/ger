<template>
	<view class="card" v-if="datas">
		<view class="graph-top"></view>
		<view class="graph-bottom"></view>
		<view class="wire"></view>
		<view class="card-left">
			<view class="card-left-number">
				￥
				<text>{{ datas.couponAmount }}</text>
			</view>
			<view class="card-left-text">满{{ datas.minimumPrice }}元可用</view>
		</view>
		<view class="card-right">
			<view class="card-right-title">
				<text></text>
				{{look(datas.couponType)}}
			</view>
			<view class="card-right-content">
				<view class="content-time">
					<view>
						<view class="oval"></view>
						<text>不可叠加使用</text>
					</view>
					<view>
						<view class="oval"></view>
						<text>{{ datas.invalidTime.slice(0, 10) }}到期</text>
					</view>
				</view>
				<view class="content-button" @click="receive(datas.couponId)">立即领取</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		datas:{
			type:Object,
			default:() =>{}
		}
	},
	methods:{
		receive(couponId){
			this.$emit('receive',couponId);
		},
		look(value){
			if(value == 0) return '店铺通用券'
			if(value == 1) return '店铺指定商品券'
			if(value == 2) return '平台通用券'
			if(value == 3) return '平台指定商品券'
		}
	},
};
</script>

<style lang="scss">
.card {
	width: 100%;
	height: 216rpx;
	background: #fff;
	margin-bottom: 24rpx;
	display: flex;
	position: relative;
	.graph-top {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		top: -20rpx;
		left: 192rpx;
		border-radius: 50%;
		background: #f8f8f8;
	}
	.graph-bottom {
		width: 40rpx;
		height: 40rpx;
		position: absolute;
		bottom: -20rpx;
		left: 192rpx;
		border-radius: 50%;
		background: #f8f8f8;
	}
	.wire {
		width: 2rpx;
		height: 136rpx;
		position: absolute;
		left: 212rpx;
		top: 41rpx;
		background: #f8f8f8;
		border-radius: 8rpx;
	}
	.card-left {
		width: 212rpx;
		height: 100%;
		padding: 30rpx 0;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		&-number {
			font-size: 28rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #333333;
			> text {
				font-size: 80rpx;
			}
		}
		&-text {
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
			line-height: 32rpx;
			display: inline-block;
			background: #e8e8e8;
			border-radius: 8rpx;
			padding: 4rpx 8rpx;
		}
	}
	.card-right {
		width: 476rpx;
		padding: 34rpx 0 32rpx 24rpx;
		&-title {
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
			line-height: 44rpx;
			// & > text {
			// 	font-size: 22rpx;
			// 	padding: 4rpx 8rpx;
			// 	color: #333333;
			// 	margin-right: 12rpx;
			// 	background: #e8e8e8;
			// 	border-radius: 8rpx;
			// 	line-height: 32rpx;
			// }
		}
		&-content {
			display: flex;
			justify-content: space-between;
			padding-top: 32rpx;
			padding-right: 24rpx;
			.content-time {
				& > view {
					display: flex;
					align-items: center;
					padding-bottom: 12rpx;
					.oval {
						width: 8rpx;
						height: 8rpx;
						margin-right: 12rpx;
						background: #cccccc;
						border-radius: 50%;
					}
					font-size: 22rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #999999;
					line-height: 32rpx;
				}
			}
			.content-button {
				width: 148rpx;
				height: 56rpx;
				margin-top: 32rpx;
				text-align: center;
				line-height: 56rpx;
				background: #ff9900;
				border-radius: 28rpx;
				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #ffffff;
			}
		}
	}
}
</style>
