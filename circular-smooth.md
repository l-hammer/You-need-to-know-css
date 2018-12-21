
# Circular smooth

?> Background：:point_right: [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation), [transition](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition), [transform](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform), [animation-delay](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay)

> "Transform-origin is just a syntactic sugar. In fact, you can always use translate() instead." [——James Anderson](/Aryeh Gregor)

<vuep template="#circular-smooth_tlp"></vuep>

<script v-pre type="text/x-template" id="circular-smooth_tlp">
<style>
  main {
    width: 100%; height: 529px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .path {
    width: 300px; height: 300px;
    border-radius: 50%;
    margin: 100px auto;
    position: relative;
    display: flex;
    border: 1px solid #b4a078;
  }
  .logo {
    width: 52px;
    margin: auto;
    background: #FFF;
  }
  .avatar {
    width: 50px;
    position: absolute;
    top: 124px; left: 124px;
    animation: circular-smooth-spin 7.5s infinite linear;
    animation-play-state: running;
  }
  .avatar > span {
    font-weight: 500;
    position: absolute;
    white-space: nowrap;
    top: -50%; left: 50%;
    padding: 3px 12px;
    opacity: 0;
    transform: scale(0);
    transition: opacity, transform .8s;
    transform-origin: 0 bottom;
  }
  .avatar > img {
    width: inherit;
    border-radius: 50%;
    overflow: hidden;
  }
  .path:hover .avatar {
    animation-play-state: paused;
  }
  
  .path:hover .avatar > span {
    opacity: 1;
    transform: scale(1);
    transition: opacity, transform .8s;
  }
  .avatar:nth-of-type(2){
    animation-delay: -1.5s;
  }

  .avatar:nth-of-type(3){
    animation-delay: -3s;
  }

  .avatar:nth-of-type(4){
    animation-delay: -4.5s;
  }

  .avatar:nth-of-type(5){
    animation-delay: -6s;
  }
  @keyframes circular-smooth-spin {
    from {
      transform: rotate(0turn) translateY(-124px) rotate(1turn)
    }
    to {
      opacity: 1;
      transform: rotate(1turn) translateY(-124px) rotate(0turn)
    }
  }
</style>
<template>
  <main class="main">
    <div class="path">
      <img class="logo" src="./static/vue-logo.png" />
      <div class="avatar">
        <span>Evan You</span>
        <img src="./static/Evan.jpeg"/>
      </div>
      <div class="avatar">
        <span>Damian Dulisz</span>
        <img src="./static/Dulisz.jpeg"/>
      </div>
      <div class="avatar">
        <span>defcc</span>
        <img src="./static/defcc.png"/>
      </div>
      <div class="avatar">
        <span>Edd Yerburgh</span>
        <img src="./static/Yerburgh.png"/>
      </div>
      <div class="avatar">
        <span>Sarah Drasner</span>
        <img src="./static/Drasner.jpeg"/>
      </div>
    </div>
  </main>
</template>
<script>
</script>
</script>

!> If any questions, please keep following the continued explanation.

### Browser Support

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-animation&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="458px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=transforms2d&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="458px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-transitions&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
