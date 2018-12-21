
# ⚗️ 自定义变量

?> 背景知识：:point_right: [CSS_variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)，[var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var)

CSS变量类似于我们在SCSS、LESS中定义的变量，但前者支持通过JS来控制变量的值，以`--`开头，(e.g. `--main-color: #b4a078`)，通过`var(--main-color)`来引用。`var()`函数接受两个参数（e.g. `var(--main-color, gray)`），第一个参数为自定义属性名，第二个参数用作缺省值。

> 以下示例演示了通过JS [setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) 方法改变CSS变量，从而控制元素甚至伪元素的样式~

<vuep template="#custom-variables"></vuep>

<script v-pre type="text/x-template" id="custom-variables">
<style>
  /* 全局 custom-variables */
  /* :root {
    --r: 51;
    --g: 51;
    --b: 51;
  } */
  main {
    width: 100%;
    padding: 60px 29px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    display: flex;
    align-items: center;
  }
  input {
    padding: 0;
    width: 29px;
    height: 29px;
  }
  div.variables-block {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 29px;
  }
  /* 局部 custom-variables */
  div.variables-block > div {
    --r: 51;
    --g: 51;
    --b: 51;
  }
  div.variables-block > div::after {
    content: "";
    display: inline-block;
    width: 52px;
    height: 52px;
    background: rgb(var(--r), var(--g), var(--b));
  }
</style>
<template>
  <main>
    <label for="color">
      请选择主题色：
      <input
        type="color"
        v-model="value"
        id="color"
      />
    </label>
    <div class="variables-block">
      <div
        v-for="(ele, idx) in colorList"
        :ref="'variable' + idx">
      </div>
    </div>
  </main>
</template>
<script>
  const Color = require('./libs/color.js');
  const INITIAL_COLOR = '#b4a078';
  export default {
    data() {
      return {
        value: INITIAL_COLOR,
      }
    },
    computed: {
      colorList() {
        const mainColor = this.value.length === 7 && this.value || INITIAL_COLOR;
        return this.getColorList(mainColor);
      }
    },
    methods: {
      getColorList(val) {
        const color = Color(val);
        return Array.from({length: 10}).map((v, i) => {
          let rgb = color.mix(Color('white'), i / 10);
          this.$nextTick(() => {
            const style = this.$refs[`variable${i}`][0].style;
            style.setProperty('--r', rgb.red());
            style.setProperty('--g', rgb.green());
            style.setProperty('--b', rgb.blue());
          })
        });
      }
    }
  }
</script>
</script>

!> 如需设置特定的值，直接修改示例中`INITIAL_COLOR`的值即可，**只支持支6位16进制的颜色格式**。

### 浏览器支持

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-variables&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
