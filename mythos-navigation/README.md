# mythos-navigation
> 简洁的导航页  [火狐插件地址](https://addons.mozilla.org/zh-CN/firefox/addon/kuangcp-nav/)
> 图标来源 [阿里巴巴矢量图标库-可爱简历图标](http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=8077)


## 使用
[main.json ](https://github.com/Kuangcp/LearnWebExtension/blob/master/mythos-navigation/json/main.json)是备份文件 

- 在火狐中 `首选项>>隐私与安全>>网站数据` 如果清除了这一项,就会导致插件的数据全部丢失


## 步骤
- 编写代码, 当需要发布版本就更改manifest.json的版本号, 
- 然后`git tag -a 版本号 -m 注释` 再打包, 
- 这样的话每个版本的源码就对应上了

## TODO
- [ ] 首页进行编辑每个URL的位置和URL等信息, 行列也是手动配置
- [ ] 配置中进行配置类别, 以及类别图标的存储问题, 同样的,网站logo的存储问题
- [X] 将点击切换的方式进行优化,然后添加鼠标滚动切换方式,
- [ ] 增强可定制性
- [X] 获取URL中域名的icon并显示出来
- [X] 更改数据交互方式

> 并且发现了, 电脑端上的插件卸载后, localStorage是还是保留的, 手机端,卸载就删除了所有缓存