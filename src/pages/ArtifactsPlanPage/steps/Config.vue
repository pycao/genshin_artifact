<template>
    <div>
        <h3 class="title">圣遗物套装（计算结果将限定在套装之内）</h3>
        <el-alert
            :closable="false"
            title="某些动态的加成不会考虑，所以对于非常适合某个角色的圣遗物，可以考虑限定套装，例如迪卢克限定魔女4，甘雨限定冰4"
            style="margin-bottom: 16px"
        ></el-alert>
        <div>
            <div class="row">
                <el-radio
                    v-model="value.constraintSet.mode"
                    label="any"
                    class="radio"
                >任意</el-radio>
            </div>
            <div class="row">
                <el-radio v-model="value.constraintSet.mode" label="2" class="radio">2</el-radio>
                <select-artifact-set
                    v-model="value.constraintSet.setName1"
                    :disabled="value.constraintSet.mode !== '2'"
                ></select-artifact-set>
            </div>
            <div class="row">
                <el-radio v-model="value.constraintSet.mode" label="22" class="radio">2+2</el-radio>
                <select-artifact-set
                    v-model="value.constraintSet.setName2"
                    :disabled="value.constraintSet.mode !== '22'"
                ></select-artifact-set>
                <span class="plus">+</span>
                <select-artifact-set
                    v-model="value.constraintSet.setName3"
                    :disabled="value.constraintSet.mode !== '22'"
                ></select-artifact-set>
            </div>
            <div class="row">
                <el-radio v-model="value.constraintSet.mode" label="4" class="radio">4</el-radio>
                <select-artifact-set
                    v-model="value.constraintSet.setName4"
                    :disabled="value.constraintSet.mode !== '4'"
                ></select-artifact-set>
            </div>
        </div>

        <div>
            <h3 class="title">限定主词条</h3>
            <div class="flex-row row">
                <span class="cmt-label fs-14 color-normal">时之沙</span>
                <select-art-main-tag-without-val
                    position="sand"
                    v-model="value.constraintMainTag.sand"
                ></select-art-main-tag-without-val>
            </div>
            <div class="flex-row row">
                <span class="cmt-label fs-14 color-normal">空之杯</span>
                <select-art-main-tag-without-val
                    position="cup"
                    v-model="value.constraintMainTag.cup"
                ></select-art-main-tag-without-val>
            </div>
            <div class="flex-row row">
                <span class="cmt-label fs-14 color-normal">理之冠</span>
                <select-art-main-tag-without-val
                    position="head"
                    v-model="value.constraintMainTag.head"
                ></select-art-main-tag-without-val>
            </div>
        </div>

        <!-- <el-button type="primary" class="confirm-button" @click="handleConfirm">确定</el-button> -->
    </div>
</template>

<script>
import { artifactsData } from "@asset/artifacts";

import SelectArtifactSet from "@c/SelectArtifactSet";
import SelectArtMainTagWithoutVal from '@c/SelectArtMainTagWithoutVal.vue';

let allArtifactsName = Object.values(artifactsData).map(item => {
    return {
        name: item.eng,
        chs: item.chs,
    };
});

export default {
    name: "Config",
    components: {
        SelectArtifactSet,
        SelectArtMainTagWithoutVal,
    },
    created: function () {
        this.allArtifactsName = allArtifactsName;
    },
    props: ["value"],
    methods: {
    }
}
</script>

<style scoped>
.cmt-label {
    width: 110px;
}

.title {
    /* background:rgb(74, 99, 211); */
    padding: 0px 16px;
    display: inline-block;
    /* color: white; */
    border-radius: 3px;
    font-size: 14px;
    border-bottom: 5px solid rgb(74, 99, 211);
    color: #555555;
}

.radio {
    width: 80px;
}

.row {
    margin-bottom: 18px;
}

.plus {
    padding: 0 8px;
    color: #606266;
}

.confirm-button {
    width: 100%;
}
</style>