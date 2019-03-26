var styleA = new Vue({
    el: "#styleA",
    data: {
        isActive: true,
        activeClass: 'active',
        isErrorClass: 'isError',
        classObject: {
            active: true,
            isError: false
        }
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
    el: '#styleB',
    data: {
        cate: [
            {id: 0, text: "a"},
            {id: 0, text: "a"},
            {id: 0, text: "a"},
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