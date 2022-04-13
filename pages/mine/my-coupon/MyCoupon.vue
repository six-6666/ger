<template>
	<view class="my-coupon">
		<top-nav :retreat="true" titlewee="我的优惠券"></top-nav>
		<select-nav :title="['未使用','已过期']" @clicknav="clicknav"></select-nav>
		<view class="content-box">
			<scroll-view style="height: 100%;" :scroll-y="true">
				<coupon class="coupon" :datas="item" v-for="(item,index) in coupondata" :key="index"></coupon>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import TopNav from '@/compotents/topnav/TopNav.vue'
	import SelectNav from '@/compotents/selectnav/SelectNav.vue'
	import Coupon from '@/compotents/coupon/Coupon.vue'
	
	
	import {getmycoupon} from '@/api/coupon.js'
	export default{
		components:{TopNav,SelectNav,Coupon},
		data(){
			return{
				clstore:1,
				mycoupon: [], //未过期优惠券
				failure: [], //过期优惠券
				time: Date.now(),//获取现在的时间戳
			}
		},
		onLoad() {
			this.getmycoupon()
		},
		methods:{
			clicknav(id){
				if(id == 1) this.mycoupon = this.mycoupon
			},
			getmycoupon(){
				getmycoupon({ pageNum: 0, pageSize: 0 }).then(res =>{
					console.log(res)
					res.rows.forEach(item => {
						let invalidTime = Date.parse(new Date(item.invalidTime));
						this.time > invalidTime ? this.failure.push(item) : this.mycoupon.push(item);
					});
				})
			},
			counttiem(invalidTime){
				return Math.floor((Date.parse(new Date(invalidTime)) - this.time)/1000/60/60/24)
			}
		},
		computed: {
			coupondata() {
				return this.clstore === 1 ? this.mycoupon : this.failure;
			},
		}
		
	}
</script>

<style lang="scss">
	.my-coupon{
		height: 100%;
		display: flex;
		flex-direction: column;
		.content-box{
			padding: 24rpx 30rpx;
			flex: auto;
			// overflow: auto;
		}
		.coupon{
			margin-bottom: 24rpx;
		}
	}
</style>
