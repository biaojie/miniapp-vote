// pages/allActivities/allActivities.js
Page({

  data: {
    date:'开始时间',
    date2:'结束时间',
    date3: '开始时间',
    date4: '结束时间',
    add: false,
    avatarUrl:'',
    adnumarray: ['请选择几等奖', '一等奖', '二等奖', '三等奖','优秀奖'],
    adnum:0,
    imgs: [],
  },

  onLoad: function (options) {
  
  },

  // 添加活动奖品图片
  bindViewTap: function () {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], 
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths)
        that.setData({
          avatarUrl: tempFilePaths
        })
      },
    })
  },

  // 控制添加活动奖品是否显示
  addprize: function () {
    if(this.data.add){
      this.setData({
        add: false
      })
    }else{
      this.setData({
        add: true
      })
    }
  },
  // 选择奖品是几等奖
  bindPickerChange: function (e) {
    this.setData({
      adnum: e.detail.value
    })
  },

  // 选择活动报名开始时间
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  // 选择活动报名结束时间
  bindDateChange2: function (e) {
    this.setData({
      date2: e.detail.value
    })
  },
  // 选择活动投票开始时间
  bindDateChange3: function (e) {
    this.setData({
      date3: e.detail.value
    })
  },
  // 选择活动投票结束时间
  bindDateChange4: function (e) {
    this.setData({
      date4: e.detail.value
    })
  },
  // 上传活动轮播图图片
  chooseImg: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        var imgs = that.data.imgs;
        console.log(tempFilePaths + '----');
        for (var i = 0; i < tempFilePaths.length; i++) {
          if (imgs.length >= 6) {
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

  // 预览活动轮播图图片
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

  // 删除活动轮播图图片
  deleteImg: function (e) {
    var imgs = this.data.imgs;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      imgs: imgs
    });
  },
})