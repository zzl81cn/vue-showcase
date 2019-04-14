<template>
    <div class="dialogue">
        <header id="wx-header">
            <div class="other">
                <router-link :to="{path:'/wechat/dialogue/dialogue-info', query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-group" v-show="$route.query.group_num&&$route.query.group_num!=1"></router-link>
                <router-link :to="{path:'/wechat/dialogue/dialogue-detail', query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-friends" v-show="$route.query.group_num==1"></router-link>
            </div>
            <div class="center">
                <router-link to="/" tag="div" class="iconfont icon-return-arrow">
                    <span>微信</span>
                </router-link>
                <span>{{pageName}}</span>
                <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
            </div>
        </header>

        <chat-bubble :msgInfo="msgContent"></chat-bubble>

        <footer class="dialogue-footer">
            <div class="component-dialogue-bar-person">
                <span class="iconfont icon-dialogue-jianpan" v-show="!currentChatWay" v-on:click="currentChatWay=true"></span>
                <span class="iconfont icon-dialogue-voice" v-show="currentChatWay" v-on:click="currentChatWay=false"></span>
                <div class="chat-way" v-show="!currentChatWay">
                    <div class="chat-say" v-press>
                        <span class="one">按住 说话</span>
                        <span class="two">松开 结束</span>
                    </div>
                </div>
                <div class="chat-way" v-show="currentChatWay">
                    <input class="chat-txt" type="text" ref="msgText" v-model="msgText" v-on:focus="focusIpt" v-on:blur="blurIpt"/>
                </div>
                <span class="expression iconfont icon-dialogue-smile" @click="showEmoji($event)"></span>
                <!-- <span class="more iconfont icon-dialogue-jia" @click.prevent="sendMsg"></span> --><!-- old plus icon -->
                <span class="btn btn-success" :class="[msgText == '' ? 'disabled': '']" @click.prevent="sendMsg">发送</span>
                <div class="recording" style="display: none;" id="recording">
                    <div class="recording-voice" style="display: none;" id="recording-voice">
                        <div class="voice-inner">
                            <div class="voice-icon"></div>
                            <div class="voice-volume">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <p>手指上划,取消发送</p>
                    </div>
                    <div class="recording-cancel" style="display: none;">
                        <div class="cancel-inner"></div>
                        <p>松开手指,取消发送</p>
                    </div>
                </div>
            </div>
        </footer>
        <div id="emojiApp" v-if="display.visible" v-click-outside="hide">
            <div class="emoji-list-wrap">
                <div v-for="(emojiGroup, category) in emojis" :key="category">
                    <h5>{{ category }}</h5>
                    <div class="emoji-icon-list">
                        <span class="emoji-icon" v-for="(emoji, emojiName) in emojiGroup" :key="emojiName" @click="insertEmoji(emoji)" :title="emojiName">{{ emoji }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import emojis from './emojis.js';
    import ChatBubble from './chat-bubble';
    export default {
        components: {
            ChatBubble,
        },
        data() {
            return {
                pageName: this.$route.query.name,
                currentChatWay: true, //ture为键盘打字 false为语音输入
                timer: null,
                // sayActive: false // false 键盘打字 true 语音输入
                scrollContainer: null,
                /* emojis start */
                display: {
                    x: 0,
                    y: 0,
                    visible: false,
                },
                search: '',
                emojis: emojis, /* emojis end */

                msgText: '',
                msgContent: { //普通消息列表
                    "mid": 1, //消息的id 唯一标识，重要
                    "type": "friend",
                    "group_name": "",
                    "group_qrCode": "",
                    "read": true, //true；已读 false：未读
                    "newMsgCount": 1,
                    "quiet": false, // true：消息免打扰 false：提示此好友/群的新消息
                    "msg": [
                        { //对话框的聊天记录 新消息 push 进
                            "text": "长按这些白色框消息，唤醒消息操作菜单，长按这些白色框消息，唤醒消息操作菜单",
                            "date": 1554970258609,
                            "name": "张三",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                        }, {
                            "text": '点击空白处，操作菜单消失',
                            "date": 1554970258609,
                            "name": "阿荡",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                        }, {
                            "type": 2, // 1 text, 2 voice
                            "date": 1554970258609,
                            "name": "阿荡",
                            "length": "12",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png",
                            "audioURL": "//zzl81cn.com/audio/record-5.wav"
                        }, {
                            "from": 2, // 1 对方， 2 自己
                            "type": 2, 
                            "date": 1554970258609,
                            "name": "张三",
                            "length": "",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header02.png",
                            "audioURL": "//zzl81cn.com/audio/record-10.wav"
                        }, {
                            "type": 2, 
                            "date": 1554970258609,
                            "name": "张三",
                            "length": "",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header02.png",
                            "audioURL": "//zzl81cn.com/audio/record-10.wav"
                        }, {
                            "from": 2,
                            "text": '哈哈&#x1f62c;',
                            "date": 1554970258609,
                            "name": "张三",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header02.png"
                        }, {
                            "from": 2,
                            "text": '\xF0\x9F\x98\x81',
                            "date": 1554970258609,
                            "name": "张三",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header02.png"
                        }, {
                            "from": 2, // 1 对方， 2 自己
                            "type": 2, 
                            "date": 1554970258609,
                            "name": "张三",
                            "length": "",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header02.png",
                            "audioURL": "//zzl81cn.com/audio/Back_in_Black_ringtons.mp3"
                        }, {
                            "from": 2, // 1 对方， 2 自己
                            "type": 2, 
                            "date": 1554970258609,
                            "name": "张三",
                            "length": "",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header02.png",
                            "audioURL": "//zzl81cn.com/audio/record-22.wav"
                        }, {
                            "from": 2,
                            "text": '来呀 来呀',
                            "date": 1554970258609,
                            "name": "张三",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header02.png"
                        }, {
                            "from": 2,
                            "text": '来呀 来呀',
                            "date": 1554970258609,
                            "name": "张三",
                            "headerUrl": "https://sinacloud.net/vue-wechat/images/headers/header01.png"
                        }
                    ],
                },
                input: '',
                search: '',
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.commit("setPageName", vm.$route.query.name)
            })
        },
        computed: {
            /* emojis() {
                if (this.search) {
                    const obj = {}

                    for (const category in this.emojiTable) {
                        obj[category] = {}

                        for (const emoji in this.emojiTable[category]) {
                        if (new RegExp(`.*${this.search}.*`).test(emoji)) {
                            obj[category][emoji] = this.emojiTable[category][emoji]
                        }
                        }

                        if (Object.keys(obj[category]).length === 0) {
                        delete obj[category]
                        }
                    }

                    return obj
                }

                return this.emojiTable
            }, */
            msgInfo() {
                for (var i in this.$store.state.msgList.baseMsg) {
                    if (this.$store.state.msgList.baseMsg[i].mid == this.$route.query.mid) {
                        return this.$store.state.msgList.baseMsg[i]
                    }
                }
            }
        },
        methods: {
            sendMsg() {
                // console.log('this.emojiData', this.emojis.People.smile);

                // this.msgText = this.$refs.msgText.value
                if(this.msgText.length !== 0) {
                    this.msgContent.msg.push({
                        // type: 2, 
                        from: 2,
                        date: 1554970258609,
                        headerUrl: "https://sinacloud.net/vue-wechat/images/headers/header02.png",
                        text: this.msgText,
                        name: '张三',
                        // audioURL: "//zzl81cn.com/audio/record-10.wav"
                    });
                    this.scrollContainer = document.querySelector('.dialogue-section');
                    this.scrollBtm();
                } else {
                    return;
                };
            },
            async scrollBtm() {
                this.$nextTick(() => {
                    let el = this.scrollContainer;
                    el.scrollTop = el.scrollHeight - el.clientHeight;
                    // console.log(el, el.scrollTop, el.scrollHeight, el.clientHeight)
                    // this.$refs.msgText.value = "";
                    this.msgText = "";
                })
            },
            insertEmoji(emoji) {
                /**
                 * [emoji表情与unicode编码互转(JS,JAVA,C#)](http://www.cnblogs.com/hdwang/p/10309163.html);
                 * 表情字符转编码：'😁'.codePointAt(0).toString(16) -> 1f600
                 * 编码转表情字符：String.fromCodePoint('0x1f601') -> 😁
                 * unescape('\uD83D\uDE01') - 😁 // C/C++/Java source code to unicode
                  */
                console.log('ok', emoji, emoji.codePointAt(0), emoji.codePointAt(0).toString(16), encodeURIComponent(emoji), decodeURIComponent('%F0%9F%98%8A'));
                this.msgContent.msg.push({
                    from: 2,
                    date: 1554970258609,
                    headerUrl: "https://sinacloud.net/vue-wechat/images/headers/header02.png",
                    text: emoji,
                    name: '张三',
                    test: encodeURIComponent(emoji).toString()
                });
                this.scrollContainer = document.querySelector('.dialogue-section');
                this.display.visible = false; /* 插入表情后隐藏表情选择面板 */
                this.scrollBtm();
            },
            /* emojis methods start */
            /* insert(emoji) {
                this.$emit('emoji', emoji)
            }, */
            /* 显示emoji输入面板 */
            showEmoji(e) {
                console.log('haha sendEmoji', e);
                this.display.visible = !this.display.visible;
                this.display.x = e.clientX;
                this.display.y = e.clientY;
            },
            hide() {
                this.display.visible = false
            },
            escape(e) {
                if (this.display.visible === true && e.keyCode === 27) {
                this.display.visible = false
                }
            },
            /* emojis methods end */
            // 解决输入法被激活时 底部输入框被遮住问题
            focusIpt() {
                this.timer = setInterval(function() {
                    document.body.scrollTop = document.body.scrollHeight
                }, 100)
            },
            blurIpt() {
                clearInterval(this.timer)
            },
            // 点击空白区域，菜单被隐藏
            MenuOutsideClick(e) {
                var container = document.querySelectorAll('.text'),
                    msgMore = document.getElementById('msg-more')
                if (e.target.className === 'text') {

                } else {
                    msgMore.style.display = 'none'
                    // container.forEach(item=>item.style.backgroundColor='#fff') // 20190410
                }
            }
        },
        directives: {
            'click-outside': {
                bind(el, binding, vNode) {
                    if (typeof binding.value !== 'function') {
                        return;
                    }

                    const bubble = binding.modifiers.bubble
                    const handler = (e) => {
                        if (bubble || (! el.contains(e.target) && el !== e.target)) {
                            binding.value(e);
                        }
                    }
                    el.__vueClickOutside__ = handler;

                    document.addEventListener('click', handler);
                },
                unbind(el, binding) {
                    document.removeEventListener('click', el.__vueClickOutside__)
                    el.__vueClickOutside__ = null;
                },
            },

            press: {
                inserted(element, binding) {
                    var recording = document.querySelector('.recording'),
                        recordingVoice = document.querySelector('.recording-voice'),
                        recordingCancel = document.querySelector('.recording-cancel'),
                        startTx, startTy;
                    
                    element.addEventListener('touchstart', function(e) {
                        // 用bind时，vue还没插入到dom,故dom获取为 undefine，用 inserted 代替 bind,也可以开个0秒的定时器
                        element.className = "chat-say say-active"
                        recording.style.display = recordingVoice.style.display = "block"
                            // console.log('start')
                        var touches = e.touches[0]
                        startTx = touches.clientX
                        startTy = touches.clientY
                        e.preventDefault()
                    }, false)
                    element.addEventListener('touchend', function(e) {
                        /*var touches = e.changedTouches[0];
                        var distanceY = startTy - touches.clientY;
                        if (distanceY > 50) {
                            console.log("取消发送信息");
                        }else{
                            console.log("发送信息");
                        }*/

                        element.className = "chat-say"
                        recordingCancel.style.display = recording.style.display = recordingVoice.style.display = "none"
                            // console.log('end')
                        e.preventDefault()
                    }, false)
                    element.addEventListener('touchmove', function(e) {
                        var touches = e.changedTouches[0],
                            endTx = touches.clientX,
                            endTy = touches.clientY,
                            distanceX = startTx - endTx,
                            distanceY = startTy - endTy;

                        if (distanceY > 50) {
                            element.className = "chat-say"
                            recordingVoice.style.display = "none"
                            recordingCancel.style.display = "block"
                        }else{
                            element.className = "chat-say say-active"
                            recordingVoice.style.display = "block"
                            recordingCancel.style.display = "none"
                        }
                        // 阻断事件冒泡 防止页面被一同向上滑动
                        e.preventDefault()
                    }, false);
                }
            },
        },
        mounted() {
            document.addEventListener('keyup', this.escape)
        },
        destroyed() {
            document.removeEventListener('keyup', this.escape)
        },
    }
</script>
<style lang="scss">
    @import "../../assets/sass/dialogue.scss";
    .say-active {
        background: #c6c7ca;
    }
</style>
