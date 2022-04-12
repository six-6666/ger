<template>
	<view>
		<view class="observer" v-if="datas">
			<!-- 头像与昵称 -->
			<view class="observer-top">
				<view class="observer-top-ig">
					<image :src="datas.wxUserConsume.headimg"></image>
					<text>{{ datas.wxUserConsume.name }}</text>
				</view>
				<text>{{ datas.updateTime.slice(0, 10) }}</text>
			</view>
			<!-- 评分与量 -->
			<view class="observer-star">
				<view class="observer-star-img">
					<image v-for="(item,index) in datas.goodsStar" :kye="index" src="/static/classify/star.png"></image>
					<image v-for="(item,index) in 5 - datas.goodsStar" :kye="index" src="/static/classify/star_foo.png"></image>
				</view>
				<text class="observer-star-txt">无数据</text>
			</view>
			<!-- 具体评论 -->
			<view class="content-text">{{ datas.evaluationContent }}</view>
			<!-- 评论的图片 -->
			<view class="content-img">
				<image v-for="(urlig, index) in datas.images.split(',')" :key="index" :src="urlig"/>
				<view v-if="box(datas.images)" class="box"></view>
				</view>
			<view class="bottom">
				<!-- 回复评论 -->
				<view class="tottom-left">
					<image src="/static/classify/icon-discuss.png"></image>
					<text>无数据</text>
				</view>
				<!-- 赞 -->
				<view class="tottom-left">
					<image src="/static/classify/icon-give.png"></image>
					<text>无数据</text>
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
	},
	methods:{
		box(url){
			let lenght = url.split(',').length ;
			if(lenght % 3 === 2) return true
			return false
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
		color: #acacac;
		line-height: 32rpx;
	}
	&-ig {
		> image {
			width: 56rpx;
			height: 56rpx;
			border-radius: 50%;
			margin-right: 24rpx;
		}
		> text {
			font-size: 28rpx;
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
		padding-left: 24rpx;
		color: #999999;
		line-height: 32rpx;
		padding-l: 24rpx;
	}
}
.content-text {
	padding: 24rpx 24rpx;
	font-size: 28rpx;
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
		margin-bottom: 12rpx;
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
.box{
	width: 200rpx;
	height: 200rpx;
}
</style>
