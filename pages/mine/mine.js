// pages/mine/mine.js
const app = getApp()
Page({

  data: {
    mtabclass: ['mnaved', 'mnav'],
    mtab: 0,
    userInfo: {},
  },

  onLoad: function (options) {
    
  },
  mtabClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var tabclass = ['mnav', 'mnav'];
    tabclass[id] = 'mnaved';
    this.setData({
      mtabclass: tabclass,
      mtab: id 
    })
  },
  details: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/details/details?id=' + id,
    })
  },
})