# Flex layout

?> Background：:point_right: [flex](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex), [flex layout concept](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

The Flex layout is called CSS Flexible Box Layout Module. It is a new page layout solution proposed by W3C. The first version was released in 2009. Up to now, W3C has released 12 versions, [latest version](https://www.w3.org/TR/css-flexbox-1/) was launched in 20171019 and has been supported by all major browsers, so please use it boldly ~

##### Historic version:

> https://www.w3.org/TR/2016/CR-css-flexbox-1-20160526/<br/> > https://www.w3.org/TR/2016/CR-css-flexbox-1-20160301/<br/> > https://www.w3.org/TR/2015/WD-css-flexbox-1-20150514/<br/> > https://www.w3.org/TR/2014/WD-css-flexbox-1-20140925/<br/> > https://www.w3.org/TR/2014/WD-css-flexbox-1-20140325/<br/> > https://www.w3.org/TR/2012/CR-css3-flexbox-20120918/<br/> > https://www.w3.org/TR/2012/WD-css3-flexbox-20120612/<br/> > https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/<br/> > https://www.w3.org/TR/2011/WD-css3-flexbox-20111129/<br/> > https://www.w3.org/TR/2011/WD-css3-flexbox-20110322/<br/> > https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/

### Flexbox principle demonstration

[A Visual Guide to CSS3 Flexbox Properties](https://lhammer.cn/Flexbox/ ":include :type=iframe width=100% height=791px")

> **Thank：**The above demo forks from [xluos](https://github.com/xluos)的[Flexbox Demo Station](https://xluos.github.io/demo/flexbox/)~

The Flex layout consists of two parts: the container `flex container` and the item `flex item`. The container has two axes by default: the horizontal spindle `main axis` and the vertical cross axis `cross axis`. The iterm defaults to the main axis.
The Flex property consists of two parts: the container property and the project property. The container can be set to: `flex-direction`, `flex-wrap`, `flex-flow`, `justify-content`, `align-items`, `align-content` 6 attributes, six attributes can also be set on the item: `order`, `flex-grow`, `flex-shrink`, `flex-basis`, `flex`, `align-self`. An example is as follows:

### Container properties

---

#### flex-direction property

**function：** determines the direction of the main axis.

```css
flex-direction: row | row-reverse | column | column-reverse;
```

> - row: The default value, the main axis is horizontal, indicating from left to right
> - row-reverse: The main axis is horizontal, indicating from right to left
> - column: The main axis is in the vertical direction, arranged from top to bottom
> - column-reverse: The spindle is in the vertical direction, arranged from bottom to top

<vuep template="#flexDirection"></vuep>

<script v-pre type="text/x-template" id="flexDirection">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
    flex-direction: row;
  }
  .item {
    width: 20%; height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
  }
</style>
<template>
  <main>
    <span class="radio-wrap" v-for="radio in radios">
      <input 
        type="radio"
        :id="radio.id"
        :value="radio.value"
        v-model="flexDirection">
      <label :for="radio.id" @click="handleSelected(radio.id)">
        {{ radio.value }}
      </label>
    </span>
    <div class="container" :style="{ flexDirection }">
      <span
        class="item"
        v-for="$ in elements"
        :style="{ opacity: 1 - $ / 10 }">
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        elements: Array.from({ length: 5 }).map((v, i) => i + 1),
        radios: [
          { id: 'row', value: 'row' },
          { id: 'row-reverse', value: 'row-reverse' },
          { id: 'column', value: 'column' },
          { id: 'column-reverse', value: 'column-reverse' },
        ],
        flexDirection: 'row',
      }
    },
    methods: {
      handleSelected(dir) {
        this.flexDirection = dir;
      }
    }
  }
</script>
</script>

#### flex-wrap property

**function:** Decide how the item will wrap when it is not aligned on one axis.

```css
flex-wrap: nowrap | wrap | wrap-reverse;
```

> - nowrap: default value，not wrap
> - wrap: wrap, the first line is above
> - row-reverse: wrap, the first line is below

<vuep template="#flexWrap"></vuep>

<script v-pre type="text/x-template" id="flexWrap">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
    flex-wrap: nowrap;
  }
  .item {
    width: 20%; height: 29px;
    max-width: 155px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
  }
</style>
<template>
  <main>
    <span class="radio-wrap" v-for="radio in radios">
      <input
        type="radio"
        :id="radio.id"
        :value="radio.value"
        v-model="flexWrap">
      <label :for="radio.id" @click="handleSelected(radio.id)">
        {{ radio.value }}
      </label>
    </span>
    <div class="container" :style="{ flexWrap }">
      <span
        class="item"
        v-for="$ in elements"
        :style="{ opacity: 1 - $ / 10 }">
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        elements: Array.from({ length: 6 }).map((v, i) => i + 1),
        radios: [
          { id: 'nowrap', value: 'nowrap' },
          { id: 'wrap', value: 'wrap' },
          { id: 'wrap-reverse', value: 'wrap-reverse' },
        ],
        flexWrap: 'nowrap',
      }
    },
    methods: {
      handleSelected(dir) {
        this.flexWrap = dir;
      }
    }
  }
</script>
</script>

#### flex-flow property

**function:** The abbreviation of `flex-direction` and `flex-wrap` properties, The default value is row nowrap

```css
flex-flow: <flex-direction> || <flex-wrap>;
```

> - row nowrap: The default value, the main axis is horizontal, not wrap
> - `<flex-direction>`: see [flex-direction](/flexbox-layout?id=flex-direction%E5%B1%9E%E6%80%A7)
> - `<flex-wrap>`: see [flex-wrap](/flexbox-layout?id=flex-wrap%E5%B1%9E%E6%80%A7)

#### justify-content property

**function:** Define the alignment of the project on the spindle.

```css
justify-content: flex-start | flex-end | center | space-between | space-round |
  space-evenly;
```

> - flex-start: Default value, left aligned
> - flex-end: Right aligned
> - center: Centered
> - space-evenly: The interval between each item and at both ends is equal
> - space-around: Equal spacing on both sides of each item
> - space-between: Aligned ends, the items are equally spaced

<vuep template="#justifyContent"></vuep>

<script v-pre type="text/x-template" id="justifyContent">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
    justify-content: flex-start;
  }
  .item {
    width: 20%; height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
  }
</style>
<template>
  <main>
    <span class="radio-wrap" v-for="radio in radios">
      <input
        type="radio" 
        :id="'justifyContent' + radio.id" 
        :value="radio.value" 
        v-model="justifyContent">
      <label :for="'justifyContent' + radio.id" @click="handleSelected(radio.id)">
        {{ radio.value }}
      </label>
    </span>
    <div class="container" :style="{ justifyContent }">
      <span
        class="item"
        v-for="$ in elements"
        :style="{ opacity: 1 - $ / 10 }">
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: Array.from({ length: 3 }).map((v, i) => i + 1),
        radios: [
          { id: 'flex-start', value: 'flex-start' },
          { id: 'flex-end', value: 'flex-end' },
          { id: 'center', value: 'center' },
          { id: 'space-evenly', value: 'space-evenly' },
          { id: 'space-around', value: 'space-around' },
          { id: 'space-between', value: 'space-between' },
        ],
        justifyContent: 'flex-start',
      }
    },
    methods: {
      handleSelected(dir) {
        this.justifyContent = dir;
      }
    }
  }
</script>
</script>

#### align-items property

**function:** Defines the alignment of the item on the cross axis (the default direction is from top to bottom).

```css
align-items: flex-start | flex-end | center | baseline | stretch;
```

> - flex-start: Starting point alignment of the cross axis
> - flex-end: End point alignment of the cross axis
> - center: center alignment of the cross axis
> - baseline: Baseline alignment of the first line of text in the project
> - stretch: The default value, when the item is not set to a fixed height, will fill the entire container

<vuep template="#alignItems"></vuep>

<script v-pre type="text/x-template" id="alignItems">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
    align-items: stretch;
  }
  .item {
    width: 20%; height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
  }
</style>
<template>
  <main>
    <span class="radio-wrap" v-for="radio in radios">
      <input
        type="radio"
        :id="'alignItems' + radio.id"
        :value="radio.value"
        v-model="alignItems">
      <label :for="'alignItems' + radio.id" @click="handleSelected(radio.id)">
        {{ radio.value }}
      </label>
    </span>
    <div class="container" :style="{ alignItems }">
      <span
        class="item" 
        v-for="$ in elements" 
        :style="{ opacity: 1 - $ / 10, height: 29 * ($ * .6 + .4) + 'px' }">
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: Array.from({ length: 5 }).map((v, i) => i + 1),
        radios: [
          { id: 'flex-start', value: 'flex-start' },
          { id: 'flex-end', value: 'flex-end' },
          { id: 'center', value: 'center' },
          { id: 'baseline', value: 'baseline' },
          { id: 'stretch', value: 'stretch' },
        ],
        alignItems: 'stretch',
      }
    },
    methods: {
      handleSelected(dir) {
        this.alignItems = dir;
      }
    }
  }
</script>
</script>

#### align-content property

**function:** Defines the alignment of multiple axes. This property does not work if the project has only one axis.

```css
align-content: flex-start | flex-end | center | space-between | space-around |
  stretch;
```

> - flex-start: Starting point alignment of the cross axis
> - flex-end: End point alignment of the cross axis
> - center: Center alignment of the cross axis
> - space-between: Aligned with the ends of the cross shaft, the average spacing between the axes, etc.
> - space-around: The spacing between the sides of each axis is equal
> - stretch：Default, the axis fills the entire cross axis

<vuep template="#alignContent"></vuep>

<script v-pre type="text/x-template" id="alignContent">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    height: 399px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
  }
  .item {
    width: 20%; height: 29px;
    max-width: 155px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
  }
</style>
<template>
  <main>
    <span class="radio-wrap" v-for="radio in radios">
      <input
        type="radio" 
        :id="'alignContent' + radio.id" 
        :value="radio.value" 
        v-model="alignContent">
      <label :for="'alignContent' + radio.id" @click="handleSelected(radio.id)">
        {{ radio.value }}
      </label>
    </span>
    <div class="container" :style="{ alignContent }">
      <span
        class="item"
        v-for="$ in elements"
        :style="{ opacity: 1 - ($ * .6) / 10 }">
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: Array.from({ length: 15 }).map((v, i) => i + 1),
        radios: [
          { id: 'flex-start', value: 'flex-start' },
          { id: 'flex-end', value: 'flex-end' },
          { id: 'center', value: 'center' },
          { id: 'space-between', value: 'space-between' },
          { id: 'space-around', value: 'space-around' },
          { id: 'stretch', value: 'stretch' },
        ],
        alignContent: 'stretch',
      }
    },
    methods: {
      handleSelected(dir) {
        this.alignContent = dir;
      }
    }
  }
</script>
</script>

### Iterm Properties

---

#### order property

**function:** Define the order in which the items are arranged.

```css
order: <number>;
```

> - `<number>` : The value is an integer. The smaller the value, the higher the ranking. The default is 0.

<vuep template="#order"></vuep>

<script v-pre type="text/x-template" id="order">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
  }
  .item {
    width: 20%; height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
    color: #f4f0ea;
    text-align: center;
    padding-top: 4px;
  }
</style>
<template>
  <main>
    <a @click="shuffle">👉🏿🔀: {{ res }}</a>
    <div class="container">
      <span
        class="item"
        v-for="$ in elements" 
        :style="{ order: $.order, opacity: 1 - $.id / 10 }">
        order: {{ $.order }}
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        elements: [
          { id: 1, order: 1 },
          { id: 2, order: 2 },
          { id: 3, order: 3 },
          { id: 4, order: 4 },
          { id: 5, order: 5 },
        ],
        res: 0,
      }
    },
    methods: {
      shuffle() {
        const i = Math.floor(Math.random() * 5);
        this.res = this.elements[i].order = Math.floor(Math.random() * 29);
      }
    }
  }
</script>
</script>

#### flex-grow property

**function:** Define the scale of the project and allocate space to the project according to the ratio.

```css
flex-grow: <number>;
```

> - `<number>` : The value is an integer. The larger the value, the larger the space occupied by the project. The default is 0.

<vuep template="#flexGrow"></vuep>

<script v-pre type="text/x-template" id="flexGrow">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
  }
  .item {
    height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
    color: #f4f0ea;
    text-align: center;
    padding-top: 4px;
  }
</style>
<template>
  <main>
    <a @click="shuffle">👉🏿🔀: {{ res }}</a>
    <div class="container">
      <span
        class="item"
        v-for="$ in elements"
        :style="{ flexGrow: $.flexGrow, opacity: 1 - $.id / 10 }">
        flexGrow: {{ $.flexGrow }}
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data() {
      return {
        elements: [
          { id: 1, flexGrow: 1 },
          { id: 2, flexGrow: 1 },
          { id: 3, flexGrow: 1 },
          { id: 4, flexGrow: 1 },
          { id: 5, flexGrow: 1 },
        ],
        res: 1,
      }
    },
    methods: {
      shuffle() {
        const i = Math.floor(Math.random() * 5);
        this.res = this.elements[i].flexGrow = Math.floor(Math.random() * 29);
      }
    }
  }
</script>
</script>

#### flex-shrink property

**function:** Define the contraction ratio of the project and allocate space to the project according to the ratio.

```css
flex-shrink: <number>;
```

> - `<number>` : The value is an integer. The larger the value, the smaller the space occupied by the item. The default is 1.

<vuep template="#flexShrink"></vuep>

<script v-pre type="text/x-template" id="flexShrink">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
  }
  .item {
    width: 50%; height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
    color: #f4f0ea;
    text-align: center;
    padding-top: 4px;
  }
</style>
<template>
  <main>
    <a @click="shuffle">👉🏿🔀: {{ res }}</a>
    <div class="container">
      <span
        class="item"
        v-for="$ in elements" 
        :style="{ flexShrink: $.flexShrink, opacity: 1 - $.id / 10 }">
        flexShrink: {{ $.flexShrink }}
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: [
          { id: 1, flexShrink: 0 },
          { id: 2, flexShrink: 1 },
          { id: 3, flexShrink: 2 },
        ],
        res: 1,
      }
    },
    methods: {
      shuffle() {
        const i = Math.floor(Math.random() * 3);
        this.res = this.elements[i].flexShrink = Math.floor(Math.random() * 4);
      }
    }
  }
</script>
</script>

#### flex-basis property

**function:** Defines the spindle space occupied by the project before allocating excess space. Based on this property, the browser calculates whether the spindle has extra space.

```css
flex-basis: <length> | auto;
```

> - `<length>` : The default is auto, which is the original size of the project; you can also set the same value as the width or height properties (such as 329px), the project will occupy a fixed space.

<vuep template="#flexBasis"></vuep>

<script v-pre type="text/x-template" id="flexBasis">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    display: flex;
  }
  .item {
    width: 30%; height: 29px;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
    color: #f4f0ea;
    text-align: center;
    padding-top: 4px;
  }
</style>
<template>
  <main>
    <a @click="shuffle">👉🏿🔀: {{ res }}</a>
    <div class="container">
      <span
        class="item"
        v-for="$ in elements" 
        :style="{ flexBasis: $.flexBasis + 'px', opacity: 1 - $.id / 10 }">
        flexBasis: {{ $.flexBasis }}
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: [
          { id: 1, flexBasis: 'auto' },
          { id: 2, flexBasis: 'auto' },
          { id: 3, flexBasis: 'auto' },
        ],
        res: 1,
      }
    },
    methods: {
      shuffle() {
        const i = Math.floor(Math.random() * 3);
        this.res = this.elements[i].flexBasis = 129 + Math.floor(Math.random() * 300);
      }
    }
  }
</script>
</script>

#### flex property :thumbsup:

**function:** The abbreviation of the `flex-grow`,`flex-shrink` and `flex-basis` properties. The later two properties are optional.

```css
flex: none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
```

> - `0 1 auto`: default value, no scaling, proportional shrink if container space is insufficient
> - `1 1 auto`: Corresponding to the keyword `auto`, if the container space is redundant, the extra space is allocated proportionally; if the container space is insufficient, the scale is shrinking.
> - `0 0 auto`: Corresponding to the keyword `none`, allocate space by the original size of the project

#### align-self property

**function:** Define the alignment of individual items to override the align-items property.

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

> - auto: The default value, which inherits the `align-items` attribute of the parent element. If there is no parent element, it is equivalent to the stretch.
> - flex-start: Starting point alignment of the cross axis
> - flex-end: End point alignment of the cross axis
> - center: Center point alignment of the cross axis
> - baseline: Baseline alignment of the first line of text in the item
> - stretch: If the fixed height is not set, it will fill the entire container

<vuep template="#alignSelf"></vuep>

<script v-pre type="text/x-template" id="alignSelf">
<style>
  main {
    width: 100%;
    padding: 52px 17px 52px 29px;
  }
  .container {
    height: 129px;
    display: flex;
  }
  .item {
    width: 20%; min-height: 29px;
    text-align: center;
    background: #b4a078;
    border-radius: 5px;
    margin: 12px;
    margin-left: 0;
    color: #f4f0ea;
  }
</style>
<template>
  <main>
    <span class="radio-wrap" v-for="radio in radios">
      <input
        type="radio" 
        :id="'alignSelf' + radio.id" 
        :value="radio.value" 
        v-model="alignSelf">
      <label :for="'alignSelf' + radio.id" @click="handleSelected(radio.id)">
        {{radio.value}}
      </label>
    </span>
    <div class="container">
      <span
        class="item"
        v-for="$ in elements" 
        :style="{ 
          alignSelf: alignSelf,
          opacity: 1 - $ / 10,
          fontSize: 15 + 12 * $ + 'px'
        }"
        >{{$}}
      </span>
    </div>
  </main>
</template>
<script>
  export default {
    data () {
      return {
        elements: [3, 1, 5, 4, 2],
        radios: [
          { id: 'auto', value: 'auto' },
          { id: 'flex-start', value: 'flex-start' },
          { id: 'flex-end', value: 'flex-end' },
          { id: 'center', value: 'center' },
          { id: 'baseline', value: 'baseline' },
          { id: 'stretch', value: 'stretch' },
        ],
        alignSelf: 'auto',
      }
    },
    methods: {
      handleSelected(val) {
        this.alignSelf = val;
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
  src="https://caniuse.bitsofco.de/embed/index.html?feat=flexbox&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false">
</iframe>
