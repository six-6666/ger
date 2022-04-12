<template>
	<view class="my-collect">
		<top-nav :retreat="true" titlewee="我的收藏"></top-nav>
		<select-nav :wire="false" :title="title"></select-nav>
		<scroll-view class="content-box" :scroll-y="true">
			<auction-item :statr="false" time="00时00分00秒" url="/static/img/img4.jpg" :price="99.99" title="百色金煌芒树认养套餐">
				<template #botton><image class="botton" src="/static/commin/collect-icon.png" mode=""></image></template>
			</auction-item>
		</scroll-view>
	</view>
</template>

<script>
import TopNav from '@/compotents/topnav/TopNav.vue';
import SelectNav from '@/compotents/selectnav/SelectNav.vue';
import AuctionItem from '@/compotents/auction-item/AuctionItem.vue'
export default {
	components: { TopNav, SelectNav ,AuctionItem},
	data() {
		return {
			title: ['全部', '竞拍', '直供', '预约', '认养']
		};
	}
};
</script>

<style lang="scss">
.my-collect {
	height: 100%;
	display: flex;
	flex-direction: column;
	.content-box {
		flex: auto;
		overflow: auto;
	}
}
.botton{
	width: 40rpx;
	height: 40rpx;
}
</style>
