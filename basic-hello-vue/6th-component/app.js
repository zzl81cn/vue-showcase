/* 每个组件独立自己的state */
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

let app12 = new Vue({
    el: '#app12'
});


Vue.component('blog-post', {
    props: ['post'],
    template: '<div class="blog-post">' +
        '<h3>{{ post.title }}</h3>' +
        '<div v-html="post.content"></div>' +
        '</div>'
});

let app13 = new Vue({
    el: '#app13',
    data: {
        posts: [
            {id: 1, title: 'My jurney with vue', content: '<span>xx</span>'},
            {id: 2, title: 'Blogging with vue', content: '<span>yy</span>'},
            {id: 3, title: 'Why vue is so fun', content: '<span>zz</span>'},
            {id: 4, title: 'Test vue is ok', content: '<span>11</span>'}
        ]
    }
});

/* 监听子组件事件 component event */
Vue.component('blog-posts-events-demo', {
    props: ['post'],
    template: '<div class="blog-post">' +
        '<h3>{{ post.title }}</h3>' +
        '<button v-on:click="$emit(\'enlarge-text\')">Enlarge text</button>' +
        '<div v-html="post.content"></div>' +
        '</div>'
});

let app14 = new Vue({
    el: '#app14',
    data: {
        posts: [
            {id: 1, title: 'My jurney with vue', content: '<span>xx</span>'},
            {id: 2, title: 'Blogging with vue', content: '<span>yy</span>'},
            {id: 3, title: 'Why vue is so fun', content: '<span>zz</span>'},
        ],
        postFontSize: 1
    }
});

Vue.component('blog-posts-events-demo2',{
    props: ['post'],
    template: '<div class="blog-post">' +
        '<h3>{{post.title}}</h3>' +
        '<button v-on:click="$emit(\'enlarge-text\', 0.1)">Enlarge text</button>' +
        '<div v-html="post.content"></div>' +
        '</div>'
});

let app15 = new Vue({
    el: '#app15',
    data: {
        posts: [
            {id: 1, title: 'My jurney with vue', content: '<span>xx</span>'},
            {id: 2, title: 'Blogging with vue', content: '<span>yy</span>'},
            {id: 3, title: 'Why vue is so fun', content: '<span>zz</span>'},
        ],
        postFontSize: 1
    }
});

Vue.component('blog-posts-events-demo3',{
    props: ['post'],
    template: '<div class="blog-post">' +
        '<h3>{{post.title}}</h3>' +
        '<button v-on:click="$emit(\'enlarge-text\', 0.1)">Enlarge text</button>' +
        '<div v-html="post.content"></div>' +
        '</div>'
});

let app16 = new Vue({
    el: '#app16',
    data: {
        posts: [
            {id: 1, title: 'My jurney with vue', content: '<span>xx</span>'},
            {id: 2, title: 'Blogging with vue', content: '<span>yy</span>'},
            {id: 3, title: 'Why vue is so fun', content: '<span>zz</span>'},
        ],
        postFontSize: 1
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            this.postFontSize += enlargeAmount;
        }
    }
});

Vue.component('custom-input', {
    props: ['value'],
    template: '<div>' +
        '<input v-bind:value="value" v-on:input="$emit(\'input\', $event.target.value)">' +
        '<p>{{value}}</p>' +
        '</div>'
});

let app17 = new Vue({
    el: '#app17',
    data: {
        searchText: 'placeholder'
    }
});


Vue.component('alert-box', {
    template: '<div class="demo-alert-box">' +
        '<strong>Error! </strong>' +
        '<slot></slot>' +
        '</div>'
});

let app18 = new Vue({
    el: '#app18',

});

Vue.component('tab-home', {
    template: '<div>Home component</div>'
});

Vue.component('tab-posts', {
    template: '<div>Posts component</div>'
});

Vue.component('tab-archive', {
    template: '<div>Archive component</div>'
});

new Vue({
    el: '#dynamic-component-demo',
    data: {
        currentTab: 'Home',
        tabs: ['Home', 'Posts', 'Archive']
    },
    computed: {
        currentTabComponent: function () {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    }
});