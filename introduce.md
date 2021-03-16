
# About You-need-to-know-css

As a Web developer, I believe CSS is one of our necessary skills. I always thought that I've had enough mastery of CSS until I read [Lea Verou](http://lea.verou.me/about/)'s [CSS Secrets](https://item.jd.com/11911279.html), when I found myself merely a so-so CSS player. The book offers a variety of practical and elegant solutions from different perspectives for our common web design problems. Here, I strongly recommend it to everyone who is working in front-end or interested in it. I am sure you will gain something from it.

For the convenience of future CTRL+ C/V, I summarized some small CSS styles that I collected or frequently used at work into this document. And for the sake of zhuangbility (Chinese slang, meaning pretending to be smarter), I titled the document `You-need-to-know-css`. So please, don't be too critical of it. Currently, there are in total 43 small CSS styles in this document (to be continued ...). Besides, since the document is still far from being flawless, any of your advices and suggestions would be much appreciated. If you find it somewhat helpful to you, you are welcome to improve it together with me. :memo:

The definition of [CSS](https://developer.mozilla.org/zh-CN/docs/Web/CSS) in MDN:

?> Cascading Style Sheets (abbreviated as CSS) is a style sheet language used to describe the presentation of HTML or XML (including XML branching languages such as SVG and XHTML). CSS describes how elements on screen, paper, audio and other media should be rendered.

<!-- The definition of CSS in my understanding:

?> A "language" that gives users visual pleasure, a language worthy of continuous exploration by web developers. -->

## principle

Reduce the duplicate code, keep it dry

```css
/* bad~bad~bad~ */

tips {
  color: #f4f0ea;
  border: 1px solid #f4f0ea;
}
tips:before {
  border-left-color: #f4f0ea;
}

/* good~good~good~ */

tips {
  color: #f4f0ea;
  border: 1px solid currentColor;
}
tips:before {
  border-left-color: inherit;
}
```

Reasonable use of shorthand

```css
/* bad~bad~bad~ */

div {
  border-width: 2px 2px 2px 0;
}

/* good~good~good~ */

div {
  border-width: 2px;
  border-left-width: 0;
}
```

Appropriate transition effect

```css
/* bad~bad~bad~ */

input:not(:focus) + .popTips{
  display: none;
}

input:focus + .popTips{
  display: block;
}

/* good~good~good~ */

input:not(:focus) + .popTips{
  transform: scale(0);
  transition: transform .25s cubic-bezier(.25, .1, .25, .1);
}

input:focus + .popTips{
  transform: scale(1);
  transition: transform .4s cubic-bezier(.29, .15, .5, 1.46);
}
```

## Color

In order to maintain consistency in the examples in the documentation, all sample colors in the document refer to the Netease Yan Xuan design specifications.

![color](static/colors_guide.jpeg)

!> The sample style in the document is not compatible with the addition of a browser prefix. It is recommended to use Chrome, Firefox and other mainstream browsers. Please use it in a production environment [Autoprefixer](https://www.npmjs.com/package/autoprefixer) to deal compatibility.
