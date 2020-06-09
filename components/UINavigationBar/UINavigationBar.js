// components/navgationBar/UINavigationBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        showLeftBarItem:{
            type:Boolean,
            value:true
        },
        leftText:{
            type: String,
            value: '返回'
        },
        statusBarHeight:{
            type:Number,
            value:'20'
        },
        navBarHeight: {
            type: Number,
            value: '44'
        },
        barBackgroundSrc:{
            type: String,
            value: ''
        },
        barBackgroundColor:{
            type: String,
            value: '#ffffff'
        }, 
        showSeprator:{
            type:Boolean,
            value:true
        },
        leftBackIcon: {
            type: String,
            value: '../../resource/arrow-left.png'
        },
        viewTitle:{
            type: String,
            value: ''
        },
        viewTitleColor: {
            type: String,
            value: '#ffffff'
        }
    },
    externalClasses: ['bar-background-css'],
    /**
     * 组件的初始数据
     */
    data: {

    },
    attached:function(){
    },

    /**
     * 组件的方法列表
     */
    methods: {
        leftBarAction() {
            this.triggerEvent('leftBarAction')
        },
    }
})
