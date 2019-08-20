// page/component/list/list.js
Page({
  data:{
    new_product: [
      { id: 5, url: '/image/s5.jpg', price: 45, name: "白养颜组合", pay: 172 },
      { id: 6, url: '/image/s6.jpg', price: 124, name: "DIOR化妆品", pay: 852 },
      { id: 7, url: '/image/s7.jpg', price: 66, name: "水疗护肤", pay: 172 },
    ],

  },
  cart:function(e){
    var image_url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: '../details/details?image_url=' + image_url,
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})