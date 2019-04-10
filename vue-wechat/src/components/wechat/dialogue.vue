<template>
    <div class="dialogue">
        <header id="wx-header">
            <div class="other">
                <router-link :to="{path:'/wechat/dialogue/dialogue-info',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-group" v-show="$route.query.group_num&&$route.query.group_num!=1"></router-link>
                <router-link :to="{path:'/wechat/dialogue/dialogue-detail',query: { msgInfo: msgInfo}}" tag="span" class="iconfont icon-chat-friends" v-show="$route.query.group_num==1"></router-link>
            </div>
            <div class="center">
                <router-link to="/" tag="div" class="iconfont icon-return-arrow">
                    <span>微信</span>
                </router-link>
                <span>{{pageName}}</span>
                <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
            </div>
        </header>
        <section class="dialogue-section clearfix" @click="MenuOutsideClick">
            <!-- 每一个消息 -->
            <div class="row clearfix" :class="{mine:item.from === 2}" v-for="(item, index) in msgInfo.msg" :key='index'>
                <template v-if="item.from === 2"><!-- 自己 -->
                    <template v-if="item.type === 2"><!-- 语音 -->
                        <img :src="item.headerUrl" class="header">
                        <div class="text" :class="{cricleplay:item.type === 2, 'stop-animate':stopAnimate}" @click="toggleAnimate" v-more>
                            <div v-if="item.length !== null" class="time-length">{{item.length}}"</div>
                            <div class="sw large"></div>
                            <div class="sw middle"></div>
                            <div class="sw small"></div>
                            <audio id="iAudio" ref="audio" preload="auto" hidden="true" :src="require('../../assets/audio/record.wav')">您的浏览器不支持audio标签</audio>
                        </div>
                    </template>
                    <template v-else><!-- 文字 -->
                        <img :src="item.headerUrl" class="header">
                        <p class="text" :class="{cricleplay:item.type === 'voice'}" v-more>{{item.text}}</p>
                    </template>
                </template>
                <template v-else><!-- 对方 -->
                    <template v-if="item.type === 2"><!-- 语音 -->
                        <img :src="item.headerUrl" class="header">
                        <div class="text" :class="{cricleplay:item.type === 2, 'stop-animate':stopAnimate}" @click="toggleAnimate" v-more>
                            <div class="sw small"></div>
                            <div class="sw middle"></div>
                            <div class="sw large"></div>
                            <div v-if="item.length !== null" class="time-length">{{item.length}}"</div>
                            <audio id="iAudio" ref="audio" preload="auto" hidden="true" :src="require('../../assets/audio/record.wav')">您的浏览器不支持audio标签</audio>
                        </div>
                    </template>
                    <template v-else><!-- 文字 -->
                        <img :src="item.headerUrl" class="header">
                        <p class="text" :class="{cricleplay:item.type === 'voice'}" v-more>{{item.text}}</p>
                    </template>
                </template>
            </div>
            <span class="msg-more" id="msg-more">
                <ul>
                    <li>复制</li>
                    <li>转发</li>
                    <li>收藏</li>
                    <li>删除</li>
                </ul>
            </span>
        </section>
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
                    <input class="chat-txt" type="text" v-on:focus="focusIpt" v-on:blur="blurIpt"/>
                </div>
                <span class="expression iconfont icon-dialogue-smile"></span>
                <span class="more iconfont icon-dialogue-jia"></span>
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
    </div>
</template>
<script>
    export default {
        data() {
            return {
                pageName: this.$route.query.name,
                currentChatWay: true, //ture为键盘打字 false为语音输入
                timer: null,
                // sayActive: false // false 键盘打字 true 语音输入
                stopAnimate: true // 语音播放动画初始状态（停止动画）
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.$store.commit("setPageName", vm.$route.query.name)
            })
        },
        computed: {
            msgInfo() {
                for (var i in this.$store.state.msgList.baseMsg) {
                    if (this.$store.state.msgList.baseMsg[i].mid == this.$route.query.mid) {
                        return this.$store.state.msgList.baseMsg[i]
                    }
                }
            }
        },
        directives: {
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
            more: {
                bind(element, binding) {
                    var startTx, startTy
                    element.addEventListener('touchstart', function(e) {
                        var msgMore = document.getElementById('msg-more'),
                            touches = e.touches[0];
                        startTx = touches.clientX
                        startTy = touches.clientY
                        
                        clearTimeout(this.timer)
                        this.timer = setTimeout(()=>{
                            // 控制菜单的位置
                            msgMore.style.left = ((startTx - 18) > 180 ? 180 : (startTx - 18)) + 'px'
                            msgMore.style.top = (element.offsetTop - 33) + 'px'
                            msgMore.style.display = "block"
                            element.style.backgroundColor = '#e5e5e5'
                        },500)

                    }, false)
                    element.addEventListener('touchmove', function(e) {
                        var touches = e.changedTouches[0],
                            disY = touches.clientY;
                        if (Math.abs(disY-startTy)>10) {
                            clearTimeout(this.timer)
                        }
                    }, false)
                    element.addEventListener('touchend', function(e) {
                        clearTimeout(this.timer)
                    }, false)
                }
            }
        },
        methods: {
            /**
             * 1.将音频时长反映到聊天气泡上，气泡大小、数值等
             * 2.音频间播放互斥
             **/
            toggleAnimate(event) {
                let el = event.currentTarget;
                let elAudio = el.getElementsByTagName('audio')[0];
                // let elAudio = this.$refs.audio[0];
                // this.$refs.audio[0].play();
                if (elAudio !== null) {
                    console.log('elAudio.paused', elAudio.paused, 'duration', elAudio.duration);
                } if (elAudio.paused) {
                    elAudio.play();
                    this.stopAnimate = !this.stopAnimate;
                    console.log('play');
                } else {
                    this.stopAnimate = true;
                    elAudio.pause();
                    console.log('pause');
                }
                elAudio.onended = () => {
                    console.log('stop');
                    this.stopAnimate = true; // 播放结束清除语音播放动画
                }
            },
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
        }
    }
</script>
<style>
    @import "../../assets/css/dialogue.css";
    .say-active {
        background: #c6c7ca;
    }
</style>
