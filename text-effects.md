
# Text effects

?> Background：:point_right: [text-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-shadow), [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

<vuep template="#text-effects_tlp"></vuep>

<script v-pre type="text/x-template" id="text-effects_tlp">
<style>
  main {
    width: 100%;
    font: 180%/1.5 Baskerville, Palatino, serif;
  }
  main > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  main > div > h5 {
    width: 229px;
  }
  main > div > p {
    padding: 18px 28px;
    text-align: justify; 
    hyphens: auto;

  }
  main > div:nth-of-type(1) > p {
    background: hsl(40, 28.57% , 58.82%);
    color: hsl(40, 28.57% , 28.82%);
    text-shadow: 0 .03em .03em hsla(0,0%,100%,.8);
  }
  main > div:nth-of-type(2) > p {
    background: hsl(40, 28.57% , 28.82%);
    color: hsl(40, 28.57% , 58.82%);
    text-shadow: 0 .03em .03em black;
  }
  main > div:nth-of-type(3) > p {
    background: #b4a078;
    color: white;
    /* text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black; */
    text-shadow:  0 0 2px hsl(40, 28.57% , 28.82%), 
                  0 0 2px hsl(40, 28.57% , 28.82%), 
                  0 0 2px hsl(40, 28.57% , 28.82%), 
                  0 0 2px hsl(40, 28.57% , 28.82%), 
                  0 0 2px hsl(40, 28.57% , 28.82%),
                  0 0 2px hsl(40, 28.57% , 28.82%), 
                  0 0 2px hsl(40, 28.57% , 28.82%), 
                  0 0 2px hsl(40, 28.57% , 28.82%),  
                  0 0 2px hsl(40, 28.57% , 28.82%);
  }
  main > div:nth-of-type(4) > p {
    background: #b4a078;
    color: white;
  } 
  main > div:nth-of-type(4) > p text{
    fill: currentColor;
  }
  main > div:nth-of-type(4) > p svg{
    overflow: visible;
  }
  main > div:nth-of-type(4) > p use{
    stroke: hsl(40, 28.57% , 28.82%);
    stroke-width: 3;
    stroke-linejoin: round;
  }
  main > div:nth-of-type(5) > p,
  main > div:nth-of-type(6) > p,
  main > div:nth-of-type(7) > p {
    background: hsl(40, 28.57% , 28.82%);
  }
  main > div:nth-of-type(5) > p a, 
  main > div:nth-of-type(6) > p a, 
  main > div:nth-of-type(7) > p a {
    background: hsl(40, 28.57% , 28.82%);
    color: white;
    transition: .5s;
    font-weight: 500;
    text-shadow: 0 0 .1em, 0 0 .3em;
  }
  main > div:nth-of-type(5) > p a:hover{
    animation: .8s text-blink-effect infinite alternate;
  }
  main > div:nth-of-type(6) > p a:hover{
    color: transparent;
    text-shadow: 0 0 .1em white, 0 0 .3em white;
  }
  main > div:nth-of-type(7) > p a:hover{
    filter: blur(2px);
  }
  main > div:nth-of-type(8) > p {
    background: #b4a078;
    color: white;
    text-shadow:  0 1px hsl(0, 0%, 90%),
                  0 1px hsl(0, 0%, 90%), 
                  0 2px 4px hsla(0, 0%, 0%,.5); 
  }
  main > div:nth-of-type(9) > p {
    background: #b4a078;
    color: white;
    text-shadow:  1px 1px hsl(40, 28.57% , 28.82%), 2px 2px hsl(40, 28.57% , 28.82%),
                  3px 3px hsl(40, 28.57% , 28.82%), 4px 4px hsl(40, 28.57% , 28.82%);
  }
  @keyframes text-blink-effect {
    50% {
      text-shadow: 0 0 .1em, 0 0 .3em;
    }
    to {
        text-shadow: 0 0 .1em;
    }
  }
</style>
<template>
  <main class="main">
    <div>
      <h5>1️⃣ Dark-color word with light background</h5>
      <p>You-need-to-know-css-tricks</p>
    </div>
    <div>
      <h5>2️⃣ light-color word with dark background</h5>
      <p>You-need-to-know-css-tricks</p>
    </div>
    <div>
      <h5>3️⃣ hollow word:text-shadow</h5>
      <p>You-need-to-know-css-tricks</p>
    </div>
    <div>
      <h5>4️⃣ hollow word-SVG</h5>
      <p>
        <svg width="300px" height="1em">
          <use xlink:href="#css" />
          <text id="css" y="1em">You-need-to-know-css-tricks</text>
        </svg>
      </p>
    </div>
    <div>
      <h5>5️⃣ External illuminating text:text-shadow</h5>
      <p><a>You-need-to-know-css-tricks</a></p>
    </div>
    <div>
      <h5>6️⃣ blur words:text-shadow</h5>
      <p><a>You-need-to-know-css-tricks</a></p>
    </div>
    <div>
      <h5>7️⃣ blur words:filter</h5>
      <p><a>You-need-to-know-css-tricks</a></p>
    </div>
    <div>
      <h5>8️⃣ text bump</h5>
      <p>You-need-to-know-css-tricks</p>
    </div>
    <div>
      <h5>9️⃣ text bump</h5>
      <p>You-need-to-know-css-tricks</p>
    </div>
  </main>
</template>
<script>  
</script>
</script>

!> The blur effect performed by text-shadow cannot be degraded smoothly~

### Browser Support

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gradients&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="436px"></iframe>
