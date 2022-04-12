<template>
	<view class="details-mods">
		<top-nav :retreat="true" :titlewee="title"></top-nav>
		<scroll-view :scroll-y="true" class="content-box">
			<view class="swiper-box"><product-con-swiper :pages="true" :imgUrls="Url" :clickdata="cldata" @cut="cut" /></view>
			<product-details :datas="datas" v-show="cutid == 0" />
			<orchard-details v-show="cutid == 1" />
			<discuss :id="goodsId" v-show="cutid == 2" />
		</scroll-view>
		<!-- 底部购买、预约、认养、模块 -->
		<nav-der :id="id"></nav-der>
	</view>
</template>

<script>
import TopNav from '@/compotents/topnav/TopNav.vue';
import ProductConSwiper from '@/compotents/product-con-swiper/ProductConSwiper.vue';
import ProductDetails from '@/compotents/particularsi-mod/ProductDetails.vue';
import OrchardDetails from '@/compotents/particularsi-mod/OrchardDetails.vue';
import Discuss from '@/compotents/particularsi-mod/Discuss.vue';
import NavDer from '@/compotents/particularsi-mod/buy-navder/NavDer.vue'

import { selectgoodsdetailbyid } from '@/api/classify.js';
export default {
	components: { TopNav, ProductConSwiper, OrchardDetails, ProductDetails, Discuss,NavDer },
	props: {},
	data() {
		return {
			id: undefined,
			goodsId: undefined,
			farm_id: undefined,
			datas:null,
			cutid: 0,
			cldata: ['商品', '果园', '评论'],
			Url: ['/static/img/img3.jpg', '/static/img/img3.jpg', '/static/img/img3.jpg']
		};
	},
	onLoad(e) {
		this.id = e.id || 0;
		this.goodsId = e.goodsId || 86;
		this.farm_id = e.farm_id || 85;
		this.selectgoodsdetailbyid();
	},
	methods: {
		cut(index) {
			this.cutid = index;
		},
		//商品数据请求
		selectgoodsdetailbyid() {
			selectgoodsdetailbyid(this.goodsId).then(res => {
				console.log(res);
				this.datas = res.data;
				//轮播图数据
				this.Url = res.data.image.split(',')
			});
		}
	},
	computed: {
		title() {
			return this.id == 0 ? '认养详情' : this.id == 1 ? '直供详情' : '预约详情';
		}
	}
};
</script>

<style lang="scss">
.details-mods {
	height: 100%;
	display: flex;
	flex-direction: column;
	.content-box {
		flex: 1;
		overflow: auto;
		.swiper-box {
			height: 480rpx;
			width: 100%;
		}
	}
}
</style>
