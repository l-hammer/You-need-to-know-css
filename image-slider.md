
# Image contrast widget

?> Background：:point_right: [resize](https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize), HTML < [input[type=range]](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) >

<vuep template="#image-slider"></vuep>

<script v-pre type="text/x-template" id="image-slider">
<style>
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  main h5 {
    margin: 30px 30px 15px;
  }
  main div.image-slider {
    position: relative;
  }
  main div.image-slider img {
    display: block;
    user-select: none;
    max-width: initial;
  }
  main div.image-slider > img {
    width: 100%;
  }
  main div.image-slider > div > img {
    height: 100%;
  }
  main div.image-slider > div {
    width: 50%;
    position: absolute;
    top: 0; left: 0; bottom: 0;
    overflow: hidden;
  }
  section:nth-of-type(1) div.image-slider > div {
    max-width: 100%;
    resize: horizontal;
  }
  section:nth-of-type(1) div.image-slider > div::before {
    content: "";
    width: 12px; height: 12px;
    position: absolute;
    right: 0px; bottom: 0px;
    padding: 5px;
    cursor: ew-resize;
    background: linear-gradient(-45deg, #E8E2D6 50%, transparent 0);
    background-clip: content-box;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, .8));
  }
  section:nth-of-type(2) div.image-slider input {
    width: 100%;
    position: absolute;
    left: 0; bottom: 10px;
    margin: 0;
    cursor: ew-resize;
  }
  input[type=range]::-webkit-slider-thumb {
    appearance: none;
    margin-top: -3px;
    width: 10px; height: 10px;
    background-color: #E8E2D6;
    border: none;
    border-radius: 100%;
    mix-blend-mode: luminosity;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.18);
  }
  input[type=range]::-webkit-slider-runnable-track {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    width: 100%; height: 6px;
    cursor: pointer;
    border-radius: 2px;
    border: none;
    background-color: #E8E2D6;
  }
</style>
<template>
  <main ref="main">
    <section>
      <h5>1️⃣ resize solution</h5>
      <div class="image-slider">
        <div>
          <img src="./static/south-china-sea2015.jpg" alt="Before" />
        </div>
        <img src="./static/south-china-sea2006.jpg" alt="After" />
      </div>
    </section>
    <section>
      <h5>2️⃣ Range-input control solution</h5>
      <div ref="slider" class="image-slider range">
        <img ref="sliderImg" src="./static/south-china-sea2015.jpg" alt="Before" />
        <img src="./static/south-china-sea2006.jpg" alt="After" />
      </div>
    </section>
  </main>
</template>
<script>
  export default {
    mounted() {
      let div = document.createElement('div');
      let range = document.createElement('input'); 
      const { slider, sliderImg } = this.$refs;
      slider.insertBefore(div, sliderImg);
      div.appendChild(sliderImg);
      range.type = 'range';
      range.oninput = ({ target: { value } }) => {
          div.style.width = `${value}%`;
      };
      slider.appendChild(range);
    }
  }
</script>
</script>

> Greate user experience should always go first as a habit ~

### Browser Support 

<iframe
  width="100%"
  height="449px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-resize&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=input-range&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
