<template>
	<view class="serve">
		<view class="title">更多服务</view>
		<view class="content">
			<view 
			class="content-item" 
			v-for="(item,index) in servedata"
			:key="index"
			@click="toskip(item.path)">
				<image :src="item.imgurl" mode=""></image>
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				servedata:[
					{title:'收货地址',imgurl:'/static/mine/site.png',path:''},
					{title:'联系客服',imgurl:'/static/mine/service.png',path:''},
					{title:'认养服务',imgurl:'/static/mine/adopt.png',path:''},
					{title:'优惠卷',imgurl:'/static/mine/coupon.png',path:'/pages/mine/my-coupon/MyCoupon'}],
			}
		},
		methods:{
			toskip(path){
				uni.navigateTo({
					url:path
				})
			}
		}
	}
</script>

<style lang="scss">
	.serve{
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 32rpx;
		background: #FFFFFF;
		border-radius: 24rpx;
		.title{
			font-size: 28rpx;
			font-weight: 600;
			color: #111111;
		}
		.content{
			flex: auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			margin-top: 48rpx;
			&-item{
				display: flex;
				flex-direction: column;
				align-items: center;
				&>image{
					width: 40rpx;
					height: 40rpx;
					margin-bottom: 12rpx;
				}
				&>text{
					font-size: 28rpx;
					color: #333333;
				}
			}
		}
	}
</style>
