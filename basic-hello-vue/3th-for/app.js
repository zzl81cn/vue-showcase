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
