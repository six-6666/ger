<template>
	<view class="subject">
		<!-- 商品价格展示模块 -->
		<view class="price-module">
			<view class="price-share">
				<view>
					<text class="prs">￥</text>
					69.00
				</view>
				<image src="/static/category/GoodsCon/icon-share.png" mode=""></image>
			</view>
			<view class="title">金煌芒大芒果敬神款160cm 限时竞拍</view>
			<view class="price-count">
				<text>原价：1845</text>
				<text>库存：123</text>
				<text>销量：185</text>
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
			<view class="shop-content">
				<image src="/static/common/timg.jpg" mode=""></image>
				<view class="title-text">
					<text class="title">天之娇芒果旗舰店</text>
					<text class="text">广西省百色市百色区阿拉善芒果基地</text>
				</view>
				<view class="cbon">进入店铺</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {};
</script>

<style lang="scss">
.subject {
	.price-module {
		width: 100%;
		padding: 24rpx 30rpx;
		background: #ffffff;
		.price-share {
			display: flex;
			align-items: center;
			justify-content: space-between;
			.prs{
				font-size: 28rpx;
				display: inline-block;
			}
			& > view {
				font-size: 40rpx;
				font-family: PingFangSC-Semibold, PingFang SC;
				font-weight: 600;
				color: #ee0000;
				line-height: 40rpx;
			}
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
			padding: 24rpx 0;
			line-height: 44rpx;
		}
		.price-count {
			display: flex;
			align-items: center;
			justify-content: space-between;
			& > text {
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
				line-height: 40rpx;
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
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
		}
		.shop-content{
			padding-top: 24rpx;
			position: relative;
			display: flex;
			&>image{
				width: 88rpx;
				height: 88rpx;
			}
			.title-text{
				padding-left:24rpx ;
				.title{
					font-size: 32rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					padding-bottom: 12rpx;
					color: #333;
					display: block;
				}
				.text{
					font-size: 22rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #333333;
					line-height: 32rpx;
				}
			}
			.cbon{
				width: 136rpx;
				height: 48rpx;
				position: absolute;
				right: 0;
				background: #FF9900;
				border-radius: 8rpx;
				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FFFFFF;
				line-height: 48rpx;
				text-align: center;
			}
		}
	}
}
</style>
