<template>
	<view class="mine">
		<!-- 头部导航栏 -->
		<top-nav title="我的">
			<template #right>
				<image src="/static/commin/information.png" @click="tonext()"></image>
				<image src="/static/commin/set.png" @click="tonext('set')"></image>
			</template>
		</top-nav>
		
		<view class="center">
			<view class="top">
				<!-- 头像 name id -->
				<personage-top :userInf="userInf"></personage-top>
			</view>
			<view class="item">
				<!-- 收藏、足迹、关注 -->
				<feature :quantitys="many"></feature>
				<!-- 更多服务 -->
				<serve></serve>
			</view>
		</view>
	</view>
</template>

<script>
	import TopNav from '@/compotents/topnav/TopNav.vue'
	import PersonageTop from '@/compotents/personage-top/PersonageTop.vue'
	import Feature from './minechild/feature.vue'
	import Serve from './minechild/serve.vue'
	
	// import {getInfo} from '@/api/mine.js'
	export default {
		components:{TopNav,PersonageTop,Feature,Serve},
		data(){
			return{
				many:{title:[12,4,88],topdata:[8,0,4,12,5]},
				userInf:null,
			}
		},
		onShow() {
			this.userInf = uni.getStorageSync('userInf')
		},
		methods:{
			tonext(to){
				uni.navigateTo({
					url: to === 'set'?'./set/Set':'./information/InforMation'
				})
			},
		}
		
	}
</script>

<style lang="scss">
	.mine{
		.center{
			.top{
				width: 100%;
				height: 344rpx;
				padding: 24rpx 30rpx;
				background: linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%);
			}
			.item{
				padding: 0 30rpx;
				margin-top: -170rpx;
			}
		}
	}
</style>
