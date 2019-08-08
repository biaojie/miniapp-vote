// pages/index/index.js
var app = getApp();
Page({

  data: {
    // 首页活动轮播图、报名页轮播图、排行页轮播图
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    // 参赛选手信息
    player: [{
      num:1,
      playerimg:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      num2: 0
    }, {
      num: 2,
      playerimg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      num2: 0
    },
    {
      num: 3,
      playerimg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      num2: 0
    },{
      num: 4,
      playerimg: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      num2: 0
    }],
    search: false,
    houd: false,
    axq:'xq',
    tabclass: ['bottom1ed', 'bottom1', 'bottom1', 'bottom1'],
    index: 0,
    tabclass2: ['ed', '', '', ''],
    imgs: [],
    add: false,
    ssrc: '',
    video: false,
    // mtabclass: ['mnaved', 'mnav', 'mnav', 'mnav'],
    // mtab: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  onLoad: function (options) {
    // 获取用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  // 投票
  numadd: function (e) {
    if (app.globalData.userInfo) {
      var index = e.currentTarget.dataset.index;
      var player = this.data.player
      player[index].num2++
      this.setData({
        player: player
      })
      wx.showToast({
        title: '投票成功',
        icon: 'success',
        duration: 2000
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
      if (app.globalData.userInfo) {
        var index = e.currentTarget.dataset.index;
        var player = this.data.player
        player[index].num2++
        this.setData({
          player: player
        })
        wx.showToast({
          title: '投票成功',
          icon: 'success',
          duration: 2000
        })
      }
    }
  },

  // 搜索
  search: function () {
    if (this.data.search) {
      this.setData({
        search: false,
      })
    }else{
      this.setData({
        search: true,
      })
    }
  },


  // 活动详情默认收起,点击展开
  adetails: function() {
    if (this.data.houd){
      this.setData({
        houd: false
      })
      console.log(this.data.houd)
    }else{
      this.setData({
        houd: true
      })
    }
  },

  // 底部导航栏切换
  tabClick: function (e) {
    var index = e.currentTarget.dataset.index;
    var tabclass = ['bottom1', 'bottom1', 'bottom1', 'bottom1'];
    var tabclass2 = ['', '', '', ''];
    tabclass[index] = 'bottom1ed';
    tabclass2[index] = 'ed';
    this.setData({
      tabclass: tabclass,
      tabclass2: tabclass2,
      index: index
    })
  },

  // 报名--选择图片
  chooseImg: function (e) {
    var that = this;
    var imgs = this.data.imgs;
    var imgsleng = imgs.length
    console.log(imgsleng)
    wx.chooseImage({
      // count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        var imgs = that.data.imgs;
        console.log(tempFilePaths + '----');
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (imgs.length >= 3) {
            that.setData({
              imgs: imgs
            });
            return false;
          } else {
            imgs.push(tempFilePaths[i]);

          }
        }
        that.setData({
          imgs: imgs
        });

      }
    });
  },

  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgs = this.data.imgs;
    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs
    })
  },

  // 删除图片
  deleteImg: function (e) {
    var imgs = this.data.imgs;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      imgs: imgs
    });
  },

  // 上传视频
  bindButtonTap: function () {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success: function (res) {
        that.setData({
          ssrc: res.tempFilePath
        })
        if (res.tempFilePath) {
          that.setData({
            video: true
          })
        }
      }
    })
  },

  // 获取用户信息
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // mtabClick: function (e) {
  //   var id = e.currentTarget.dataset.id;
  //   var tabclass = ['mnav', 'mnav', 'mnav', 'mnav'];
  //   tabclass[id] = 'mnaved';
  //   this.setData({
  //     mtabclass: tabclass,
  //     mtab: id
  //   })
  // },

  // 分享活动
  onShareAppMessage: function () {
    return {
      title: '投票',
      path: '/pages/index/index',
      success: function (res) {
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
    }
  },
  
  mine: function () {
    wx.navigateTo({
      url: '/pages/mine/mine',
    })
  },
  minetwo: function () {
    wx.navigateTo({
      url: '/pages/minetwo/minetwo',
    })
  },
  allActivities: function (){
    wx.navigateTo({
      url: '/pages/allActivities/allActivities',
    })
  },
  myactivity: function () {
    wx.navigateTo({
      url: '/pages/myactivity/myactivity',
    })
  },
  details: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/details/details?id=' + id,
    })
  },
})