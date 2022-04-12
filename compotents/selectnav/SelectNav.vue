<template>
	<view class="select">
		<view class="content" v-for="(item,index) in title" :key="index" @click="clicknav(index)">
			<text :class="{action:states === index}">{{item}}</text>
			<view v-if="wire" :class="{wire:title.length -1 !== index}"></view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			title:{
				type:Array,
				default:() =>[]
			},
			wire:{
				type:Boolean,
				default:true
			}
		},
		data(){
			return{
				states:0,//保存点击index的状态
			}
		},
		methods:{
			clicknav(index){
				//把点击的index赋值给states
				this.states = index;
				//向外发送点击事件
				this.$emit('clicknav',index)
			}
		}
	}
</script>

<style lang="scss">
	.select{
		width: 100%;
		height: 88rpx;
		display: flex;
		background: #FFFFFF;
		.content{
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			flex: auto;
			font-size: 28rpx;
			color: #999999;
		}
	}
	.wire{
		width: 2rpx;
		height: 48rpx;
		position: absolute;
		right: 0;
		background: #E8E8E8;
		border-radius: 1rpx;
	}
	.action{
		font-size: 28rpx;
		padding: 24rpx 0;
		font-weight: 600;
		color: #FF9900;
		border-bottom: 4rpx solid #ff9900;
	}
</style>
