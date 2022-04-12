<template>
	<view class="">
		<!-- 头部title部分 -->
		<view class="top-box">
			<view class="titles">
				百色天之娇芒果基地
				<view class="titles-right">果园评级：A+</view>
			</view>
			<view class="top-box-content">
				<view>
					果园人气：
					<text class="content-text">4723单</text>
				</view>
				<view>
					果园年龄：
					<text class="content-text">7年</text>
				</view>
			</view>
			<view class="top-box-content">
				<view>
					产量预估：
					<text class="content-text">100万斤</text>
				</view>
				<view>
					果园评分：
					<text class="content-text">98分</text>
				</view>
			</view>
			<view class="top-box-content">
				<view>
					产量预估种植品种：
					<text class="content-text">金煌芒、青皮芒、水仙芒</text>
				</view>
			</view>
		</view>
		<!-- 果园信息 -->
		<view class="detail-box">
			<view class="detail-box-det">果园信息（A级）</view>
			<view class="detail-box-di">地块信息：</view>
			<!-- 地块信息表 -->
			<tables></tables>
			<view class="detail-box-di">生长环境（A级）</view>
			<view class="detail-box-en">
				<view class="detail-box-en-item" v-for="item of 4" :key="item">
					<view class="item-circle">
						<view>年光照量</view>
						<text>40552.43lux</text>
					</view>
					<text>良好</text>
				</view>
			</view>
			<tables></tables>
		</view>
	</view>
</template>

<script>
import tables from './discussmod/Tables.vue';
export default {
	components: { tables },
	data() {
		return {};
	}
};
</script>

<style lang="scss">
.top-box {
	width: 750rpx;
	height: 284rpx;
	background: #ffffff;
	padding: 24rpx 30rpx;
	margin-bottom: 24rpx;
	.titles {
		display: flex;
		justify-content: space-between;
		font-size: 32rpx;
		padding-bottom: 24rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #111111;
		line-height: 44rpx;
		&-right {
			width: 176rpx;
			height: 44rpx;
			background: #ffffff;
			border-radius: 20rpx 0px 20rpx 0px;
			border: 2rpx solid #ff9900;
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #ff9900;
			text-align: center;
			line-height: 40rpx;
		}
	}
	&-content {
		display: flex;
		justify-content: space-between;
		font-size: 28rpx;
		padding-bottom: 24rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
		line-height: 40rpx;
		.content-text {
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
			line-height: 40rpx;
		}
	}
}
.detail-box {
	width: 100%;
	background: #ffffff;
	margin-bottom: 24rpx;
	padding: 0 30rpx 24rpx 30rpx;
	&-det {
		width: 750rpx;
		height: 80rpx;
		background: #ffffff;
		border-bottom: 1rpx solid #aaaaaa80;
		font-size: 28rpx;
		padding-top: 24rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
	}
	&-di {
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
		padding: 24rpx 0;
	}
	.detail-box-en {
		display: flex;
		justify-content: space-between;
		margin-bottom: 24rpx;
		.detail-box-en-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			.item-circle {
				width: 160rpx;
				height: 160rpx;
				display: flex;
				margin-bottom: 12rpx;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background: #ffffff;
				border-radius: 50%;
				border: 2rpx solid #e8e8e8;
				& > view {
					font-size: 20rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #666666;
					line-height: 28rpx;
				}
				& > text {
					font-size: 24rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 34rpx;
				}
			}
			& > text {
				font-size: 28rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #ffaa00;
			}
		}
	}
}
</style>
