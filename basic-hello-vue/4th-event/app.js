var app1 = new Vue({
    el: '#app1',
    data: {
        count: 1
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        name: 'zzl81cn'
    },
    methods: {
        greet: function (event) {
            alert("Hello " + this.name + "!");
            if(event) {
                alert(event.target.tagName)
            }
        }
    }
});

var app3 = new Vue({
    el: '#app3',
    methods: {
        say: function (message) {
            alert("Say " + message);
        }
    }
});