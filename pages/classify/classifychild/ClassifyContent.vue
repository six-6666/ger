<template>
	<view class="content">
		<scroll-view :scroll-y="true" style="height: 100%;">
			<view class="item" v-for="(item,index) in contentdata" :key="index">
				<image :src="item.image.split(',')[0]"></image>
				<view class="item-content">
					<text>{{item.name}}</text>
					<view class="price">￥<text>{{item.costPrice}}</text></view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:{
			contentdata:{
				type:Array,
				default:() =>[]
			}
		}
	}
</script>

<style lang="scss">
	.content{
		padding: 24rpx 30rpx 0 24rpx;
		display: flex;
		flex: auto;
		flex-direction: column;
		.item{
			width: 486rpx;
			height: 160rpx;
			display: flex;
			background: #FFFFFF;
			border-radius: 12rpx;
			margin-bottom: 24rpx;
			&>image{
				width: 160rpx;
				height: 100%;
				border-radius: 12rpx 0 0 12rpx;
			}
			&-content{
				padding: 24rpx 30rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				&>text{
					font-size: 28rpx;
					color: #333333;
				}
				.price{
					font-size: 28rpx;
					font-weight: 600;
					color: #EE0000;
					>text{
						font-size: 40rpx;
					}
				}
			}
		}
	}
</style>
