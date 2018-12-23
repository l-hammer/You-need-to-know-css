/**
 * Docsify config
 */
gitalkConfig = {
  clientID: "8b7cffeb4ae285e0e3e4",
  clientSecret: "58d06f5220e953d6dac7d6723daf225177cc7bb3",
  repo: "You-need-to-know-css",
  owner: "l-hammer",
  admin: ["l-hammer"],
  perPage: 20,
  language: "en",
  labels: ["💬Gitalk"],
  pagerDirection: "last",
  distractionFreeMode: false
};
window.$docsify = {
  name: "You-need-to-know-css",
  repo: "https://github.com/l-hammer/You-need-to-know-css",
  auto2top: true,
  loadNavbar: true,
  loadSidebar: true,
  mergeNavbar: true,
  subMaxLevel: 2,
  homepage: "README.md",
  ga: "UA-122081516-1",
  search: {
    noData: {
      "/zh-cn/": "找不到结果!",
      "/": "No results!"
    },
    paths: "auto",
    placeholder: {
      "/zh-cn/": "搜索",
      "/": "Search"
    }
  },
  plugins: [
    function(hook, vm) {
      hook.beforeEach(function(html) {
        var url =
          "https://github.com/l-hammer/You-need-to-know-css/blob/master/" +
          vm.route.file;
        var editHtml = "[📝 EDIT DOCUMENT](" + url + ")\n";

        return editHtml + html;
      });

      hook.doneEach(function() {
        var label, domObj, main, divEle, gitalk;
        label = vm.route.path.split("/").pop();
        domObj = Docsify.dom;
        main = domObj.getNode("#main");

        /**
         * render gittalk
         */
        if (vm.route.path.includes("zh-cn")) {
          gitalkConfig.language = "zh-CN";
        }
        Array.apply(
          null,
          document.querySelectorAll("div.gitalk-container")
        ).forEach(function(ele) {
          ele.remove();
        });
        divEle = domObj.create("div");
        divEle.id = "gitalk-container-" + label;
        divEle.className = "gitalk-container";
        divEle.style = "width: " + main.clientWidth + "px; margin: 0 auto 20px;";
        domObj.appendTo(domObj.find(".content"), divEle);
        gitalk = new Gitalk(
          Object.assign(gitalkConfig, { id: !label ? "home" : label })
        );
        gitalk.render("gitalk-container-" + label);
      });
    }
  ]
};
