const app = getApp()
export default {
  data:{
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true, // 轮播的索引导航显示
    autoplay: true, // 轮播是否自动切换
    interval: 2000, // 轮播切换时间
    duration: 500, // 轮播滑动动画的时长
    activeIndex: 0, // 导航菜单选中项
  },
  methods: {
    getAdInfo() { // 获取banner轮播图的数据
      app.getAdInfo().then(data => {
        console.log('data', data)
        this.setData({
          imgUrls: data
        })
      }).catch(err => {
        console.log('ad', err)
      })
    },
    goActivity({ currentTarget: { dataset: src } }) { // 广告位跳转
      if (src.src.indexOf('app.maison-huis.com/detail') !== -1) {
        let goodsId = this._srcQuery(src.src, 'id')[1]
        goodsId && wx.navigateTo({
          url: `/pages/goods_detail/goods_detail?goodsId=${goodsId}`,
        })
      } else if (src.src.indexOf('app.maison-huis.com/classifyList') !== -1) {
        let categoryId = this._srcQuery(src.src, 'categoryId')[1]
        categoryId && wx.navigateTo({
          url: `/pages/classify_goods_list/classify_goods_list?categoryId=${categoryId}`,
        })
      } else { // 地址不是商品详情页....那么地址有可能是活动页等
        console.log(src.src)
      }
    },
    _srcQuery (src, param) {
      return src.split('?')[1].split('&').map(item => {
        return item.split('=')
      }).filter(item => {
        return item[0] === param
      })[0]
    }
  }
}