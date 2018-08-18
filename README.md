# 学习WebExtension
> [official 中文版入门索引](https://developer.mozilla.org/zh-CN/docs/Mozilla/Add-ons/WebExtensions)
> [火狐API](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs#contentScripts)


> [参考项目:webextensions-examples](https://github.com/mdn/webextensions-examples)  
> [newtabtools](https://github.com/darktrojan/newtabtools)  
> [saka-key](https://github.com/lusakasa/saka-key)  

[旧版页面](https://addons.mozilla.org/zh-CN/developers/addons) 
[火狐开发社区个人主页](https://addons.mozilla.org/zh-CN/firefox/user/Myth_kuang/)

## 教程
> [【干货】Chrome插件(扩展)开发全攻略](http://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html) | [对应源码库](https://github.com/sxei/chrome-plugin-demo)
> [想从火狐转chrome,可是找不到对应的套件,一直转不过去？](https://www.zhihu.com/question/23342733)

## 已上架
### mythos-navigation
> [初始化配置文件](https://github.com/Kuangcp/LearnWebExtension/blob/master/mythos-navigation/json/main.json)

- [源码地址](/mythos-navigation)| [mythos-navigation火狐AMO地址](https://addons.mozilla.org/zh-CN/firefox/addon/kuangcp-nav/)
	- 简易的导航页,方便自己使用而已...


> 无意间发现了火狐的主题进行自定义很简单 [官方入门文档](https://developer.mozilla.org/en-US/Add-ons/Themes/Lightweight_themes)
其实就是一张 3000X200 的图片而已  
> 但是因此发现了一个神器 [pixlr](https://pixlr.com/editor/) 在线的PS, 我的天, 6666
还有 [PS在线工具](https://www.photoshop.com/tools?wf=editor)`功能有限,也可以玩玩`


## 迁移到Chrome
> 由于现在都使用了同一个接口规范, 所以配置代码无需改动, 只需少数地方做下适配就可以迁移过去了
也就是监听滚轮的地方加上Chrome的适配, 然后直接将该文件夹放入Chrome即可完成安装

https://developer.mozilla.org/zh-CN/docs/Web/API/Blob

