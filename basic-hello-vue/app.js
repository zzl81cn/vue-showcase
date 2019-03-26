/*
* vue ui framework iview: https://github.com/zzl81cn/iview
* https://github.com/zzl81cn/iview
* npm install iview --save
* <template>
    <Slider v-model="value" range />
</template>
<script>
    export default {
        data () {
            return {
                value: [20, 50]
            }
        }
    }
</script>
* */
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

// computed 计算属性
var app9a = new Vue({
    el: '#app9a',
    data: {
        message: "Hello",
        firstName: 'Foo',
        lastName: 'Bar',
    },
    computed: {
        reverseMessage: function () {
            return this.message.split('').reverse().join('');
        },
        now: function () {
            return Date.now();
        },
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length -1]
            }
        }
    },
    /*每当触发重新渲染时，调用方法将总会再次执行函数。*/
    /*methods: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('')
        }
    }*/
});

// watch fullName
var app9b = new Vue({
    el: '#app9b',
    data: {
        firstNameb: 'Foo',
        lastNameb: 'Bar',
        fullNameb: 'Foo Bar'
    },
    watch: {
        firstName: function (val) {
            this.fullNameb = val + '' + this.lastNameb;
        },
        lastName: function (val) {
            this.fullNameb = this.firstNameb + '' + val;
        }
    }
});

var watchExampleVM = new Vue({
    el: '#app9c',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    },
    created: function () {
        // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
        // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
        // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
        // 请参考：https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        }
    }
});
