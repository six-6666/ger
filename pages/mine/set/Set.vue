<template>
	<view class="set">
		<top-nav :retreat="true" titlewee="设置">
			<!-- 退出按钮 -->
			<template #right>
				<image @click="exit" src="/static/mine/exit.png"></image>
			</template>
		</top-nav>
		<view class="top">
			<view class="top-per"><personage-top :userInf="userInf" :skip="true"></personage-top></view>
			<view class="ter" @click="skip()">
				<text>收货地址</text>
				<image src="/static/mine/more.png"></image>
			</view>
		</view>
		<view class="content">
			<view class="ter" v-for="(item, index) in datas" :key="index" @click="skip(item.url)">
				<text>{{ item.title }}</text>
				<image src="/static/mine/more.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
import TopNav from '@/compotents/topnav/TopNav.vue';
import PersonageTop from '@/compotents/personage-top/PersonageTop.vue';
export default {
	components: { TopNav, PersonageTop },
	data() {
		return {
			userInf:null,//用户信息
			datas: [
				{ title: '修改密码', url: '/pages/mine/set/change-password/ChangePassword' },
				{ title: '隐私政策', url: '/pages/mine/set/privacy-policy/PrivacyPolicy' },
				{ title: '用户协议', url: '/pages/mine/set/agreement/Agreement' },
				{ title: '关于百色芒果优选APP', url: '/pages/mine/set/in-regard-to/InRegardTo' }
			]
		};
	},
	onShow() {
		// 在缓存获取用户信息
			this.userInf = uni.getStorageSync('userInf')
	},
	methods: {
		// 跳转到不同页面
		skip(url) {
			uni.navigateTo({
				url: url ? url : '/pages/mine/set/delivery-address/DeliveryAddress'
			});
		},
		// 退出登录并清除token userInf
		exit() {
			uni.showModal({
				title: '确定退出登录',
				success: res => {
					if (res.confirm) {
						uni.removeStorageSync('token');
						uni.removeStorageSync('userInfo');
						uni.reLaunch({
							url: '../../login/login'
						});
					}
					if (res.cancel) {
					}
				}
			});
		}
	}
};
</script>

<style lang="scss">
.set {
	.top {
		&-per {
			padding: 24rpx 30rpx;
			background: #ffffff;
			border-bottom: 2rpx solid #f8f8f8;
		}
	}
	.content {
		margin-top: 12rpx;
	}
}
.ter {
	padding: 24rpx 30rpx;
	background: #ffffff;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 2rpx solid #f8f8f8;
	font-size: 28rpx;
	color: #333333;
	& > image {
		width: 32rpx;
		height: 32rpx;
	}
}
</style>
