<template>
    <section class="dialogue-section clearfix" @click="MenuOutsideClick">
        <!-- 每一个消息 -->
        <div class="row clearfix" :class="{mine: item.from === 2}" v-for="(item, index) in msgInfo.msg" :key="index">
            <template v-if="item.from === 2"> <!-- 自己（右侧） -->
                <template v-if="item.type === 2"> <!-- 语音类型 -->
                    <img :src="item.headerUrl" class="header">
                    <div class="text" :class="[resultPlayIndex === index? '':'stop-animate', item.length >= 10 && item.length < 20 ? 'middle' : '', item.length >= 20 ? 'large' : '']" @click="togglePlay($event, index)" v-more>
                        <div v-if="item.length !== null" class="time-length">{{item.length}}"</div>
                        <div class="cricle-play">
                            <div class="sw large"></div>
                            <div class="sw middle"></div>
                            <div class="sw small"></div>
                        </div>
                        <audio ref="audio" preload="auto" hidden="true" :src="item.audioURL" @canplay="audioCanplay($event, index)">您的浏览器不支持audio标签</audio>
                    </div>
                </template>
                <template v-else> <!-- 文字类型 -->
                    <img :src="item.headerUrl" class="header">
                    <p class="text" v-more>{{item.text}}</p>
                </template>
            </template>
            <template v-else> <!-- 对方（左侧） -->
                <template v-if="item.type === 2"> <!-- 语音类型 -->
                    <img :src="item.headerUrl" class="header">
                    <div class="text" :class="[resultPlayIndex === index? '':'stop-animate', item.length >= 10 && item.length < 20 ? 'middle' : '', item.length >= 20 ? 'large' : '']" @click="togglePlay($event, index)" v-more>
                        <div class="cricle-play">
                            <div class="sw small"></div>
                            <div class="sw middle"></div>
                            <div class="sw large"></div>
                        </div>
                        <div v-if="item.length !== null" class="time-length">{{item.length}}"</div>
                        <audio ref="audio" preload="auto" hidden="true" :src="item.audioURL" @canplay="audioCanplay($event, index)">您的浏览器不支持audio标签</audio>
                    </div>
                </template>
                <template v-else> <!-- 文字类型 -->
                    <img :src="item.headerUrl" class="header">
                    <p class="text" v-more>{{item.text}}</p>
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
</template>
<script>
export default {
    name: "chat-bubble",
    props: ['msgInfo'],
    data: function() {
        return {
            playIndex: null // 初始当前播放索引
        }
    },
    computed: {
        resultPlayIndex() {
            return this.playIndex
        }
    },
    methods: {
        /**
         * 1.文字、语音左右相对，右侧颜色不同;
         * 2.将音频时长反映到聊天气泡上，气泡大小、数值;
         * 3.音频间播放互斥;
         **/
        togglePlay(event, index) {
            let currentAudio = null,
                allAudio = null;
            this.playIndex = index; // 语音播放动画
            console.log('togglePlay event ', event, 'index ', index, '$ref', this.$refs.audio);
            let el = event.currentTarget;
            currentAudio = el.getElementsByTagName('audio')[0]; /* 当前事件对象的Audio */
            allAudio = this.$refs.audio;

            if (currentAudio !== null) {
                console.log('currentAudio.paused', currentAudio.paused, 'duration', Math.floor(currentAudio.duration));
            }
            /* 如果当前音频是暂停状态：开始播放 */
            if (currentAudio.paused) {
                /* 初始化暂停所有音频播放 */
                for(let i = 0; i < allAudio.length; i++) {
                    allAudio[i].pause();
                    console.log('Init default audio paused.');
                }
                currentAudio.play();
                console.log('play');
            } else {
                this.playIndex = null;
                currentAudio.pause();
                console.log('pause');
            }
            currentAudio.onended = () => {
                console.log('stop');
                this.playIndex = null; // 播放结束清除语音播放动画
            }
        },
        audioCanplay(event, index) {
            /* console.log('test audio.',this.$refs.audio[0].duration);
            const audioRecord = this.$refs.audio;
            this.ADArr = audioRecord.map(function(item, index) {
                console.log(index);
                var tempArr = [];
                return tempArr[index] = Math.floor(item.duration);
            }) */
            // console.log('--------------')
            // console.log('e ', e, 'index ', index);
            // console.log(this.msgInfo.msg);
            this.msgInfo.msg[index].length = Math.floor(event.target.duration); /* 按照数据遍历索引将音频长度赋值给聊天数据 */
            // this.audioDuration = Math.floor(audioRecord[0].duration);
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
                        // element.style.backgroundColor = '#e5e5e5'
                    }, 500)
                }, false);
                element.addEventListener('touchmove', function(e) {
                    var touches = e.changedTouches[0],
                        disY = touches.clientY;
                    if (Math.abs(disY-startTy)>10) {
                        clearTimeout(this.timer)
                    }
                }, false);
                element.addEventListener('touchend', function(e) {
                    clearTimeout(this.timer)
                }, false);
            }
        }
    },
    mounted() {
        // console.log('query name', this.$route.query.name);
    }
}
</script>
<style>

</style>
