<template>
	<view>
		<view :class="{ system: item.system }" class="news" v-for="(item, index) in newsdata" :key="index">
			<image :src="item.url" mode=""></image>
			<view class="content">
				<view class="title">
					{{ item.title }}
					<text>{{ item.time }}</text>
				</view>
				<text>{{ item.text }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		newsdata: {
			type: Array,
			default: () => []
		}
	}
};
</script>

<style lang="scss">
.news {
	display: flex;
	margin-top: 24px;
	& > image {
		width: 96rpx;
		height: 96rpx;
		border-radius: 48rpx;
	}
	.content {
		flex: 1;
		border-bottom: 2rpx solid #e6e6e6;
		padding-bottom: 24rpx;
		margin-left: 24rpx;
		.title {
			display: flex;
			padding: 0 30rpx 6rpx 0;
			justify-content: space-between;
			font-size: 28rpx;
			font-weight: 500;
			color: #111111;
			& > text {
				font-size: 28rpx;
				padding-right: 30rpx;
				color: #959595;
			}
		}
		& > text {
			font-size: 28rpx;
			color: #959595;
		}
	}
}
.system {
	& > image {
		border-radius: 16rpx !important;
	}
	.title {
		font-size: 36rpx !important;
		font-weight: 500 !important;
	}
}
</style>
