//
/*var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world.'
    }
});*/
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world again.'
    }
});
var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Create is ' + new Date().toLocaleString()
    }
});
var app3 = new Vue({
    el: '#app3',
    data: {
        seen: true
    }
});
// console: key input: app4.todos.push({text: '123'})
var app4 = new Vue({
  el: '#app4',
  data: {
    todos: [
      {text: 'ha'},
      {text: 'yeah'},
      {text: 'ko'}
    ]
  }
});
var app5 = new Vue({
  el: '#app5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
});
var app7 = new Vue({
  el: '#app7',
  data: {
    groceryList: [
      {id: 0, text: 'shucai'},
      {id: 1, text: 'fruit'},
      {id: 2, text: 'another'}
    ]
  }
});

Vue.component('goto-item', {
    props: ['goto'],
    template: '<li>{{goto.text}}</li>'
});

var app7B = new Vue({
    el: '#app7B',
    data: {
        gotoList: [
            {id: 0, text: 'goto bed.'},
            {id: 1, text: 'goto run.'}
        ]
    }
});

var data = {a : 1};

var vm = new Vue({
    data: data
});
vm.a = data.a;
vm.a = 2;

// 使用 Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。
var obj = {
    foo: 'bar'
}

Object.freeze(obj)

var app8b = new Vue({
    el: '#app8',
    data: obj
});

// 不要在选项属性或回调上使用箭头函数，因为箭头函数是和父级上下文绑定在一起的，this 不会是如你所预期的 Vue 实例
var app8c = new Vue({
    el: "#app8c",
    data: {
        a: 1
    },
    created: function () {
        console.log('a is: ', this.a)
    }
});

// computed
var vmComputed = new Vue({
    el: '#app9a',
    data: {
        message: "Hello"
    },
    computed: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('');
        }
    }
});

