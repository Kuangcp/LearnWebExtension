echo "sh package <options><version>"
echo "    op 是 open-page"
echo "    mn 是 mythos-navigation"

if [ ! -d build ];then
	mkdir build
fi

if [ "$1" = 'op' ];then
	cd open-page && zip -r ../build/open-page-$2.xpi *
fi

if [ "$1" = 'mn' ];then
	cp -r mythos-navigation build/mythos-navigation/
	cd mythos-navigation  && zip -r ../build/mythos-navigation-$2.xpi *
	cd ../build && zip -d mythos-navigation-$2.xpi json/* origin/* js/main.data.js update.sh README.md config.html
fi
# 这个打包只是为了上传到火狐的审核中心, 并不能直接就拖进去用

