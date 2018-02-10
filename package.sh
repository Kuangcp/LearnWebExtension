echo "sh package <options><version>"
echo "    op 是 open-page"
echo "    mn 是 mythos-navigation"

if [ "$1" = 'op' ];then
	cd open-page && zip -r ../build/open-page-$2.xpi *
fi

if [ "$1" = 'mn' ];then
	cd mythos-navigation  && zip -r ../build/mythos-navigation-$2.xpi *
	
	cd ../build && zip -d mythos-navigation-$2.xpi json/* origin/* js/main.data.js update.sh README.md config.html
	
fi
