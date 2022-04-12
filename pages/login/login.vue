<template>
	<view class="login">
		<view class="content"></view>
		<view class="login-box">
			<view class="title">
				<text :class="{action:tive}" @click="tive = !tive">登录</text>
				<text :class="{action:!tive}" @click="tive = !tive">注册</text>
			</view>
			<view class="input-box">
				<advance v-if="tive"></advance>
				<register v-else></register>
			</view>
		</view>
	</view>
</template>

<script>
	import register from './loginchild/register.vue'
	import advance from './loginchild/advance.vue'
	export default {
		components:{register,advance},
		data(){
			return{
				tive:true,
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.login{
		width: 100%;
		height: 100%;
		background:linear-gradient(
		    35deg,
				rgba(255, 255, 0,.6),
				rgba(255, 244, 120,.8),
				) ;
		&-box{
			width: 600rpx;
			// height: 400rpx;
			margin: 50% auto;
			padding: 50rpx 40rpx;
			border-radius: 50rpx;
			background: rgba(255,255,255,.3);
			backdrop-filter: blur(20px);
			border: 3rpx solid rgba(255,255,255,.8);
			.title{
				padding: 0 100rpx;
				display: flex;
				justify-content: space-between;
				&>text{
					padding: 8rpx 30rpx;
					border-radius: 30rpx;
					color: #999999;
					
				}
			}
			.input-box{
				// border: 1rpx solid #2C405A;
			}
		}
	}
	.action{
		color: #FFFFFF !important;
		border: 2rpx solid #808080;
		font-weight: 600;
		background: #aaaaaa4d;
	}
</style>
