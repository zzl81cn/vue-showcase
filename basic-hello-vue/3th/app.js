/* 条件渲染 */
var app1 = new Vue({
    el: "#app1",
    data: {
        awesome: true
    }
});

var app2 = new Vue({
    el: "#app2",
    data: {
        loginType: "userName",
        submitType: "client"
    },
    methods: {
        changeType: function () {
            this.loginType = (this.loginType === "userName") ? "email" : "userName"
        },
        changeSubmitType: function () {
            this.submitType = (this.submitType === "client") ? "id" : "client";
        }
    }
});

var app3 = new Vue({
    el: "#app3",
    data: {
        ok: true
    },
    methods: {
        toggleShow: function () {
            this.ok = !this.ok
        }
    }
});