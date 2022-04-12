<template>
	<view class="brief">
		<view class="brief-top">
			<view class="brief-top-item" v-for="(item,index) in text" :key="index">
				<image src="/static/home/checked.png"></image>
				<text>{{item}}</text>
			</view>
		</view>
		
		<view class="brief-bottom">
			<view 
			class="brief-bottom-item" 
			v-for="(item,index) in texts" 
			:key="index"
			@click="skip(item.path)"
			>
				<image src="/static/img/img2.jpg"></image>
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				text:['官方商城','果园直供','售后无忧','正品溯源'],
				texts:[
					{title:'我的预约',path:''},
					{title:'我的认养',path:''},
					{title:'我的收藏',path:'/pages/mine/my-collect/MyCollect'},
					{title:'领劵中心',path:'/pages/index/claim-coupon/ClaimCoupon'},
					{title:'每日签到',path:''}]
			}
		},
		methods:{
			// 跳转不同页面
			skip(path){
				uni.navigateTo({
					url:path
				})
			}
		}
	}
</script>

<style lang="scss">
	.brief{
		padding: 24rpx 10rpx;
		.brief-top{
			display: flex;
			justify-content: space-between;
			&-item{
				display: flex;
				align-items: center;
				&>image{
					width: 32rpx;
					height: 32rpx;
					margin-right: 12rpx;
				}
				&>text{
					font-size: 24rpx;
					color: #999999;
				}
			}
		}
		.brief-bottom{
			margin-top: 48rpx;
			display: flex;
			justify-content: space-between;
			&-item{
				display: flex;
				flex-direction: column;
				&>image{
					width: 96rpx;
					height: 96rpx;
					border-radius: 50%;
					margin-bottom: 24rpx;
				}
				&>text{
					font-size: 24rpx;
					color: #666666;
				}
			}
		}
	}
</style>
