<template>
	<view class="personage" @click="toskip()">
		<view class="left">
			<image :src="userInf.headimg"></image>
			<view class="title">
				<text class="name">{{userInf.wxname}}</text>
				<view>
					<text class="id">ID:{{userInf.id}}</text>
				</view>
			</view>
		</view>
		<view v-if="skip" class="right"><image src="/static/mine/more.png"></image></view>
	</view>
</template>

<script>
export default {
	props:{
		skip:{
			type:Boolean,
			default:false
		},
		userInf:{
			type:Object,
			default:() =>{}
		}
	},
	data(){
		return{
		}
	},
	methods:{
		toskip(){
			if(this.skip){
				uni.navigateTo({
					url:'/pages/mine/set/personal-details/PersonalDetails'
				})
			}
		},
	}
};
</script>

<style lang="scss">
.personage {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left {
		display: flex;
		& > image {
			width: 120rpx;
			height: 120rpx;
			border-radius: 50%;
		}
		.title {
			padding: 8rpx 24rpx;
			display: flex;
			flex-direction: column;
			.name {
				font-size: 34rpx;
				font-weight: 600;
				color: #111111;
				padding-bottom: 16rpx;
			}
			.id {
				font-size: 22rpx;
				padding: 4rpx 24rpx;
				background: #E8E8E8;
				border-radius: 24rpx;
				color: #333333;
			}
		}
	}
	.right {
		& > image {
			width: 32rpx;
			height: 32rpx;
		}
	}
}
</style>
