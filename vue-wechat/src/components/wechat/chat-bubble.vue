<template>
    <section>
        <!-- 每一个消息 -->
        <div class="row clearfix" :class="{mine:item.from === 2}" v-for="(item, index) in msgInfoData.msg" :key='index'>
            <template v-if="item.from === 2"><!-- 自己（右侧） -->
                <template v-if="item.type === 2"><!-- 语音 -->
                    <img :src="item.headerUrl" class="header">
                    <div class="text cricleplay" :class="playIndex === index? '':'stop-animate'" @click="togglePlay($event, index)" v-more>
                        <div v-if="item.length !== null" class="time-length">{{item.length}}"</div>
                        <div class="sw large"></div>
                        <div class="sw middle"></div>
                        <div class="sw small"></div>
                        <audio ref="audio" preload="auto" hidden="true" :src="item.audioURL" @canplay="audioCanplay($event,index)">您的浏览器不支持audio标签</audio>
                    </div>
                </template>
                <template v-else><!-- 文字 -->
                    <img :src="item.headerUrl" class="header">
                    <p class="text" :class="{cricleplay: item.type === 'voice'}" v-more>{{item.text}}</p>
                </template>
            </template>
            <template v-else><!-- 对方（左侧） -->
                <template v-if="item.type === 2"><!-- 语音 -->
                    <img :src="item.headerUrl" class="header">
                    <div class="text cricleplay" :class="playIndex === index? '':'stop-animate'" @click="togglePlay($event, index)" v-more>
                        <div class="sw small"></div>
                        <div class="sw middle"></div>
                        <div class="sw large"></div>
                        <div v-if="item.length !== null" class="time-length">{{item.length}}"</div>
                        <audio ref="audio" preload="auto" hidden="true" :src="item.audioURL" @canplay="audioCanplay($event,index)">您的浏览器不支持audio标签</audio>
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
</template>
<script>
export default {
    name: "chat-bubble",
    props: ['msgInfoData'],
    data: function() {
        return {
            stopAnimate: true ,// 语音播放动画初始状态（停止动画）
            playIndex: null
        }
    },
    methods: {
        /**
         * 1.将音频时长反映到聊天气泡上，气泡大小、数值等
         * 2.音频间播放互斥
         **/
        togglePlay(event, index) {
            this.playIndex = index;
            console.log('togglePlay event ', event, 'index ', index, '$ref', this.$refs.audio);
            let el = event.currentTarget;
            let elAudio = el.getElementsByTagName('audio')[0];
            let refAudio = this.$refs.audio;
            /* 初始化暂停所有音频播放 */
            for(let i = 0; i <refAudio.length; i++ ) {
                refAudio[i].pause();
                console.log('Init default audio paused.');
            }

            if (elAudio !== null) {
                console.log('elAudio.paused', elAudio.paused, 'duration', elAudio.duration);
            } if (elAudio.paused) {
                elAudio.play();
                // this.stopAnimate = !this.stopAnimate;
                console.log('play');
            } else {
                this.playIndex = null;
                // this.stopAnimate = true;
                elAudio.pause();
                console.log('pause');
            }
            elAudio.onended = () => {
                console.log('stop', elAudio);
                // this.stopAnimate = true; // 播放结束清除语音播放动画
                this.playIndex = null;
            }
        },
        audioCanplay(e, index) {
            /* console.log('test audio.',this.$refs.audio[0].duration);
            const audioRecord = this.$refs.audio;
            this.ADArr = audioRecord.map(function(item, index) {
                console.log(index);
                var tempArr = [];
                return tempArr[index] = Math.floor(item.duration);
            }) */
            // console.log('--------------')
            console.log('e, index', e, index);
            // console.log(this.msgInfoData.msg);
            this.msgInfoData.msg[index].length = Math.floor(e.target.duration); /* 将音频 */
            // this.audioDuration = Math.floor(audioRecord[0].duration);
        },

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
