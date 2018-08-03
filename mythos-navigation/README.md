# mythos-navigation
> 简洁的导航页  [火狐插件地址](https://addons.mozilla.org/zh-CN/firefox/addon/kuangcp-nav/)
> 图标来源 [阿里巴巴矢量图标库-可爱简历图标](http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=8077)


## 使用
[main.json ](https://github.com/Kuangcp/LearnWebExtension/blob/master/mythos-navigation/json/main.json)是备份文件 

- 在火狐中 `首选项>>隐私与安全>>网站数据` 如果清除了这一项,就会导致插件的数据全部丢失

## 配置
- localStorage 
    - loadImg 1:加载网站icon  否则不加载

```
loadImg null
gridBGColor #48484F
settingPageBGColor #6B6B75
menuButtonBGColor eeeee
showJsonBGColor #46464D
bodyBGColor #343436
gridTextColor #75C219
showJsonColor #FFFFFF
showJsonFontSize 14 
```
## 步骤
- 编写代码, 当需要发布版本就更改manifest.json的版本号, 
- 然后`git tag -a 版本号 -m 注释` 再打包: `./package.sh mn 版本`
- 这样的话每个版本的源码就对应上了

## TODO
- [ ] 在popup.html上进行编写添加方式, 添加直接保存不输出JSON, 设置保留原有方式
- [ ] 迁移到Chrome, 更改鼠标滚轮监听方式
- [ ] 拖动更改位置
- [ ] 首页进行编辑每个URL的位置和URL等信息, 行列也是手动配置
- [ ] 配置中进行配置类别, 以及类别图标的存储问题, 同样的,网站logo的存储问题
    - 目前实现了直接获取, 但是由于缓存的失效问题, 会导致延迟较高, 所以还是要第一次获取, 然后就缓存
- [X] 将点击切换的方式进行优化,然后添加鼠标滚动切换方式,
- [ ] 增强可定制性
- [X] 获取URL中域名的icon并显示出来
- [X] 更改数据交互方式

> 并且发现了, 电脑端上的插件卸载后, localStorage是还是保留的, 手机端,卸载就删除了所有缓存

使用 web-ext 打包扩展, https://developer.mozilla.org/zh-CN/Add-ons/WebExtensions/Getting_started_with_web-ext

火狐上的使用是直接上传zip, chrome就能直接写, chrome还能打包出一个crx文件

急需学习和参考的项目 : https://github.com/darktrojan/newtabtools.git
