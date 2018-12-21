
# Double wing layout

The requirements of this layout are the same as [Holy grail layout](https://lhammer.cn/You-need-to-know-css/#/holy-grail-layout) : three-column with two sides are equally wide and the adaptive middle part. Soucring from Taobao UED. 

<vuep template="#double-wing-layout_tlp"></vuep>

<script v-pre type="text/x-template" id="double-wing-layout_tlp">
<style>
  main {
    width: 100%;
    padding: 39px 29px;
    font-size: 12px;
  }
  section {
    box-shadow: 0 0 0 1px #eee;
  }
  section::after {
    content: '';
    display: block;
    clear: both;
  }
  section > div {
    height: 229px;
    line-height: 1.5em;
    text-align: center;
    float: left;
    color: white;
  }
  section .left, section .right {
    width: 119px;
    padding-top: 29px;
    background: #b4a078;
  }
  section .left {
    margin-left: -100%;
  }
  section .center {
    width: 100%;
    text-align: justify;
    hyphens: auto;
  }
  section .center-inner {
    height: 100%;
    margin: 0 129px;
    padding: 29px 12px;
    background: #b4a078;
  }
  section .right {
    margin-left: -119px;
  }
  /* input range */
  input[type="range"] {
    width: 100%;
    cursor: ew-resize;
  }
</style>
<template>
  <main class="main">
    <input ref="range" type="range" value="100">
    <section :style="{ width }">
      <div class="center">
        <div class="center-inner">A paragraph of filler text. La la la de dah de dah de dah de la.</div>
      </div>
      <div class="left">left</div>
      <div class="right">right</div>
    </section>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        width: "100%"
      }
    },
    mounted() {
      this.$refs.range.oninput = ({ target: { value } }) => {
        this.width = `${60 + value * .4}%`;
      }
    }
  }
</script>
</script>

### The differences between Holy-grial double-wing layout

The solution for solving the problem between the Holy Grail layout and the double-wing layout is the same in the first half, that is, all three `float` floats, but the left and right columns plus the negative `margin` are arranged side by side with the middle column `div` to form a three-column layout.

The difference lies in the scheme that solve the problem of "the middle column div content". The Holy grail layout, in order to prevent the middle `div` content from being occluded, it sets the `div` in the middle to the left and right `padding-left` and `padding-right`, and for the left and right `div`s are relative layout position: `relative` and respectively match the , so that it won't obstruct the middle `div` after moving `right` and `left` properties .

The double-wing layout, in order to prevent the middle `div` content from being occluded, directly creates a sub-div inside the middle `div` for placing content, and uses `margin-left` and `margin-right` to set a position for the left and right `div`s in the sub-div. One more div, less than roughly four css attributes (the two properties of the `padding-left` and `padding-right` for the middle `div` of the holy grial layout, plus the left and right `div`s with relative layout position: relative and corresponding right and left total of 4 attributes, so its 6 in total; While the double-wing layout sub-div uses total of two attributes : `margin-left` and `margin-right`, 6-2=4). Personaly speaking, double-wing layout is more direct and concise than the holy-grail layout.

?> Author：Yanqing Lv<br>
Link：https://www.zhihu.com/question/21504052/answer/50053054<br>
Source：zhihu<br>
Copyright is owned by the author. For commercial reprint, please contact the author for authorization. For non-commercial reprint, please indicate the source.
