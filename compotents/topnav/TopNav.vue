<template>
	<view class="topnav">
		<!-- 顶部占位盒子 -->
		<view class="status_bar"></view>
		<!-- 导航栏 -->
		<view class="bar">
			<!-- 导航栏左 -->
			<view class="left">
				<view  v-if="retreat" class="retraet">
					<image src="/static/commin/return.png" @click="toretreat"></image>
				</view>
					<slot name="left"></slot>
			</view>
			<!-- 导航栏中间 -->
			<view class="center">
					<slot name="center"></slot>
				<text :class="{wee:titlewee !== ''}">{{title}}{{titlewee}}</text>
				</view>
			<!-- 导航栏右 -->
			<view class="right">
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:''
			},
			titlewee:{
				type:String,
				default:''
			},
			retreat:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
			}
		},
		methods:{
			toretreat(){
				uni.navigateBack({
					delta:1
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.bar{
		height: 88rpx;
		width: 100%;
		display: flex;
		padding: 0 30rpx;
		background: #FFFFFF;
		&>view{
			display: flex;
			align-items: center;
		}
		.left{
			flex: 1;
			.retraet{
				display: flex;
				align-items: center;
				&>image{
					width: 40rpx;
					height: 40rpx;
				}
			}
			& /deep/ image{
				width: 56rpx;
				height: 56rpx;
			}
			& /deep/ text{
				font-size: 34rpx;
				font-weight: 600;
				color: #333333;
			}
		}
		.center{
			flex: auto;
			justify-content: center;
			font-size: 34rpx;
			font-weight: 600;
			color: #333333;
			& /deep/ image{
					width: 56rpx;
					height: 56rpx;
					margin-right: 12rpx;
					border-radius: 50%;
					overflow: hidden;
			}
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: row-reverse;
			& /deep/ image{
				width: 40rpx;
				height: 40rpx;
				margin-left: 24rpx;
			}
			& /deep/ text{
				font-size: 28rpx;
				color: #333333;
			}
		}
	}
	.wee{
		font-weight: 400 !important;
	}
	
</style>
