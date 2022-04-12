<template>
	<view class="swiper-box">
		<swiper :autoplay="true" :interval="2000" :circular="true">
			<swiper-item v-for="(item,index) in swiperdata" :key="index">
				<image :src="item.imageUrl"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			swiperdata:{
				type:Array,
				default:() =>[]
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style lang="scss">
	.swiper-box{
		width: 100%;
		height: 280rpx;
		image{
			width: 100%;
			height: 100%;
			border-radius: 12rpx;
		}
	}
</style>
