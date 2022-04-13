<template>
	<view class="copuon">
		<view :class="{ imgfoo: false }" class="img">
			<view class="sum">
				￥
				<text>5</text>
			</view>
			<text>满10元可用</text>
		</view>
		<view class="copuon-right">
			<view class="top">
				<text>多规格商品卷</text>
				<view class="time">2天后到期</view>
			</view>
			<view class="bottom">
				<text>2022-02-20到期</text>
				<!-- 优惠券选中按钮 -->
				<view v-if="false" :class="{ circlefoo: pitch }" class="circle" @click="pitch = !pitch"></view>
				<!-- <view class="btn">可使用</view> -->
				<view class="btnfoo">已失效</view>
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
	data() {
		return {
			pitch: false
		};
	}
};
</script>

<style lang="scss" scoped>
.copuon {
	display: flex;
	background: #ffffff;
	.img {
		width: 240rpx;
		height: 216rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: url('/static/classify/orthogon.png') no-repeat;
		background-size: 100%;
		.sum {
			font-size: 28rpx;
			font-weight: 600;
			color: #ffffff;
			& > text {
				font-size: 80rpx;
			}
		}
		& > text {
			font-size: 22rpx;
			color: #ffffff;
		}
	}
	&-right {
		flex: 1;
		padding: 32rpx 0 32rpx 24rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.top {
			display: flex;
			justify-content: space-between;
			font-size: 32rpx;
			color: #333333;
			.time {
				width: 136rpx;
				height: 44rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: url(../../static/classify/corner.png) no-repeat;
				background-size: 100%;
				font-size: 22rpx;
				color: #ffffff;
			}
		}
		.bottom {
			display: flex;
			justify-content: space-between;
			padding-right: 30rpx;
			& > text {
				font-size: 22rpx;
				color: #999999;
			}
			.circle {
				width: 32rpx;
				height: 32rpx;
				border: 1px solid #999999;
				border-radius: 50%;
			}
			.circlefoo {
				background: url('/static/commin/pitch.png') no-repeat;
				border: 0;
			}
			.btn,
			.btnfoo {
				width: 120rpx;
				height: 40rpx;
				border-radius: 28rpx;
				font-size: 22rpx;
				color: #ffffff;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.btn {
				background: #ff9900;
			}
			.btnfoo {
				background: #cccccc;
			}
		}
	}
}
</style>
