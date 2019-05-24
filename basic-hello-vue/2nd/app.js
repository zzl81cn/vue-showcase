var styleA = new Vue({
    el: "#styleA",
    data: {
        isActive: true,
        activeClass: 'active',
        isErrorClass: 'isError',
        classObject: {
            active: true,
            isError: false
        },
        message: "页面加载于：" + new Date().toLocaleDateString()
    },
    computed: {
        classObjectFunc: function () {
            return {
                active: this.isActive
            }
        }
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<p class="actions">{{todo.text}}</p>'
});

var styleB = new Vue({
    el: '#styleZ',
    data: {
        cate: [
            {id: 0, text: "a"},
            {id: 1, text: "b"},
            {id: 2, text: "c"},
        ]

    }
});

var styleC = new Vue({
    el: '#styleC',
    data: {
        activeColor: '#0ee',
        fontSize: 12,
        styleObject: {
            color: '#0ff',
            fontSize: '13px'
        }
    }
});