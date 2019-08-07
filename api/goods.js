import ajax from '../utils/request.js'

export default {
  getCategoryList: data => ajax({ // 获取商品分类导航数据
    url: `/api/goods/getListCategory`,
    method: 'post'
  }),
  getLatestGoods: data => ajax({ // 新品专区数据
    url: `/api/goods/latestGoods`,
    method: 'post'
  }),
  getCategoryNavMenuGoods: data => ajax({ // 商品分类导航下的商品列表数据
    url: `/api/goods/listAppGoods`,
    method: 'post',
    data,
    contentType: 'application/x-www-form-urlencoded'
  }),
  getGoodsDetail: data => ajax({ // 获取商品详情页数据
    url: `/api/goods/goodsDetail`,
    data,
    method: 'post',
    contentType: 'application/x-www-form-urlencoded'
  }),
  getGoodsAreaStock: data => ajax({
    url: `/api/goods/getIfGoodsMessage`,
    data,
    method: 'post',
    contentType: 'application/x-www-form-urlencoded'
  }),
  getGoodsRecommendList: data => ajax({
    url: '/api/goods/getRecommend',
    data,
    method: 'post',
    contentType: 'application/x-www-form-urlencoded'
  }),
  getQRCode: data => ajax({
    url: '/wx/getQrCodeForOnceRound',
    data,
    method: 'post',
    contentType: 'application/x-www-form-urlencoded'
  })
}