<template>
	<view class="action-item">
		<!-- 传入图片 -->
		<image v-if="url" :src="url"></image>
		<slot name="img"></slot>
		<view class="action-item-right">
			<!-- 传入标题 -->
			<text v-if="title">{{ title }}</text>
			<!-- 插入标题 -->
			<slot name="title"></slot>
			<view class="price-box">
				<!-- 插入价格与用户名 -->
				<view class="price-box-item">
					<price v-if="price" :price="price"></price>
					<slot name="price"></slot>
				</view>
				<!-- 竞拍状态 -->
				<view class="item-bottom" v-if="statr != undefined & time != undefined">
					<view class="state-box" v-if="statr != undefined">
						<view class="formerly" v-if="!statr">
							<image src="/static/home/formerly.png"></image>
							<text>已结束</text>
						</view>
						<view class="today" v-if="statr">
							<image src="/static/home/today.png"></image>
							<text>正在进行</text>
						</view>
					</view>
					<view class="time">{{ time }}</view>
				</view>
			</view>
			<!-- 插入按钮 -->
			<view class="botton-box"><slot name="botton"></slot></view>
		</view>
	</view>
</template>

<script>
	import Price from '../price-part/Price.vue'
export default {
	components:{Price},
	props: {
		statr: {
			type: Boolean,
			default: undefined
		},
		time:{
			type:String,
			default:undefined
		},
		title:{
			type:String,
			default:undefined
		},
		url:{
			type:String,
			default:undefined
		},
		price:{
			type:Number | String,
			default:undefined
		}
	}
};
</script>

<style lang="scss">
.action-item {
	display: flex;
	padding: 26rpx 30rpx;
	background: #ffffff;
	& > /deep/ image {
		width: 200rpx;
		height: 200rpx;
		border-radius: 4rpx;
	}
	&-right {
		position: relative;
		padding-left: 24rpx;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		& > /deep/ text {
			font-size: 28rpx;
			font-weight: 600;
			color: #111111;
		}
		.price-box {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			&-item {
				display: flex;
				align-items: center;
			}
			.item-bottom {
				display: flex;
				align-items: center;
				margin-top: 16rpx;
				.state-box {
					font-size: 22rpx;
					image {
						width: 24rpx;
						height: 24rpx;
						margin-right: 12rpx;
					}
					.formerly {
						color: #999999;
					}
					.today {
						color: #ff9900;
					}
				}
				.time {
					font-size: 22rpx;
					display: inline-block;
					margin-left: 24rpx;
					color: #333333;
				}
			}
		}
		.botton-box {
			position: absolute;
			right: 0;
			bottom: 0;
		}
	}
}
</style>
