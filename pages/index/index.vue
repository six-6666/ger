<template>
	<view class="home">
		<!-- 头部导航栏 -->
		<top-nav>
			<template v-slot:left><image src="/static/commin/toux.png"></image></template>
			<template v-slot:center>
				<view class="seek">
					<image src="/static/home/seek.png"></image>
					<input type="text" placeholder="鎼滅储鍟嗗搧" />
				</view>
				</template>
			<template v-slot:right><image src="/static/commin/information.png"></image></template>
		</top-nav>
		<!-- 内容为块 -->
		<view class="content">
			<scroll-view :scroll-y="true" style="height: 100%;">
				<!-- 轮播图模块 -->
				<home-swiper :swiperdata="swiperdata"/>
				<!-- 功能集合模块 -->
				<home-brief/>
				<!-- 精品竞拍模块 -->
				<home-auction :imgurl="swiperdata"/>
				<!-- 直供、认养、采摘模块 -->
				<home-point />
				<!-- 推荐果园模块 -->
				<home-recommendo-rchard :orcharddata="orcharddata"/>
				<!-- 热销推荐模块 -->
				<home-popular :sell="sell"/>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import TopNav from '@/compotents/topnav/TopNav.vue'
	import HomeSwiper from './homechild/HomSwiper.vue'
	import HomeBrief from './homechild/HomeBrief.vue'
	import HomeAuction from './homechild/HomeAuction.vue'
	import HomePoint from './homechild/HomePoint.vue'
	import HomeRecommendoRchard from './homechild/HomeRecommendoRchard.vue'
	import HomePopular from './homechild/HomePopular.vue'
	
	import {advertisement,getOdGoodList,getShopList } from '@/api/home.js'
	export default {
		components:{
			TopNav,
			HomeSwiper,
			HomeBrief,
			HomeAuction,
			HomePoint,
			HomeRecommendoRchard,
			HomePopular},
		data() {
			return {
				swiperdata:[],//轮播图数据
				sell:[],//热销数据
				orcharddata:[],//果园数据
				
			}
		},
		onLoad() {
			this.advertisement()
			this.getOdGoodList()
			this.getShopList()
		},
		methods: {
			// 请求轮播图数据
			advertisement(){
				advertisement(0).then(res =>{
					// console.log(res)
					this.swiperdata = res.data
				})
			},
			//热销推荐数据
			getOdGoodList(){
				getOdGoodList(0).then(res =>{
					console.log(res)
					this.sell = res.data
				})
			},
			//推荐果园数据
			getShopList(){
				getShopList(1).then(res =>{
					console.log(res)
					this.orcharddata = res.data
				})
			}
		},
	}
</script>

<style lang="scss">
	.seek{
		width: 546rpx;
		height: 56rpx;
		display: flex;
		align-items: center;
		padding: 0 28rpx;
		background: #E8E8E8;
		border-radius: 32rpx;
		&>image{
			width: 24rpx !important;
			height: 24rpx !important;
		}
		&>input{
			flex: 1;
			font-size: 22rpx;
		}
	}
	.home{
		display: flex;
		flex-direction: column;
		.content{
			width: 100%;
			flex: auto;
			overflow: auto;
			padding: 24rpx 30rpx;
		}
	}
</style>
