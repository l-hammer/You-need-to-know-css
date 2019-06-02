
# 常用的 CSS 片段

### CSS 复位

```css
@import 'normalize.css';

html {
  box-sizing: border-box;
}
*:not(input) {
  border: 0;
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
*[hide] {
  display: none;
}
*[disabled] {
  opacity: .5;
  pointer-events: none;
}
```

### 清除浮动

```css
element::after {
  content: "";
  display: block;
  clear: both;
}
```

### 文本截断

```css
element {
  display: inline-block;
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-wrap: normal;
}
```

### 隐藏文字

```css
element {
  font: 0/0 a;
  color: transparent;
  text-indent: -9999px;
}
```

# SCSS 片段

```scss
@mixin block($b) {
  $self: #{$namespace}-#{$b} !global;
  .#{$self} {
    @content;
  }
}

@mixin b($block) {
  @include block($block) {
    @content;
  }
}

@mixin e($element, $parent: 'root') {
  @if $parent == 'root' {
    &__#{$element} {
      @content;
    }
  } @else {
    & #{$parent}__#{$element} {
      @content;
    }
  }
}

@mixin m($modifier, $parent: 'root') {
  @if $parent == 'root' {
    &--#{$modifier} {
      @content;
    }
  } @else {
    & #{$parent}--#{$modifier} {
      @content;
    }
  }
}

@mixin icon($w, $h, $bg, $type: 'png') {
  width: #{$w}px;
  height: #{$h}px;
  background: none no-repeat center / 100%;
  @if $type == 'svg' {
    background-image: url('#{$bg}.svg');
  } @else {
    background-image: url('#{$bg}.png');
    @media (min-resolution: 2dppx) {
      background-image: url('#{$bg}@2x.png');
    }
    @media (min-resolution: 3dppx) {
      background-image: url('#{$bg}@3x.png');
    }
  }
}

@mixin one-pix-line($pos: 'bottom', $style: solid, $color) {
  $prop: border-#{$pos};
  @if $pos == 'all' {
    $prop: border;
  }
  #{$prop}: 1px $style $color;
  @media (min-resolution: 2dppx) {
    #{$prop}: .5px $style $color;
  }
  @media (min-resolution: 3dppx) {
    #{$prop}: .333333px $style $color;
  }
  @media (min-resolution: 4dppx) {
    #{$prop}: .25px $style $color;
  }
}

@mixin text-ellipsis($width: 100%) {
  width: $width;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: normal;
  text-overflow: ellipsis;
}

@mixin text-wrap() {
  white-space: pre-wrap;
  word-wrap: break-word;
}

@mixin center--x() {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  @content;
}

@mixin center--y() {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @content;
}

@mixin position--t--r($p: absolute, $t: 0, $r: 0) {
  position: $p;
  top: $t;
  right: $r;
  @content;
}

@mixin position--t--b($p: absolute, $t: 0, $b: 0) {
  position: $p;
  top: $t;
  bottom: $b;
  @content;
}

@mixin position--t--l($p: absolute, $t: 0, $l: 0) {
  position: $p;
  top: $t;
  left: $l;
  @content;
}

@mixin position--b--r($p: absolute, $b: 0, $r: 0) {
  position: $p;
  right: $r;
  bottom: $b;
  @content;
}

@mixin position--b--l($p: absolute, $b: 0, $l: 0) {
  position: $p;
  bottom: $b;
  left: $l;
  @content;
}

@mixin position--r--l($p: absolute, $r: 0, $l: 0) {
  position: $p;
  right: $r;
  left: $l;
  @content;
}

@mixin position--overlay($p: absolute) {
  position: $p;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

@mixin flex-box {
  display: flex;
  & > * {
    flex: 0 0 auto;
  }
}

@mixin h-box {
  @include flex-box;
  flex-direction: row;
  @content;
}

@mixin v-box {
  @include flex-box;
  flex-direction: column;
  @content;
}

@mixin box-center {
  @include flex-box;
  align-items: center;
  justify-content: center;
  @content;
}
```
