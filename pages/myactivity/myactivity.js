// pages/myactivity/myactivity.js
Page({

  data: {
  
  },

  onLoad: function (options) {
  
  },

  index: function (e) {
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/index/index?id='+id,
    })
  },
  income: function () {
    wx.navigateTo({
      url: '/pages/income/income',
    })
  }
})