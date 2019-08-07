// 二次封装的请求方法
// const BASEURL = 'https://api.maison-huis.com/huis-dev' // 测试
// const BASEURL = 'https://api.maison-huis.com/huis-release' // 预发布
// const BASEURL = 'https://api.maison-huis.com/huis-redev' // 测试
const BASEURL = 'https://api.maison-huis.com' // 正式环境地址

export default function http({ url, data, method = "GET", contentType = "application/json" }, flag = true ) {
  flag && wx.showLoading({
    title: "加载中...",
    mask: true
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASEURL + url,
      data,
      method,
      header: {
        "content-type": contentType,
        token: wx.getStorageSync("token")
      },
      success({ data: { data, code, message } }) {
        if (code == 200 || code == 2104 || code == 5001) {
          resolve(data);
        } else {
          reject(message);
        }
        flag && wx.hideLoading();
      },
      fail() {
        reject("message");
        flag && wx.hideLoading();
        wx.showToast({
          title: "网络不给力",
          icon: "loading",
          // image: './../images/Artboard3.png',
          duration: 3000
        });
      }
    });
  });
}
