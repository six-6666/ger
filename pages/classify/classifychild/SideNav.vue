<template>
	<view class="nav">
	<scroll-view :scroll-y="true" style="height: 100%;">
		<view
		class="item" v-for="(item,index) in sidedata"
		:key="index"
		@click="classclick(index,item.categoryId)"
		:class="{action:classindex === index}">
			<view class="wire"></view>
			<text>{{item.categoryName}}</text>
		</view>
	</scroll-view>
	</view>
</template>

<script>
	export default{
		props:{
			sidedata:{
				type:Array,
				default:() =>[]
			}
		},
		data(){
			return{
				classindex:0,
			}
		},
		methods:{
			classclick(index,id){
				this.classindex = index
				this.$emit('classclick',id)
			}
		}
	}
</script>

<style lang="scss">
	.nav{
		width: 210rpx;
		height: 100%;
		overflow: auto;
		background: #FFFFFF;
		.item{
			width: 100%;
			height: 88rpx;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			color: #666666;
			.wire{
				width: 6rpx;
				height: 40rpx;
				border-radius: 4rpx;
			}
			&>text{
				padding: 24rpx 30rpx;
			}
		}
	}
	.action{
		background: #F8F8F8;
		color: #111111 !important;
		&>view{
			background: #FF9900;
		}
	}
</style>
