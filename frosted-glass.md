
# Frosted glass effect

?> Background：:point_right: [hsla/rgba](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)

<vuep template="#frosted-glass"></vuep>

<script v-pre type="text/x-template" id="frosted-glass">
<style>
  main{
    width: 100%;
    margin: auto;
    padding: 59px 29px;
    border-radius: .3em;
    text-shadow: 0 1px 1px hsla(0, 0%, 100%, .3); 
    box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3) inset, 0 .3em 1em rgba(0, 0, 0, 0.12);
    font: 150%/1.6 Baskerville, Palatino, serif;
  }
  main, main > div::before {
    background: url("./static/city-night.jpg") fixed 0 / cover;
  }
  main > div::before{
    content: "";
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0; 
    z-index: -1; 
    filter: blur(10px);
    margin: -30px;
  }
  main > div{
    font-style: italic;
    color: #000;
    padding: 30px;
    hyphens: auto;
    background: hsla(0,0%,100%,.5);
    overflow: hidden;
    position: relative;
  }
  main > div cite{
    font-style: normal;
  }
  main footer {
    text-align: right;
  }
</style>
<template>
  <main class="main">
    <div>
      "O God, I could be bounded in a nutshell and count myself a king of infinite space, were it not that I have bad dreams."<br>
      <footer>——
        <cite>William Shakespeare</cite>
      </footer>
    </div>
  </main>
</template>
<script>  
</script>
</script>

### Browser Support

<iframe
  width="100%"
  height="458px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css3-colors&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="458px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-filters&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
