<template>
	<view class="commodity-item" v-if="title">
		<image :src="url.split(',')[0]"></image>
		<view class="title-box">
			<text>{{title}}</text>
			<view class="title-box-bottom">
				<price :price="price"></price>
				<view class="sell">
					销售 {{sold}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Price from '../price-part/Price.vue'
	export default {
		components: {
			Price
		},
		props:{
			url:{
				type:String,
				default:undefined
			},
			title:{
				type:String,
				default:undefined
			},
			price:{
				type:String | Number,
				default:undefined
			},
			sold:{
				type:String | Number,
				default:'无数据'
			},
		}

	}
</script>

<style lang="scss">
	.commodity-item {
		width: 336rpx;
		background: #FFFFFF;
		border-radius: 12rpx 12rpx 0rpx 0rpx;
		border-radius: 12rpx;

		&>image {
			width: 100%;
			height: 336rpx;
			border-radius: 12rpx 12rpx 0rpx 0rpx;
		}
		.title-box{
			padding: 24rpx;
			&>text{
				font-size: 28rpx;
				font-weight: 600;
				color: #111111;
			}
			&-bottom{
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 24rpx;
				.sell{
					font-size: 24rpx;
					color: #999999;
				}
			}
		}
	}
</style>
