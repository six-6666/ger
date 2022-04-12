<template>
	<view class="auction">
		<view class="box">
			<view class="box-title">
				<text>精品竞拍</text>
				<view class="box-title-right">
					<text @click="skip()">全部竞拍</text>
					<image src="/static/home/more.png"></image>
				</view>
			</view>
			<view class="img-box">
				<image :src="item.imageUrl" v-for="(item,index) in imgurl" :key="index"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			imgurl:{
				type:Array,
				default:() =>[]
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			skip(){
				uni.navigateTo({
					url:'/pages/index/goods-auction/GoodsAuction'
				})
			}
		}
	}
</script>

<style lang="scss">
	.auction{
		width: 100%;
		height: 316rpx;
		background: #FFFFFF;
		border-radius: 12rpx;
		.box{
			width: 100%;
			height: 200rpx;
			padding: 24rpx;
			border-radius: 12rpx 12rpx 0 0;
			background: linear-gradient(45deg, #A36DFF 0%, #526FFF 100%, #5B74F2 100%, #5B74F2 100%);
			box-shadow: 0px 0px 20rpx 0px rgba(0, 0, 0, 0.1);
			.box-title{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-bottom: 24rpx;
				&>text{
					font-size: 32rpx;
					font-weight: 600;
					color: #FFFFFF;
				}
				&-right{
					&>text{
						font-size: 22rpx;
						color: #FFFFFF;
					}
					&>image{
						width: 32rpx;
						height: 32rpx;
						margin-left: 8rpx;
					}
				}
			}
			.img-box{
				display: flex;
				justify-content: space-between;
				&>image{
					width: 200rpx;
					height: 200rpx;
					border-radius: 12rpx;
				}
			}
		}
	}
</style>
