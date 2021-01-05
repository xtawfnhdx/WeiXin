//
import { request } from "../../request/index.js";
Page({
  data: {
    //轮播图数组
    swiperList: [],
    catesList: [],
    floorList:[]
  },
  //options(Object)
  onLoad: function (options) {
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },

  //发送异步请求，获取轮播图
  getSwiperList() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
    }).then((result) => {
      this.setData({ swiperList: result.data.message });
    });
  },

  //发送异步请求，获取分类数据
  getCateList() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
    }).then((result) => {
      this.setData({ catesList: result.data.message });
    });
  },

  //发送异步请求，获取楼层数据
  getFloorList() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
    }).then((result) => {
      this.setData({ floorList: result.data.message });
    });
  },

  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});
