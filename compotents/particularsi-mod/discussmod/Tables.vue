<template>
	<view class="froms">
		<view class="tr th">
			<view class="td-little">养分</view>
			<view class="td-big">丰富度</view>
			<view class="td-little">养分</view>
			<view class="td-big">丰富度</view>
		</view>
		<view class="tr th-d" v-for="item of 6" :key="item">
			<view class="td-little">有机质</view>
			<view class="td-big">丰富</view>
			<view class="td-little">硼</view>
			<view class="td-big">丰富</view>
		</view>
	</view>
</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	.tr{
		display: flex;
		&>view{
			margin: -1rpx 0 0 -1rpx;
		}
		.td-little{
			width: 148rpx;
			height: 64rpx;
			line-height: 64rpx;
			text-align: center;
			border: 1rpx solid #AAAAAA80;
		}
		.td-big{
			width: 200rpx;
			height: 64rpx;
			line-height: 64rpx;
			text-align: center;
			border: 1rpx solid #AAAAAA80;
		}
	}
	
	.th{
		font-size: 22rpx;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
		line-height: 32rpx;
	}
	.th-d{
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #666666;
		line-height: 32rpx;
	}
</style>
