<template>
	<!-- 登录 -->
	<view class="advance">
		<view class="item">
			<image src="/static/login/account.png" mode=""></image>
			<input type="number" placeholder="账号" value="password" v-model="account" />
		</view>
		<view class="item">
			<image src="/static/login/password.png" mode=""></image>
			<input type="password" placeholder="密码" v-model="password" />
		</view>
		<view class="select">
			<view :class="{ toselect: selectstr }" class="select-box" @click="selectstr = !selectstr"></view>
			同意
			<text @click="todeal('PrivacyPolicy')">《百色芒果隐私政策》</text>
			<text @click="todeal('Agreement')">《用户协议》</text>
		</view>
		<view class=" botton" @click="login">立即登录</view>
	</view>
</template>
<script>
	import {consumerUserLogin} from '@/api/login.js'
export default {
	data() {
		return {
			selectstr: false,
			account: undefined,
			password: undefined
		};
	},
	methods: {
		todeal(name) {
			uni.navigateTo({
				url: name === 'PrivacyPolicy' ? '/pages/mine/set/privacy-policy/PrivacyPolicy' : '/pages/mine/set/agreement/Agreement'
			});
		},
		//进行判空
		judge() {
			if (!this.account) {
				uni.showToast({
					title: '账号不可为空',
					icon: 'none',
					duration: 1000
				});
				return false;
			}
			if (!this.password) {
				uni.showToast({
					title: '密码不可为空',
					icon: 'none',
					duration: 1000
				});
				return false;
			}
			if (!this.selectstr) {
				uni.showToast({
					title: '请勾选同意协议',
					icon: 'none',
					duration: 1000
				});
				return false;
			}
			//判断是否为手机号
			// var regex = /^1(3|4|5|6|7|8|9)\d{9}$/
			// if (!regex.test(this.account)) {
			// 	uni.showToast({
			// 		title: '账号格式错误',
			// 		icon: 'none',
			// 		duration: 1000
			// 	});
			//   return false
			// }
			return true;
		},
		// 登录操作
		login() {
			if (this.judge()) {
				consumerUserLogin(this.account,this.password).then(res =>{
					if(res.code === 200){
						uni.setStorageSync('token', res.data.access_token);
						uni.setStorageSync('userInf', res.data.wxUserConsume);
						console.log(res.data.access_token)
						uni.switchTab({
							url:'/pages/index/index'
						})
					}
					if(res.code === 500){
						uni.showToast({
							title:'账号或密码错误',
							duration:1500,
							icon:'none'
						})
					}
				})
			}
		}
	}
};
</script>

<style lang="scss">
.advance {
	margin-top: 60rpx;

	.item {
		margin-bottom: 50rpx;
		display: flex;
		align-items: center;

		& > image {
			width: 30rpx;
			height: 30rpx;
			margin-right: 10rpx;
		}

		& > input {
			flex: auto;
			padding: 0 20rpx;
			border-bottom: 2rpx solid #808080;
		}
	}

	.select {
		display: flex;
		font-size: 18rpx;
		color: #999999;
		margin-bottom: 35rpx;

		&-box {
			width: 30rpx;
			height: 30rpx;
			display: flex;
			margin-right: 24rpx;
			border: 1rpx solid #808080;
			border-radius: 50%;
		}

		& > text {
			color: #2f8aca;
		}
	}

	.botton {
		width: 60%;
		height: 60rpx;
		margin: 0 auto;
		border-radius: 30rpx;
		display: flex;
		color: #808080;
		justify-content: center;
		align-items: center;
		border: 2rpx solid #808080;
	}
}

.toselect {
	background: url(/static/login/select.png);
	background-size: 100%;
}
</style>
