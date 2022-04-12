<template>
	<view class="classify">
		<top-nav title="分类"></top-nav>
		<view class="content">
			<side-nav :sidedata="sidedata" @classclick="classclick"></side-nav>
			<classify-content :contentdata="contentdata"></classify-content>
		</view>
	</view>
</template>

<script>
import SideNav from './classifychild/SideNav.vue'
import ClassifyContent from './classifychild/ClassifyContent.vue'
import TopNav from '../../compotents/topnav/TopNav.vue'
import {getOdCategoryList,getOdGoodList} from '@/api/classify.js'
export default{
	components:{TopNav,SideNav,ClassifyContent},
	data(){
		return{
			sidedata:[],
			contentdata:[],
			id:undefined,
		}
	},
	onLoad() {
		this.getOdCategoryList()
	},
	// watch:{
	// 	// 监控id的改变当id改变时请求数据
	// 	id: function(val,oldVal){
	// 		getOdGoodList(val).then(res =>{
	// 			// console.log(res)
	// 			this.contentdata = res.data
	// 			})
	// 		}
	// 	},
	methods:{
		// 请求分类列表数据
		getOdCategoryList(){
			getOdCategoryList().then(res =>{
				// console.log(res)
				this.sidedata = res.data
				this.id = res.data[0].categoryId
				getOdGoodList(res.data[0].categoryId).then(res =>{
					// console.log(res)
					this.contentdata = res.data 
					})
			})
		},
		// 保存 side-nav 组件传递出来的id数据 
		//请求内容数据
		classclick(id){
			if(id !== this.id){
				getOdGoodList(id).then(res =>{
					// console.log(res)
					this.contentdata = res.data
					})
				this.id = id
			}
		},
	}

}
</script>

<style lang="scss">
.classify {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	.content {
		height: 100%;
		display: flex;
		overflow: auto;
		flex: 1;
	}
}
</style>
