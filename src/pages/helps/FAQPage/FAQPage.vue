<template>
    <div>
        <el-breadcrumb>
            <el-breadcrumb-item>帮助</el-breadcrumb-item>
            <el-breadcrumb-item>FAQ</el-breadcrumb-item>
        </el-breadcrumb>
        <el-divider></el-divider>

        <div class="body">
            <h1>1. 什么是目标函数？</h1>
            <p>一套圣遗物能够产生一个面板，目标函数就是将面板、武器、角色等各种配置，映射到一个值</p>
            <p>不同的目标函数是本站的核心特性，角色之间有很大差别，配装也完全不能一概而论，因此，本站提供多种多样的配装目标，也就是目标函数。例如，你可以选择胡桃的E技能最大期望输出，因为胡桃有生命值转化攻击力的特性，也可以选择诺艾尔的Q技能最大输出，因为诺艾尔有防御转化攻击特性</p>
        
            <h1>2. 配装结果的最大值到底是啥？</h1>
            <p>目标函数的本质是将武器、角色、面板映射到一个值，通过枚举所有的圣遗物组合，选出的那个最大值，就是最后体现的最大值啦</p>
            <p>但是，最大值并不是期望输出，因为只是用于比大小，因此很多不影响配装结果的常数并没有算入，例如怪物抗性等，所以，同一个目标函数之间的最大值可以相互比较，不同目标函数之间的最大值不可比较</p>
        
            <h1>3. 类似平雷4这样的特殊效果到底有没有计入？</h1>
            <p>某些目标函数计入了，例如“刻晴-斩尽牛杂”，某些无关紧要的角色与函数没有计入</p>

            <h1>4. 类似匣里龙吟这样的被动到底有没有计入？</h1>
            <p>同上</p>

            <h1>5. 为什么面板与游戏里的真实面板有出入？</h1>
            <p>因为游戏中所有显示的数值并不是精确值（是四舍五入后的），因此有小偏差是正常现象，若有大偏差，则可能是bug，如果可以，请反馈</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FAQPage",
}
</script>

<style scoped>
.body {
    padding: 0 150px;
}
</style>