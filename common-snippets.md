
# Common CSS snippets

### CSS Reset

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

### Clearfix

```css
element::after {
  content: "";
  display: block;
  clear: both;
}
```

### Text truncate

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

### Text hide

```css
element {
  font: 0/0 a;
  color: transparent;
  text-indent: -9999px;
}
```

# SCSS snippets

```scss
$M_E: 'null';

/* @params $block 为模块名称（最高作用域）
---------------------------- */
@mixin block($block) {
  $B: $block !global;
  .#{$block} {
    $rootblock: & !global;
    @content;
  }
}

/* @params $element 为元素名称
/* @params $base 用于替换默认的父元素名称（基本上不会用到）
/* @prop $M_E 解决在 m() 使用时的受 & 限制的问题
---------------------------- */
@mixin e($element, $base: 'base') {
  $E: $element !global;
  @if $M_E != 'null' {
    @if $M_E == $rootblock {
      & .#{$element} {
        @content;
      }
    } @else {
      & #{$M_E}__#{$element} {
        @content;
      }
    }
  } @else if & == $rootblock {
    & .#{$element} {
      @content;
    }
  } @else if $base == 'base' {
    &__#{$element} {
      @content;
    }
  }
}

/* @params $elements 多个class，用于多个class有公用的样式时
/* @mixin block(tpl) { e-each(title desc href) }
/* $rootblock 输出：.tpl .title, .tpl .desc, .tpl .href
/* 非 $rootblock 输出：.tpl__title, .tpl__desc, .tpl__href
---------------------------- */
@mixin e-each($elements) {
  $selector: "";

  @each $ele in $elements {
    @if & == $rootblock {
      $selector: #{$selector + & + " ." + $ele + ", "};
    } @else {
      $selector: #{$selector + & + "__" + $ele + ", "};
    }
  }

  @at-root #{$selector} {
    @content;
  }
}

/* @params $modifier 元素修饰符
/* @params $inherit 嵌套 e() 是否继承父选择器
/* .hp-menu
/* .hp-menu__item
/* .hp-menu--vertical
/* .hp-menu--vertical__item (❌)
/* .hp-menu--vertical .hp-menu__item（✅）
---------------------------- */
@mixin m($modifier, $inherit: 'true') {
  @if $inherit == 'true' {
    $M_E: & !global;
  }
  &--#{$modifier} {
    @content;
  }
  $M_E: 'null' !global; // 清空当前修饰的元素
}

/* 全局样式，自动增加 global- 前缀，以更好的区分样式类型
---------------------------- */
@mixin global($name) {
  $cls: global-#{$name};
  @at-root .#{$cls} {
    @content;
  }
}

@mixin icon($w, $h, $bg, $type: 'png') {
  width: #{$w}px;
  height: #{$h}px;
  background: none no-repeat center / 100%;
  @if $type == 'svg' {
    background-image: url('#{$bg}.svg');
  } @else {
    background-image: url('#{$bg}@2x.png');
    @media (min-resolution: 3dppx) {
      background-image: url('#{$bg}@3x.png');
    }
  }
}

@mixin one-pix-line($pos: 'bottom', $color: $--border-color, $style: solid) {
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

/* @include positon($t: 0); => position: absolute; top: 0;
/* @include positon($t: 0, $l: 100%); => position: absolute; top: 0; left: 100%;
/* @include positon($v: 0); => position: absolute; top: 0; right: 0; bottom: 0; left: 0;
---------------------------- */
@mixin position($p: absolute, $t: null, $r: null, $b: null, $l: null, $v: null) {
  $t: $v or $t;
  $r: $v or $r;
  $b: $v or $b;
  $l: $v or $l;
  position: $p;
  @if $t { top: $t; }
  @if $r { right: $r; }
  @if $b { bottom: $b; }
  @if $l { left: $l; }
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

@mixin center() {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @content;
}

@mixin box-center {
  @include flex-box;
  align-items: center;
  justify-content: center;
  @content;
}
```
