<template>
    <div id="aboutCon">
        <h2>About</h2>
        <div id="tab">
            <div class="tab-title">
                <a href="javascript:;" @click="activeId = 0" :class="{'active': activeId === 0}">html</a>
                <a href="javascript:;" @click="activeId = 1" :class="{'active': activeId === 1}">css</a>
                <a href="javascript:;" @click="activeId = 2" :class="{'active': activeId === 2}">js</a>
                <a href="javascript:;" @click="activeId = 3" :class="{'active': activeId === 3}">vue</a>
            </div>
            <div class="tab-con">
                <div v-show="activeId === 0">html</div>
                <div v-show="activeId === 1">css</div>
                <div v-show="activeId === 2">js</div>
                <div v-show="activeId === 3">vue</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            activeId: 0
        }
    }
}
</script>
