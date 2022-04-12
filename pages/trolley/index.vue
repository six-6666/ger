<template>
	<view class="trolley">
		<top-nav>
			<template #center>
				<view class="top-nav-text">
					购物车
					<text>(99)</text>
				</view>
			</template>
		</top-nav>
	</view>
</template>

<script>
import TopNav from '../../compotents/topnav/TopNav.vue';
export default {
	components: { TopNav }
};
</script>

<style lang="scss">
.top-nav-text {
	display: flex;
	align-items: center;
	& > text {
		font-size: 28rpx;
		padding: 0 20rpx;
		color: #ff9900;
	}
}
</style>
