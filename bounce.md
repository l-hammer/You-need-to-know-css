
# Bounce

?> Background：:point_right: [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation), [timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function), [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform)

The falling of ball is a typical Free Fall motion, in the [timing function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/timing-function), `ease`(sharper accelerated speed) is relatively closer to the free-fall motion. Therefore, we use the `ease` as the keyword during the falling process; However, when the ball is bounced, it belongs to the deceleration motion, we need to use the `ease` direction version `cubic-bezier(.1,.25,.1,.25)`(faster deceleration) as the function value of the time function to mimic deceleration. The speed control function is shown below:   

<br/>
<div align="center"><img src="static/cubic-bezier.jpeg" width="100%" align="center"/></div>

------

<vuep template="#bounce_tlp"></vuep>

<script v-pre type="text/x-template" id="bounce_tlp">
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
    /* when the animation is complete, keep the last frame */
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
    <div class="ball" :style="{animationName}"></div>
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

### Browser Support

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
