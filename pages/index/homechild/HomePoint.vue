<template>
	<view class="point">
		<view 
		class="point-item" 
		v-for="(item,index) in pret" 
		:key="index"
		@click="skip(item.id,item.title)"
		>
			<text class="title">{{item.title}}</text>
			<text class="titles">{{item.text}}</text>
			<image :src="item.imgurl"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{

		},
		data(){
			return{
				pret:[
					{id:1,title:'果园直供',text:'新鲜芒果看的见',imgurl:'/static/img/img2.jpg'},
					{id:0,title:'果树认养',text:'尽享田园乐趣',imgurl:'/static/img/img2.jpg'},
					{id:2,title:'预约采摘',text:'健康生活摘出来',imgurl:'/static/img/img2.jpg'},
					]
			}
		},
		methods:{
			skip(id,title){
				uni.navigateTo({
					url:`/pages/index/home-gather/index?id=${id}&title=${title}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.point{
		display: flex;
		justify-content: space-between;
		margin-top: 24rpx;
		&-item{
			width: 216rpx;
			height: 272rpx;
			padding: 24rpx 24rpx 0 24rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			background: #FFFFFF;
			box-shadow: 0px 0px 20rpx 0px rgba(0, 0, 0, 0.1);
			border-radius: 12rpx;
			.title{
				font-size: 28rpx;
				font-weight: 600;
				color: #111111;
			}
			.titles{
				font-size: 22rpx;
				color: #999999;
			}
			&>image{
				width: 152rpx;
				height: 152rpx;
			}
		}
	}
</style>
