
# Smooth

?> Background：:point_right: [animation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation)

<vuep template="#single-projection"></vuep>

<script v-pre type="text/x-template" id="single-projection">
<style>
  main {
    width: 100%; height: 329px;
    display: flex;
    background: url('./static/full-fire-cloud.jpg') repeat-x 0 center/auto 100%;
    animation: smooth 10s linear infinite;
    animation-play-state: running;
  }
  /* main:hover, main:focus {
    animation-play-state: running;
  } */
  @keyframes smooth {
    to {
      background-position: 1970px center;
    }
  }     
</style>
<template>
  <main class="main"></main>
</template>
<script>
</script>
</script>

!> The picture above is a combination of two symmetrical images. it is not so perfect. In development, it is more perfect to use only one picture that can be seamlessly docked (similar to 360° panorama).

### Browser Support

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-animation&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
