import ajax from './../utils/request.js'
export default {
  getAdInfo: data => ajax({ // banner 轮播广告
    url: `/rest/front/GoodsCategory/list`,
    method: 'post'
  })
}