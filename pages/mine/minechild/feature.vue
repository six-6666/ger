<template>
	<view class="feature">
		<view class="feature-content">
			<view 
			class="feature-content-item" 
			v-for="(item, index) in title" 
			:key="index" 
			@click="clicknav(item.path)"
			>
				<view class="title">{{ item.title }}<text>{{item.quantity}}</text></view>
				<view :class="{ wire: title.length - 1 !== index }"></view>
			</view>
		</view>
		<view class="feature-bottom">
			<view 
			class="feature-bottom-item" 
			v-for="(item,index) in topdata" 
			:key="index"
			@click="clicknav(item.path)"
			>
				<view class="img">
					<image :src="item.imgurl"></image>
					<view v-if="item.quantity">
						<view class="der">
							{{item.quantity}}
						</view>
					</view>
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props:{
		quantitys:{
			type:Object,
			default:() =>{}
		}
	},
	data() {
		return {
			title: [
					{title:'收藏',quantity:undefined,path:'/pages/mine/my-collect/MyCollect'},
					{title:'足迹',quantity:undefined,path:'/pages/mine/my-footprint/MyFootprint'},
					{title:'关注',quantity:undefined,path:'/pages/mine/my-focus/MyFocus'}],
			topdata:[
				{title:'待付款',imgurl:'/static/mine/payment.png',quantity:undefined,path:''},
				{title:'待发货',imgurl:'/static/mine/deliver.png',quantity:undefined,path:''},
				{title:'待收货',imgurl:'/static/mine/toreceiving.png',quantity:undefined,path:''},
				{title:'待评价',imgurl:'/static/mine/evaluate.png',quantity:undefined,path:''},
				{title:'售后/退款',imgurl:'/static/mine/after.png',quantity:undefined,path:''}],
			states: 0 //保存点击index的状态
		};
	},
	created() {
		this.quder();
	},
	// 路由跳转
	methods: {
		clicknav(path) {
			uni.navigateTo({
				url:path
			})
		},
		// 对传入的数量数据进行赋值给topdata的quantity
		quder(){
			for (var i = 0; i < this.topdata.length; i++) {
				this.topdata[i].quantity = this.quantitys.topdata[i]
			};
			for (var i = 0; i < this.title.length; i++) {
				this.title[i].quantity = this.quantitys.title[i]
			}
		}
	},
	
};
</script>

<style lang="scss">
.feature {
	width: 100%;
	height: 230rpx;
	background: #ffffff;
	border-radius: 24rpx;
	padding: 0 24rpx;
	margin-bottom: 24rpx;
	&-content {
		display: flex;
		height: 72rpx;
		border-bottom: 2rpx solid #f8f8f8;
		&-item{
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			flex: auto;
			.title{
				font-size: 28rpx;
				color: #999999;
				>text{
					padding-left: 8rpx;
					font-weight: 600;
					color: #111111;
				}
			}
		}
	}
	&-bottom {
		display: flex;
		&-item {
			padding: 32rpx 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			flex: 1;
			.img{
				position: relative;
				> image {
					width: 48rpx;
					height: 48rpx;
					margin-bottom: 12rpx;
				}
				.der{
					position: absolute;
					top: -20%;
					right: -20%;
					height: 30rpx;
					border-radius: 50%;
					display: inline-block;
					padding: 4rpx 4rpx;
					line-height: 20rpx;
					color: #FFFFFF;
					text-align: center;
					background: #eb0000;
					border: 1rpx solid #ff0000;
					font-size: 18rpx;
				}
			}
			>text{
				color: #333333;
				font-size: 22rpx;
			}
		}
	}
}
.wire {
	width: 2rpx;
	height: 48rpx;
	position: absolute;
	right: 0;
	background: #e8e8e8;
	border-radius: 1rpx;
}
</style>
