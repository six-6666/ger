<template>
	<view class="recommend">
		<view class="top">
			<text>推荐果园</text>
			<view class="top-right">
				<text>更多果园</text>
				<image src="/static/mine/more.png"></image>
			</view>
		</view>
		<!-- 主要内容 -->
		<view class="content" v-for="(item,index) in orcharddata" :key="index">
			<!-- 图片盒子 -->
			<view class="img-box">
				<image :src="item.shopLogo"></image>
				<view class="left-top-box">
					{{item.grade}}分
				</view>
			</view>
			<!-- 底部title -->
			<view class="content-title">
				<text>{{item.shopAddress}}</text>
				<view class="botton">
					查看果园
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			orcharddata:{
				type:Array,
				default:() =>[]
			}
		}
	}
</script>

<style lang="scss">
	.recommend{
		margin-top: 44rpx;
		.top{
			display: flex;
			justify-content: space-between;
			align-items: center;
			&>text{
				font-size: 32rpx;
				font-weight: 600;
				color: #111111;
			}
			&-right{
				font-size: 22rpx;
				color: #999999;
				>image{
					width: 32rpx;
					height: 32rpx;
				}
			}
		}
		.content{
			.img-box{
				padding: 24rpx 0;
				width: 100%;
				height: 240rpx;
				position: relative;
				>image{
					width: 100%;
					height: 100%;
				border-radius: 12rpx;
				}
				.left-top-box{
					width: 100rpx;
					height: 40rpx;
					line-height: 40rpx;
					text-align: center;
					position: absolute;
					top: 24rpx;
					left: 0;
					background: #78D222;
					border-radius: 12rpx 0px 12rpx 0px;
					font-size: 24rpx;
					color: #FFFFFF;
				}
			}
			&-title{
				display: flex;
				justify-content: space-between;
				&>text{
					font-size: 28rpx;
					font-weight: 600;
					color: #333333;
				}
				.botton{
					width: 128rpx;
					height: 40rpx;
					line-height: 40rpx;
					text-align: center;
					font-size: 22rpx;
					color: #FFFFFF;
					background: linear-gradient(90deg, #FFC900 0%, #FF9900 100%);
					border-radius: 12rpx 0px 12rpx 0px;
				}
			}
		}
	}
</style>
