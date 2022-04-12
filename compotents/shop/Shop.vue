<template>
	<view class="top">
		<view class="top-left">
			<!-- 图片插槽 -->
			<slot name="img"></slot>
			<view class="top-left-text">
				<!-- 插入标题 -->
				<slot name="title"></slot>
				<view class="top-left-text-dr">
					<template v-if="approve != undefined">
						<image v-if="!approve" src="/static/orchard/place-icon.png"></image>
						<view v-if="approve" class="approve">认证果园</view>
					</template>
					<!-- 插入内容 -->
					<slot name="content"></slot>
				</view>
			</view>
		</view>
		<slot name="botton"></slot>
	</view>
</template>

<script>
	export default {
		props:{
			approve:{
				type:Boolean,
				default: undefined
			}
		}
	}
</script>

<style lang="scss">
	.top {
		display: flex;
		justify-content: space-between;
		.top-left{
			display: flex;
		& /deep/ image {
			width: 120rpx;
			height: 120rpx;
			border-radius: 8rpx;
			margin-right: 24rpx;
		}
		.top-left-text{
			padding: 12rpx 0;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&-dr{
				font-size: 28rpx;
				color: #999999;
				display: flex;
				&>image{
					width: 40rpx;
					height: 40rpx;
					margin-right: 4rpx;
				}
				.approve{
					width: 120rpx;
					height: 40rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-right: 24rpx;
					background: #FFFFFF;
					border-radius: 4rpx;
					border: 2rpx solid #FF9900;
					font-size: 22rpx;
					color: #FF9900;
				}
			}
		}
		}
	}
</style>
