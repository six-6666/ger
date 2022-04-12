<template>
	<view class="subject" v-if="datas">
		<!-- 商品价格展示模块 -->
		<view class="price-module">
			<view class="price-share">
				<!-- 价格 -->
				<price :price="datas.price"></price>
				<!-- 分享按钮 -->
				<image src="/static/classify/icon-share.png"></image>
			</view>
			<!-- 标题 -->
			<view class="title">{{datas.name}}</view>
			
			<!-- 预约特有模块 -->
			<view class="introduce-box" v-if="datas.remark">
				<text>{{datas.remark}}</text>
			</view>
			
			<view class="price-count">
				<text>原价：1845</text>
				<text>库存：123</text>
				<text>销量：185</text>
			</view>
			
			<!-- 预约详情特有模块 -->
			<view class="order-box" v-if="datas.type == 2">
				<view class="order-box-top">
					<view class="order-box-top-time">
						预约起止时间：
						<text>{{datas.bkStart.slice(0,10)}} — {{datas.bkEnd.slice(0,10)}}</text>
					</view>
					<view class="order-box-top-botton">
						{{Status}}
					</view>
				</view>
				<text>10斤装百色芒果   1箱起订   89元/箱 (无数据)</text>
			</view>
		</view>
		<!-- 运费选项模块 -->
		<view class="transport-module">
			<view class="transport-module-dr">
				运费：
				<text class="item-prs">免运费</text>
			</view>
			<view class="transport-module-er">
				已选择：
				<text class="item-prs">默认</text>
				<image src="/static/common/icon-right.png" mode=""></image>
			</view>
		</view>
		<!-- 产品溯源 -->
		<view class="trace-module">
			<view><view class="prs">产品溯源</view><text>原产地直供溯源信息查询</text></view>
			<image src="/static/common/icon-right.png" mode=""></image>
		</view>
		<!-- 门店信息 -->
		<view class="shop-message">
			<view class="shop-message-titles">门店信息</view>
			<shop>
				<template #img><image class="img" :src="datas.shop.shopLogo"></image></template>
				<template #title><text class="title">{{datas.shop.shopName}}</text></template>
				<template #content><text class="content"></text>{{datas.shop.shopAddress}}</template>
				<template #botton><view class="botton">
					进入店铺
				</view></template>
			</shop>
		</view>
		<view class="subject-bottom">
			<text>产品介绍</text>
			<view v-html="datas.content">
				
			</view>
		</view>
	</view>
</template>

<script>
	import Price from '../price-part/Price.vue'
	import Shop from '../shop/Shop.vue'
export default {
	components:{Price,Shop},
	props:{
		datas:{
			type:Object,
			default: () =>{}
		}
	},
	data(){
		return{
		}
	},
	created() {

	},
	methods:{

	},
	computed:{
		// 预约的状态
		Status(){
			if(this.datas.bkStatus == 0) return '未开始'
			if(this.datas.bkStatus == 1) return '进行中'
			if(this.datas.bkStatus == 2) return '已结束'
		}
	}
};
</script>

<style lang="scss">
.subject {
	.price-module {
		width: 100%;
		padding-top: 24rpx;
		background: #ffffff;
		.price-share {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx;
			& > image {
				width: 32rpx;
				height: 32rpx;
			}
		}
		.title {
			font-size: 32rpx;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #111111;
			padding: 24rpx 30rpx;
			line-height: 44rpx;
		}
		.price-count {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 30rpx 24rpx 30rpx;
			& > text {
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
				line-height: 40rpx;
			}
		}
		.order-box{
			padding: 24rpx 30rpx;
			border-top: 1rpx solid #999999cc;
			&-top{
				display: flex;
				justify-content: space-between;
				align-items: center;
				&-time{
					font-size: 28rpx;
					color: #333333;
					&>text{
						font-size: 28rpx;
						color: #EE0000;
					}
				}
				&-botton{
					width: 114rpx;
					height: 48rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 24rpx;
					border: 2px solid #EE0000;
					
					font-size: 22rpx;
					color: #EE0000;
				}
			}
			&>text{
				padding-top: 14rpx;
				display: inline-block;
				font-size: 28rpx;
				color: #999999;
			}
		}
		.introduce-box{
			font-size: 22rpx;
			color: #666666;
			padding: 0 30rpx 24rpx 30rpx;
			&>text{
				display: block;
			}
		}
	}
	.transport-module {
		background: #fff;
		margin-top: 24rpx;
		.item-prs{
			font-size: 28rpx;
			color: #333;
		}
		& > view {
			width: 100%;
			padding-left: 30rpx;
			padding-right: 30rpx;
			height: 88rpx;
			display: flex;
			align-items: center;
			background: #ffffff;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
			line-height: 40rpx;
			> i {
				color: #333;
			}
		}
		&-dr{
			border-bottom: 1px solid #AAAAAA50;
		}
		&-er {
			width: 100%;
			height: 88
			rpx;
			background: #ffffff;
			position: relative;
			> image {
				width: 32rpx;
				height: 32rpx;
				position: absolute;
				right: 30rpx;
			}
		}
	}
	.trace-module{
		width: 750rpx;
		height: 88rpx;
		background: #FFFFFF;
		margin-top: 24rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx 0 30rpx;
		&>view{
			font-size: 28rpx;
			display: flex;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
			>text{
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
				margin-left: 24rpx;
			}
		}
		&>image{
			width: 32rpx;
			height: 32rpx;
		}
	}
	.shop-message{
		width: 750rpx;
		height: 200rpx;
		background: #FFFFFF;
		padding: 24rpx 30rpx;
		margin-top: 24rpx;
		&-titles{
			font-size: 28rpx;
			margin-bottom: 24rpx;
			color: #333333;
		}
	}
}
.img{
	width: 88rpx !important;
	height: 88rpx !important;
}
.title{
	font-size: 32rpx;
	color: #333333;
}
.content{
	font-size: 22rpx;
	color: #333333;
}
.botton{
	width: 136rpx;
	height: 48rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #FF9900;
	border-radius: 8rpx;
	font-size: 22rpx;
	color: #FFFFFF;
}
.subject-bottom{
	&>text{
		display: inline-block;
		font-size: 32rpx;
		padding: 48rpx 311rpx 24rpx 311rpx;
		color: #333333;
	}
}
</style>
