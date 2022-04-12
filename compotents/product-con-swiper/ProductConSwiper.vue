<template>
	<view style="width: 100%;height: 100%;position: relative;">
		<swiper @change="handleChange" v-if="imgUrls.length > 0" style="width: 100%;height: 100%;">
			<block v-for="(item, imgUrlsIndex) in imgUrls" :key="imgUrlsIndex">
				<swiper-item style="width: 100%;height: 100%;"><image :src="item" @tap="previewImage(imgUrlsIndex)" /></swiper-item>
			</block>
		</swiper>
		<view class="pages">{{ currents || 1 }}/{{ imgUrls.length || 1 }}</view>
		<view class="button-hocks">
			<view :class="{ action: ckstore === index }" v-for="(item, index) in clickdata" :key="index" @tap="clickbutton(index)">{{ item.name }}</view>
		</view>
	</view>
</template>
<script>
export default {
	name: 'ProductConSwiper',
	components: {},
	props: {
		imgUrls: {
			type: Array,
			default: () => []
		}
	},
	data: function() {
		let that = this;
		return {
			ckstore: 0,
			clickdata: [{ id: 1, name: '商品' }, { id: 2, name: '果园' },{id:3,name:'评价'}],
			currents: 1,
			ProductConSwiper: {
				autoplay: {
					disableOnInteraction: false,
					delay: 2000
				},
				loop: true,
				speed: 1000,
				observer: true,
				observeParents: true,
				on: {
					slideChangeTransitionStart: function() {
						that.currents = this.realIndex + 1;
					}
				}
			}
		};
	},
	mounted: function() {},
	methods: {
		handleChange(event) {
			this.currents = event.mp.detail.current + 1;
		},
		previewImage(current) {
			uni.previewImage({
				current,
				urls: this.imgUrls
			});
		},
		clickbutton(index) {
			this.ckstore = index;
			this.$emit('clickbutton',index);
		}
	}
};
</script>
<style lang="scss">
image {
	width: 100%;
	height: 100%;
}
.pages {
	position: absolute;
	right: 0;
	bottom: 0;
	width: 72rpx;
	height: 48rpx;
	line-height: 48rpx;
	text-align: center;
	font-size: 28rpx;
	color: #FFFFFF;
}
.button-hocks {
	height: 88rpx;
	display: flex;
	background: rgba($color: #000000, $alpha: 0.3);
	position: absolute;
	left: 0;
	bottom: 0;
	& > view {
		width: 136rpx;
		height: 88rpx;
		font-size: 28rpx;
		color: #fff;
		text-align: center;
		line-height: 88rpx;
	}
}
.action {
	background: #fff;
	color: #333 !important;
}
</style>
