<template>
	<view class="claim-coupon">
		<top-nav :retreat="true" titlewee="领取优惠券"></top-nav>
		<image src="/static/classify/banner_coupon.png" mode=""></image>
		<scroll-view class="content-box" :scroll-y="true">
			<card-item @receive="receive" :datas="item" v-for="(item,index) in coupondata" :key="index"></card-item>
		</scroll-view>
	</view>
</template>

<script>
	import TopNav from '@/compotents/topnav/TopNav.vue'
	import CardItem from './child/CardItem.vue'
	import {getcoupon,getunclaimed} from '@/api/coupon.js'
	export default{
		components:{TopNav,CardItem},
		data(){
			return{
				coupondata:null,//全部优惠券
			}
		},
		onLoad() {
			this.getunclaimed()
		},
		methods:{
			//请求未领取的优惠券
			getunclaimed(){
				getunclaimed({pageNum:0,pageSize:0}).then(res =>{
					// console.log(res)
						this.coupondata = res.rows
				}).catch(err => console.log(err));
			},
			//点击领取
			receive(id){
				getcoupon({couponIdP:id}).then(res =>{
					// console.log(res);
					this.getunclaimed()
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.claim-coupon{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		&>image{
			width: 100%;
			height: 260rpx;
		}
		.content-box{
			padding: 24rpx 30rpx;
			flex: auto;
			overflow: auto;
		}
	}
</style>
