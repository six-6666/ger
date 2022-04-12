<template>
	<view class="buy-navber">
		<view class="buy-navber-left">
			<view>
				<image src="/static/classify/icon-service.png"></image>
				<text>客服</text>
			</view>
			<view>
				<image src="/static/classify/icon-collect.png"></image>
				<text>收藏</text>
			</view>
			<view>
				<image src="/static/classify/icon-shopping-trolley.png"></image>
				<text>购物车</text>
			</view>
		</view>
		<view class="buy-navber-right">
			<view class="button-add">加入购物车</view>
			<view class="button-buy" @click="handle = true">{{ select }}</view>
		</view>

		<view v-if="handle" class="bu-box">
			<view class="wall" @click="handle = false"></view>
			<view class="box">
				<auction-item title="百色金煌芒树认养标准套餐" url="/static/img/img2.jpg" :price="99.99">
					<template #botton><text class="botton">库存：666</text></template>
				</auction-item>
			</view>
		</view>
	</view>
</template>

<script>
import AuctionItem from '../../auction-item/AuctionItem.vue';
export default {
	components: { AuctionItem },
	props: {
		id: {
			type: String | Number,
			default: 0
		}
	},
	data() {
		return {
			handle: false
		};
	},
	methods: {},
	computed: {
		select() {
			if (this.id == 0) return '立即认养';
			if (this.id == 1) return '立即购买';
			if (this.id == 2) return '立即预约';
		}
	}
};
</script>

<style lang="scss">
.buy-navber {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 750rpx;
	height: 100rpx;
	padding: 16rpx 30rpx;
	background: #ffffff;
	box-shadow: 0px 0px 2rpx 0px rgba(0, 0, 0, 0.15);
	.buy-navber-left {
		display: flex;
		flex: auto;
		justify-content: space-between;
		& > view {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			> image {
				width: 32rpx;
				height: 29rpx;
			}
			> text {
				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
				line-height: 32rpx;
			}
		}
	}
	.buy-navber-right {
		display: flex;
		margin-left: 40rpx;
		.button-add {
			width: 200rpx;
			height: 76rpx;
			line-height: 76rpx;
			text-align: center;
			background: #ffc000;
			border-radius: 38rpx 0px 0px 38rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #ffffff;
		}
		.button-buy {
			width: 200rpx;
			height: 76rpx;
			line-height: 76rpx;
			text-align: center;
			background: #ff9900;
			border-radius: 0 38rpx 38rpx 0;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #ffffff;
		}
	}
	.bu-box {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: rgba($color: #000000, $alpha: 0.3);
		.wall {
			flex: 1;
		}
		.box {
			width: 100%;
			padding: 24rpx 0rpx;
			background: #ffffff;
			border-radius: 40rpx 40rpx 0px 0px;
			.botton{
				font-size: 28rpx;
				color: #999999;
			}
		}
	}
}
</style>
