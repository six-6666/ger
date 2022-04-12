import config from '@/api/configs/configs.js'

let baseUrl = ''
// #ifdef  H5
baseUrl = config.baseUrl.h5;
// #endif

// #ifdef APP-PLUS
baseUrl = config.baseUrl.app;
// #endif

// #ifdef MP-WEIXIN
baseUrl = config.baseUrl.mp;
// #endif

const option = {
	timeout: 5000,
	header: {
		'content-type': 'application/json'
	},
}


export const get = (url, data, customOption) => {
	return new Promise((resolve, reject) => {
		uni.request({
			...option,
			...customOption,
			url: baseUrl + url,
			data,
			method: 'GET',
			success: (res) => {
				resolve(res.data)
			},
			fail: res => {
				reject(res)
			}
		});
	})
}

export const post = (url, data, customOption) => {
	return new Promise((resolve, reject) => {
		uni.request({
			...option,
			...customOption,
			url: baseUrl + url,
			data,
			method: 'POST',
			success: (res) => {
				resolve(res.data)
			},
			fail: res => {
				reject(res)
			}
		});
	})
}

uni.addInterceptor('request', {
	// 拦截前触发
	invoke(args) {
		let token = uni.getStorageSync('token');
		let userInfoJson = uni.getStorageSync('userInfo');
		
		if (token) {
			args.header.Authorization = token;
			// let userInfo = JSON.parse(userInfoJson);
			// args.header.user_id = userInfo.id;
		}else {
			uni.reLaunch({
				url:'/pages/login/login'
			})
		}
		
	},
	// 成功回调拦截
	success(args) {
		let res = args.data;
		if (res.code !== 200) {
			uni.showToast({
				title: res.msg,
				icon: 'none'
			});
			
		}
	},
	// 失败回调拦截
	fail(err) {
		uni.showToast({
			title: err.errMsg,
			icon: 'none'
		});
	},
	// 完成回调拦截
	complete(res) {
		uni.hideLoading()
	}
})
