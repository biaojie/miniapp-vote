// pages/details/details.js
Page({

  data: {
    commentclass: ['commenttitle1ed','commenttitle1'],
    commentid: 0,
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    comment: false,
    gift: false,
    giftall:[{
      gifttitle:'送一张投票卷',
      giftimg:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4121510753,2824158837&fm=27&gp=0.jpg',
      giftname:'99鲜花',
      giftprice:'9.9',
      giftbg:'gift1',
      gifttitlebg:'gifttitle',
    }, {
      gifttitle: '送一张投票卷',
      giftimg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4121510753,2824158837&fm=27&gp=0.jpg',
      giftname: '99鲜花',
      giftprice: '7.9',
      giftbg: 'gift1no',
      gifttitlebg: 'gifttitleno',
      }, {
        gifttitle: '送一张投票卷',
        giftimg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4121510753,2824158837&fm=27&gp=0.jpg',
        giftname: '99鲜花',
        giftprice: '8.9',
        giftbg: 'gift1no',
        gifttitlebg: 'gifttitleno',
    }, {
      gifttitle: '送一张投票卷',
      giftimg: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4121510753,2824158837&fm=27&gp=0.jpg',
      giftname: '99鲜花',
      giftprice: '8.9',
      giftbg: 'gift1no',
      gifttitlebg: 'gifttitleno',
    }],
  },

  onLoad: function (options) {
  
  },

  // 评论页面，默认隐藏
  comment: function () {
    if (this.data.comment) {
      this.setData({
        comment: false
      })
    } else {
      this.setData({
        comment: true
      })
    }
  },

  // 送礼物页面，默认隐藏
  givingGifts: function() {
    if (this.data.gift) {
      this.setData({
        gift: false
      })
    } else {
      this.setData({
        gift: true
      })
    }
  },

  // 送礼物--点击礼物效果
  giftClick: function (e) {
    var index = e.currentTarget.dataset.index;
    var giftall = this.data.giftall;
    for (var i = 0; i < giftall.length ; i++){
      giftall[i].giftbg = 'gift1no';
      giftall[i].gifttitlebg = 'gifttitleno';
    }
    giftall[index].giftbg = 'gift1';
    giftall[index].gifttitlebg = 'gifttitle';
    this.setData({
      giftall: giftall,
    })
  },

  // 底部导向栏切换
  commentClick: function (e) {
    var id = e.currentTarget.dataset.id;
    var commentclass = ['commenttitle1', 'commenttitle1'];
    commentclass[id] = 'commenttitle1ed';
    this.setData({
      commentclass: commentclass,
      commentid: id
    })
  },

  pay: function () {
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: '',
      paySign: '',
    })
  },
  
})