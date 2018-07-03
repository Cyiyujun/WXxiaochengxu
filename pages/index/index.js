//index.js
//获取应用实例
const app = getApp()
  Page({
  
    /**
     * 页面的初始数据
     */
    data: {
      imgUrls: [
        '/img/lb-1.jpg',
        '/img/lb-2.jpg',
        '/img/lb-3.jpg',
        '/img/lb-4.jpg',
        '/img/lb-5.jpg'
      ], 
      indicatorDots: true,
      autoplay: true,
      interval: 4500,
      duration: 1000,
      
      imgUrls2: [
        '/img/lt-1.jpg',
        '/img/lt-2.jpg',
        '/img/lt-3.jpg',
        '/img/lt-4.jpg',
      ],
      indicatorDots: false,
      autoplay: true,
      interval: 4500,
      duration: 1000
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      
    },
  
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
      
    },
  
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
      
    },
  
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
      
    },
  
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
      
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
      
    }
  })
