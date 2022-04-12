<template>
	<view class="information">
		<top-nav :retreat="true" titlewee="消息"></top-nav>
			<scroll-view class="content" :scroll-y="true">
				<news-item :newsdata="newsdata"></news-item>
			</scroll-view>
	</view>
</template>

<script>
import TopNav from '@/compotents/topnav/TopNav.vue';
import NewsItem from './informationchild/NewsItem.vue';
export default {
	components: { TopNav, NewsItem },
	data() {
		return {
			newsdata: [
				{ id: 1, system: true, url: '/static/img/img3.jpg', title: '系统消息', time: '09:00', text: '百色芒果优选APP今晚后正式上线' },
				{ id: 1, system: false, url: '/static/img/img3.jpg', title: '脐橙好不好恰', time: '09:00', text: '百色芒果优选APP今晚后正式上线' },
				{ id: 1, system: false, url: '/static/img/img3.jpg', title: '笑不出来的公公', time: '09:00', text: '百色芒果优选APP今晚后正式上线' },
				{ id: 1, system: false, url: '/static/img/img3.jpg', title: '苹果树果农', time: '09:00', text: '百色芒果优选APP今晚后正式上线' },
				{ id: 1, system: false, url: '/static/img/img3.jpg', title: '哈皮猴', time: '09:00', text: '百色芒果优选APP今晚后正式上线' },
				{ id: 1, system: false, url: '/static/img/img3.jpg', title: '我是你', time: '09:00', text: '百色芒果优选APP今晚后正式上线' },
				{ id: 1, system: false, url: '/static/img/img3.jpg', title: '我有个大美女', time: '09:00', text: '百色芒果优选APP今晚后正式上线' },
				{ id: 1, system: false, url: '/static/img/img3.jpg', title: '如本位', time: '09:00', text: '百色芒果优选APP今晚后正式上线' },
				{ id: 1, system: false, url: '/static/img/img3.jpg', title: '的v阿斯弗', time: '09:00', text: '百色芒果优选APP今晚后正式上线' },
				{ id: 1, system: false, url: '/static/img/img3.jpg', title: '挂号费', time: '09:00', text: '百色芒果优选APP今晚后正式上线' },
				{ id: 1, system: false, url: '/static/img/img3.jpg', title: '二万人', time: '09:00', text: '百色芒果优选APP今晚后正式上线' }
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss">
.information {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	.content {
		flex: auto;
		overflow: auto;
		padding: 24rpx 0 24rpx 30rpx;
	}
}
</style>
