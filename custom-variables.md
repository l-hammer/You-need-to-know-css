
# ⚗️ Custom variables

?> Background：:point_right: [CSS_variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)，[var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var)

CSS variables are similar to the variables we defined in SCSS and LESS. The difference is that CSS supports for inserting the values of CSS variable through JS. Variable's name represented by an identifier that starts with two dashes `--` (e.g. `--main-color: #b4a078`), then use the `var(--main-color)` function to reference it. 

The `var()` function accepts two arguments (e.g. `var(--main-color, gray)`）, the first argument is the name of the custom property to be substituted, the optional second argument to the function serves as a fallback value.  
 
> The following example presents how to adjust the style of elements or even pseudo elements by JS [setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty) 

<vuep template="#custom-variables"></vuep>

<script v-pre type="text/x-template" id="custom-variables">
<style>
  /* global custom-variables */
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

!> To set specific values, please revise the value of `INITIAL_COLOR` simply in the example. **Only support 6-digit hexadecimal color format**

### Browser Support

<iframe
  width="100%"
  height="436px"
  frameborder="0"
  src="https://caniuse.bitsofco.de/embed/index.html?feat=css-variables&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
