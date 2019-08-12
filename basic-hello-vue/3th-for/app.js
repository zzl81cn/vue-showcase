/* 条件渲染 */
var app1 = new Vue({
    el: "#app1",
    data: {
        awesome: true,
        a: 1
    },
    created: function () {
        console.log('a is: ', this.a); /* 不要在选项属性或回调上使用箭头函数 20190525 https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90 */
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

var app4 = new Vue({
    el: "#app4",
    data: {
        parentMessage: 'parent',
        items: [
            {id: 1, name : "123"},
            {id: 2, name : "456"},
            {id: 3, name : "789"}
        ],
        dataObj: {firstName: "zilong",lastName: "zhou", age: 37},
        ia: ['a', 'b', 'c'],
        numbers: [1, 2, 3, 4, 5, 6],
        todos: [
            {text: "haha", isComplate: true},
            {text: "hehe", isComplate: true},
            {text: "heihei", isComplate: false},
            {text: "hoho", isComplate: true},
        ]
    },
    computed: {
        eventNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0;
            })
        }
    }
});

/* 表单删除列表 */
Vue.component('todo-item', {
    template: '\
    <li>\
        {{title}}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
    ',
    props: ['title']
});
var app5 = new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {id: 1, title: 'Do the dishes'},
            {id: 2, title: 'Take out the trash'},
            {id: 3, title: 'Mow the lawn'}
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})
