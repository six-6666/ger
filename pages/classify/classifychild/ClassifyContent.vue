<template>
	<view class="content">
		<scroll-view :scroll-y="true" style="height: 100%;">
			<view class="item" v-for="(item, index) in contentdata" :key="index" @click="todirect(item.type,item.goodsId,item.farmId)">
				<image :src="item.image.split(',')[0]"></image>
				<view class="item-content">
					<text>{{ item.name }}</text>
					<price :price="item.costPrice"></price>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Price from '@/compotents/price-part/Price.vue'
export default {
	components:{Price},
	props: {
		contentdata: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {};
	},
	methods: {
		// 跳转到详情
		todirect(id,goodsId,farm_id) {
			uni.navigateTo({
				url: `/pages/index/home-gather/details/DetailsMods?id=${id}&goodsId=${goodsId}&farm_id=${farm_id}`
			});
		}
	}
};
</script>

<style lang="scss">
.content {
	padding: 24rpx 30rpx 0 24rpx;
	display: flex;
	flex: auto;
	flex-direction: column;
	.item {
		width: 486rpx;
		height: 160rpx;
		display: flex;
		background: #ffffff;
		border-radius: 12rpx;
		margin-bottom: 24rpx;
		& > image {
			width: 160rpx;
			height: 100%;
			border-radius: 12rpx 0 0 12rpx;
		}
		&-content {
			padding: 24rpx 30rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			& > text {
				font-size: 28rpx;
				color: #333333;
			}
		}
	}
}
</style>
