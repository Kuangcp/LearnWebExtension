echo "    op 是 open-page"
echo "    mn 是 mythos-navigation"

if [ "$1" = 'op' ];then
	cd open-page && zip -r ../build/open-page.xpi *
fi

if [ "$1" = 'mn' ];then
	cd mythos-navigation  && zip -r ../build/mythos-navigation.xpi *
fi