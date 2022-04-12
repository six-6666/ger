<template>
	<view class="auction">
		<top-nav :retreat="true" titlewee="精品竞拍"></top-nav>
		<select-nav :title="['正在竞拍', '我的竞拍']" @clicknav="clicknav"></select-nav>
		<scroll-view class="content-box" :scroll-y="true">
			<!-- 竞拍商品 -->
			<auction-item :statr="true" time="00时00分00秒" title="新鲜金煌芒大芒果新鲜金煌芒大芒果敬神款1" url="/static/img/img4.jpg">
				<template #price>
					<price :price="66" />
					<text class="user-name">李白</text>
				</template>
			</auction-item>
		</scroll-view>
	</view>
</template>

<script>
import TopNav from '@/compotents/topnav/TopNav.vue';
import SelectNav from '@/compotents/selectnav/SelectNav.vue';
import AuctionItem from '@/compotents/auction-item/AuctionItem.vue';
import Price from '@/compotents/price-part/Price.vue';
export default {
	components: { TopNav, SelectNav, AuctionItem, Price },
	data() {
		return {};
	},
	methods: {
		// 监听SelectNav传递的事件
		clicknav(index) {
			console.log(index);
		}
	}
};
</script>

<style lang="scss">
.auction {
	height: 100%;
	display: flex;
	flex-direction: column;
	.content-box {
		margin-top: 24rpx;
		flex: auto;
		overflow: auto;
	}
}
.user-name {
	font-size: 22rpx;
	color: #999999;
	display: inline-block;
	margin-left: 24rpx;
}
</style>
