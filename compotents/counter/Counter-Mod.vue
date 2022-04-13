<template>
	<view class="counter">
		<view class="bn-minus" @click="minus(55,$event)">
			-
		</view>
		<view class="input-obx">
			<input type="number" placeholder="1" v-model="datas" />1
		</view>
		<view class="bn-add" @click="add">
			+
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			value:{
				type:Number | String,
				default:undefined
			}
		},
		data(){
			return{
				datas:1,
			}
		},
		watch:{
			datas:function (val,oldval){
				// console.log(val)
				if(this.datas > 100) this.datas = 99
				this.$emit('input',this.datas)
			},
			value: function (val,oldval){
				if((val??'') !== ''){ this.datas = val
				}else{
					this.datas = 1
				}
				
			}
		},
		methods:{
			add(){
				if(this.datas < 99) this.datas++
			},
			minus(a,e){
				// console.log(this.datas)
				console.log(a,e)
				if(this.datas > 1) this.datas --
			}
		}
	}
</script>

<style lang="scss" scoped>
	.counter{
		height: 40rpx;
		display: flex;
		background: #FFFFFF;
		.bn-minus{
			width: 40rpx;
			height: 100%;
			font-size: 30rpx;
			font-weight: 600;
			border: 2rpx solid #cccccc;
			line-height: 36rpx;
			text-align: center;
			border-radius: 20rpx 0 0 20rpx;
		}
		.input-obx{
			width: 50rpx;
			height: 40rpx;
			text-align: center;
			font-size: 24rpx;
			font-weight: 600;
			border-top: 2rpx solid #cccccc;
			border-bottom: 2rpx solid #cccccc;
			color: #333333;
		}
		.bn-add{
			width: 40rpx;
			height: 100%;
			font-size: 30rpx;
			font-weight: 600;
			border: 2rpx solid #cccccc;
			line-height: 36rpx;
			text-align: center;
			border-radius: 0 20rpx 20rpx 0;
		}
	}
</style>
