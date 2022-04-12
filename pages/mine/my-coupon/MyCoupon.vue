<template>
	<view class="my-coupon">
		<top-nav :retreat="true" titlewee="我的优惠券"></top-nav>
		<select-nav :title="['未使用','已过期']" @clicknav="clicknav"></select-nav>
	</view>
</template>

<script>
	import TopNav from '../../../compotents/topnav/TopNav.vue'
	import SelectNav from '../../../compotents/selectnav/SelectNav.vue'
	export default{
		components:{TopNav,SelectNav},
		data(){
			return{
			}
		},
		methods:{
			clicknav(id){
				console.log(id)
			}
		}
		
	}
</script>

<style lang="scss">
	
</style>
