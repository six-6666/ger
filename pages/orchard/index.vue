<template>
	<view class="orchard">
		<top-nav title="果园"></top-nav>
		<scroll-view :scroll-y="true" class="content">
			<or-item class="or-item" v-for="item of 8"></or-item>
		</scroll-view>
	</view>
</template>

<script>
	import TopNav from '@/compotents/topnav/TopNav.vue'
	import OrItem from './orchardchild/OrItem.vue'
	import {getFarmById} from '@/api/orchard.js'
	export default{
		components:{TopNav,OrItem},
		data(){
			return{
				
			}
		},
		onLoad() {
			this.getFarmById()
		},
		methods:{
			// 果园数据请求
			getFarmById(){
				getFarmById(1).then(res =>{
					console.log(res)
				})
			}
		}
		
	}
</script>

<style lang="scss">
	.orchard{
		height: 100%;
		display: flex;
		flex-direction: column;
		.content{
			flex: auto;
			overflow: auto;
			.or-item{
				margin: 24rpx 0;
			}
		}
	}
</style>
