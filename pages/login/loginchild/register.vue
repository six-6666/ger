<template>
	<!-- 注册 -->
	<view class="register">
		<view class="input-box">
			<view class="item">
				<input type="text" placeholder="输入手机号" />
			</view>
			<view class="item">
				<input type="text" placeholder="输入密码" />
			</view>
			<view class="item">
				<input type="text" placeholder="确认密码" />
			</view>
			<view class="verify-box">
				<view class="verify">
					<input type="text" placeholder="验证码" />
				</view>
				<view class="verify-bon">
					获取验证码
				</view>
			</view>
		</view>
		<view class="register-bon">确认注册</view>
	</view>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">
	.register {
		margin-top: 50rpx;
		.item {
			margin-bottom: 50rpx;
			display: flex;
			align-items: center;

			&>input {
				flex: auto;
				padding: 0 20rpx;
				border-bottom: 2rpx solid #808080;
			}
		}

		.verify-box {
			display: flex;
			// padding: 0 50rpx; 
			justify-content: space-between;

			.verify {
				border: 2rpx solid #808080;
				width: 50%;
				height: 60rpx;
				border-radius: 20rpx;
				display: flex;
				align-items: center;
				padding-left: 15rpx;
			}

			.verify-bon {
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 30rpx;
				border: 2rpx solid #808080;
				color: #808080;
				height: 60rpx;
				width: 180rpx;
			}
		}
		&-bon{
			width: 60%;
			margin:  0 auto;
			margin-top: 50rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #808080;
			border-radius: 30rpx;
			border: 2rpx solid #808080;
			height: 60rpx;
		}
	}
</style>
