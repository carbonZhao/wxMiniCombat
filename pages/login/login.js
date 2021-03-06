// pages/login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userName:"",
        password:""
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

    },
    bindUserNameInput:function(e)
    {
        this.setData({
            userName: e.detail.value
        })
    },
    bindPasswordInput:function(e)
    {
        this.setData({
            password: e.detail.value
        })
    },
    loginButtonAction:function(){
        if (this.data.userName == null || this.data.userName.length == 0)
        {
            wx.showToast({
                title: '请输入用户名/手机号',
                icon:"none"
            })
        }
        else if (this.data.password == null || this.data.password.length == 0)
        {
            wx.showToast({
                title: '请输入密码',
                icon:"none"
            })
        }
        else
        {

        }
    },
    getMobilePhone: function(e)
    {
        wx.switchTab({
          url: '../mainPage/mainPage',
        })
    },
    lgoinWithVerCodeAction:function()
    {
        wx.navigateTo({
            url: './loginWithMobile',
        })
    }
})