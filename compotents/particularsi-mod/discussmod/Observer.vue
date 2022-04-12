<template>
	<view>
		<view class="observer" v-for="(item, index) in datas" :key="index">
			<!-- 头像与昵称 -->
			<view class="observer-top">
				<view class="observer-top-ig">
					<image :src="item.headportrait" mode=""></image>
					<text>{{ item.urseid }}</text>
				</view>
				<text>{{ item.releasetime }}</text>
			</view>
			<!-- 评分与量 -->
			<view class="observer-star">
				<view class="observer-star-img">
					<image v-for="item of item.star" src="/static/category/GoodsCon/star.png"></image>
					<image v-for="item of 5 - item.star" src="/static/category/GoodsCon/star_foo.png"></image>
				</view>
				<text class="observer-star-txt">{{ item.commodity }}</text>
			</view>
			<!-- 具体评论 -->
			<view class="content-text">{{ item.critictext }}</view>
			<!-- 评论的图片 -->
			<view class="content-img"><image v-for="(urlig, index) in item.imgurl" :key="index" :src="urlig" mode=""></image></view>
			<view class="bottom">
				<!-- 回复评论 -->
				<view class="tottom-left">
					<image src="/static/category/GoodsCon/icon-discuss.png" mode=""></image>
					<text>{{ item.reply }}</text>
				</view>
				<!-- 赞 -->
				<view class="tottom-left">
					<image src="/static/category/GoodsCon/icon-give.png" mode=""></image>
					<text>{{ item.like }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		datas: {
			type: Object,
			default: () =>{}
		}
	}
};
</script>

<style lang="scss">
.observer {
	margin-bottom: 48rpx;
}
.observer-top {
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > text {
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #acacac;
		line-height: 32rpx;
	}
	&-ig {
		> image {
			width: 56rpx;
			height: 56rpx;
			margin-right: 24rpx;
		}
		> text {
			font-size: 28rpx;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #3f3f3f;
			line-height: 40rpx;
		}
	}
}
.observer-star {
	padding-left: 24rpx;
	display: flex;
	align-items: center;
	margin-top: 24rpx;
	&-img {
		width: 240rpx;
		border-right: 1rpx solid #e8e8e8;
		> image {
			width: 34rpx;
			height: 32rpx;
			padding-right: 8rpx;
		}
	}
	&-txt {
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		padding-left: 24rpx;
		color: #999999;
		line-height: 32rpx;
		padding-l: 24rpx;
	}
}
.content-text {
	padding: 24rpx 24rpx;
	font-size: 28rpx;
	font-family: PingFangSC-Regular, PingFang SC;
	font-weight: 400;
	color: #3f3f3f;
	line-height: 40rpx;
}
.content-img {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding: 0 24rpx;
	margin-bottom: 24rpx;
	& > image {
		width: 200rpx;
		height: 200rpx;
		border: 1rpx solid #000000;
		border-radius: 8rpx;
	}
}
.bottom {
	display: flex;
	flex-direction: row-reverse;
	.tottom-left {
		display: flex;
		padding-left: 46rpx;
		align-items: center;
		> image {
			width: 42rpx;
			height: 40rpx;
		}
		> text {
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #acacac;
			margin-left: 12rpx;
			line-height: 40rpx;
		}
	}
}
</style>
