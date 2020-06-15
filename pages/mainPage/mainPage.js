// pages/mainPage/mainPage.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        statusBarHeight: app.globalData.statusBarHeight,
        navBarHeight: app.globalData.navgationHeight,

        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        bannersList:[],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var list = this.data.bannersList
        list.push({"id":"0","url":"https://hbimg.huabanimg.com/cf1ec32b9b7d36c69a50867065d6971c1ab2f5c2617090-HhRm8v_fw658"})
        list.push({"id":"0","url":"https://hbimg.huabanimg.com/1a6ec38ef37df0a18cbfd1c3e8da8a22060980e8442bd-hnq4qL_fw658"})
        list.push({"id":"0","url":"https://hbimg.huabanimg.com/f371ce205a370ee377a3395217cc42ce73e0f27211fd61-4OFJiD_fw658"})
        list.push({"id":"0","url":"https://hbimg.huabanimg.com/4f44e407a57855a941df7d51b0cc0f96df60c473a9c7-eAXyH7_fw658"})

        this.setData({bannersList:list})
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