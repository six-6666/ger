<template>
	<view class="personal-details">
		<top-nav :retreat="true" titlewee="个人信息"></top-nav>
		<view class="item">
			<text>头像</text>
			<view class="item-right">
				<image src="/static/img/img2.jpg"></image>
				<image class="ciimg" src="/static/mine/more.png"></image>
			</view>
		</view>
		<view class="item">
			<text>用户ID</text>
			<view class="item-right">
				<text>666</text>
				<image style="opacity: 0;" class="ciimg" src="/static/mine/more.png"></image>
				</view>
		</view>
		<view class="item">
			<text>昵称</text>
			<view class="item-right">
				<input type="text" placeholder="修改昵称" />
				<image class="ciimg" src="/static/mine/more.png"></image>
				</view>
		</view>
		<view class="item">
			<text>性别</text>
			<view class="item-right"><image class="ciimg" src="/static/mine/more.png"></image></view>
		</view>
		<view class="item">
			<text>出生日期</text>
			<view class="item-right"><image class="ciimg" src="/static/mine/more.png"></image></view>
		</view>
	</view>
</template>

<script>
import TopNav from '@/compotents/topnav/TopNav.vue';
export default {
	components: { TopNav }
};
</script>

<style lang="scss">
.personal-details {
	width: 100%;
	height: 100%;
	.item {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24rpx 30rpx;
		border-bottom: 2rpx solid #8080804d;
		& > text {
			font-size: 28rpx;
			color: #333333;
		}
		&-right {
			color: #999999;
			font-size: 28rpx;
			display: flex;
			align-items: center;
			&>input{
				text-align: right;
			}
			.ciimg {
				width: 32rpx;
				height: 32rpx;
				margin-left: 12rpx;
			}
			& > image {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
			}
		}
	}
}
</style>
