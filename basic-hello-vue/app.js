var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello world.'
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
})
