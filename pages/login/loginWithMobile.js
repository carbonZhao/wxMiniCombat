// pages/login/loginWithMobile.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mobile:"",
        verCode:"",
        grantedVerCode:false,
        verTitle:"获取验证码"
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
    getVerCodeAction:function(){
        if(this.data.mobile == null || this.data.mobile.length == 0)
        {
            wx.showToast({
                title:"请输入手机号码",
                icon:"none"
            })
        }
        // else if (!filters.isPhone(this.data.mobile))
        // {
        //     wx.showToast({
        //         title:"手机号码无效",
        //         icon:"none"
        //     })
        // }
        else
        {
            let timerCounter = 60;
            let self = this
            let tid = setInterval(() => {
                timerCounter --
                let title = timerCounter+'s';
                if (timerCounter == 0)
                {
                    //回收停止定时器，避免继续执行
                    clearInterval(tid)
                    title = "获取验证码"
                }
                self.setData({verTitle:title})
            }, 1000);

            this.setData({grantedVerCode:true})
        }
    },
    mmiInputMobileAction:function(e){
        this.setData({mobile:e.detail.value})
    },
    mmiInputVerCodeAction:function(e){
        this.setData({verCode:e.detail.value})
    },
    doneAction:function(e)
    {
        if(this.data.mobile == null || this.data.mobile.length == 0)
        {
            wx.showToast({
                title:"请输入手机号码",
                icon:"none"
            })
        }
        else if (this.data.verCode == null || this.data.verCode.length == 0)
        {
            wx.showToast({
                title:"请输入验证码",
                icon:"none"
            })
        }
        else if (!this.grantedVerCode)
        {
            wx.showToast({
                title:"请获取正确的验证码",
                icon:"none"
            })
        }
    }
})