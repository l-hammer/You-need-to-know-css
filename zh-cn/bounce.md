
# 弹跳效果

?> 背景知识：:point_right: [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation), [timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function), [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

小球下落过程属于自由落体运动，在时间函数[timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function)中,`ease`（更快的加速度）相对更接近于自由落体运动，所以下落过程我们选用`ease`作为时间函数的关键值；当小球被弹起时属于减速运动，我们需用使用`ease`的方向版本`cubic-bezier(.1,.25,.1,.25)`（更快的减速度）作为时间函数的函数值来模仿减速运动。调速函数如下图所示：

<br/>
<div align="center"><img src="static/cubic-bezier.jpeg" width="100%" align="center"/></div>

------

<vuep template="#bounce"></vuep>

<script v-pre type="text/x-template" id="bounce">
<style>
  main{
    width: 100%; height: 584px;
    padding: 52px 39px;
    background: #0c1a39 url('./static/starry-sky.jpg') no-repeat center bottom / 100% 489.5px;
  }
  .ball {
    width: 0;
    margin: auto;
    padding: 20px;
    border-radius: 50%;
    background: #b4a078 radial-gradient(at 30% 30%, #f7f5f1, #b4a078);
    /* 当动画完成后，保持最后一帧 */
    animation: bounce 2s cubic-bezier(.1,.25,1,.25) forwards;
  }
  @keyframes bounce {
    40%,
    60%,
    80%,
    to {
        transform: translateY(380px);
        animation-timing-function: ease-in;
    }
    50% {
        transform: translateY(260px);
    }
    70% {
        transform: translateY(300px);
    }
    90% {
        transform: translateY(360px);
    }
  }
</style>
<template>
  <main>
    <div class="ball" :style="{ animationName }"></div>
    <a class="btn" @click="reset">🔄</a>
    <a class="btn" @click="play">▶️</a>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        animationName: 'bounce',
      }
    },
    methods: {
      reset() {
        this.animationName = 'none';
      },
      play() {
        this.animationName = 'bounce';
      }
    }
  }
</script>
</script>

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-animation&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="432px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-transitions&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
