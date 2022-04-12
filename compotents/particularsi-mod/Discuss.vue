<template>
	<view class="">
		<view class="content-top" v-if="amounts">
			<view :class="{ dert: dertstore === 1 }" @click="clickall(1)">全部</view>
			<view :class="{ dert: dertstore === 2 }" @click="clickall(2)">
				好评
				<text class="content-top-txt">{{amounts.bestCount}}</text>
			</view>
			<view :class="{ dert: dertstore === 3 }" @click="clickall(3)">
				差评
				<text class="content-top-txt">{{amounts.badCount}}</text>
			</view>
			<text>商品好评率{{statistics}}%</text>
		</view>
		<view class="centents">
			<view class="centents-titles">
				商品评价
				<view class="but">
					<text :class="{ buts: butsstore === 1 }" @click="clickbut(1)">默认</text>
					<text :class="{ buts: butsstore === 2 }" @click="clickbut(2)">最新</text>
				</view>
			</view>
			<!-- 评论模块 -->
			<view><observer v-for="(item,index) in critic" :key="index" :datas="item"/></view>
		</view>
	</view>
</template>

<script>
import observer from './discussmod/Observer.vue'; //评论模块组件

import {list,starTypeCount} from '@/api/classify.js'
export default {
	components: { observer },
	props:{
		id:{
			type:String | Number,
			default: undefined
		}
	},
	data() {
		return {
			dertstore: 1, //评论筛选点击模块的状态保存
			butsstore: 1, //评论时间筛选的状态保存
			critic: [],//评论数据
			amounts:null,//好差评数量数据
		};
	},
	created() {
		this.list()
		this.starTypeCount()
	},
	methods: {
		// 好差评切换数据请求
		clickall(id) {
			if(id != this.dertstore){
				if(id == 1) this.list()
				if(id == 2) this.list('4,5')
				if(id == 3) this.list('1,2')
			}
			this.dertstore = id;
		},
		clickbut(id) {
			this.butsstore = id;
		},
		// 获取所有评论数据
		list(star){
			list(this.id,star).then(res =>{
				// console.log(res)
				this.critic = res.data
			})
		},
		//评论数量数据
		starTypeCount(){
			starTypeCount(this.id).then(res =>{
				// console.log(res)
				this.amounts = res.data
			})
		}
	},
	computed:{
		statistics(){
			let num = this.amounts.bestCount / (this.amounts.badCount + this.amounts.bestCount + this.amounts.mediumCount)
			return  (num * 100).toFixed(1);
		}
	}
};
</script>

<style lang="scss">
.content-top {
	width: 100%;
	padding: 24rpx 30rpx;
	height: 104rpx;
	background: #ffffff;
	display: flex;
	justify-content: space-between;
	&-txt {
		font-weight: 600;
		padding-left: 8rpx;
	}
	> view {
		background: #fff4d4;
		border-radius: 28rpx;
		padding: 8rpx 24rpx;
		font-size: 28rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #333333;
	}
	> text {
		font-size: 22rpx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #999999;
	}
}
.dert {
	border: 2rpx solid #ff9900;
	color: #ff9900 !important;
}
.centents {
	width: 100%;
	padding: 24rpx 30rpx;
	margin-top: 24rpx;
	background: #fff;
	&-titles {
		font-size: 28rpx;
		height: 68rpx;
		display: flex;
		margin-bottom: 24rpx;
		justify-content: space-between;
		border-bottom: 1rpx solid #aaaaaa60;
		font-family: PingFangSC-Semibold, PingFang SC;
		font-weight: 600;
		color: #333333;
		.but {
			width: 184rpx;
			height: 48rpx;
			line-height: 48rpx;
			display: flex;
			justify-content: space-between;
			background: #f3f3f3;
			border-radius: 24rpx;
			font-size: 22rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
			> text {
				padding: 0 24rpx;
				width: 100%;
			}
		}
	}
}
.buts {
	width: 92rpx;
	height: 46rpx;
	color: #333;
	background: #ffffff;
	border-radius: 24rpx;
	border: 2rpx solid #f3f3f3;
}
</style>
