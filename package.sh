# 这个打包只是为了上传到火狐的审核中心, 并不能直接就拖进去用

red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
blue='\033[0;34m'
purple='\033[0;35m'
cyan='\033[0;36m'
white='\033[0;37m'
end='\033[0m'

help(){
	printf "Run：$red sh package.sh $green<verb> $yellow<args>$end\n"
	format="  $green%-6s $yellow%-8s$end%-20s\n"
	printf "$format" "-h" "" "帮助"
	printf "$format" "-o" "version" "open-page"
	printf "$format" "-n" "version" "mythos-navigation"
}

if [ ! -d build ];then
	mkdir build
fi

case $1 in 
	-h)
		help ;;
	-o)
		if [ "$2"z = "z" ];then
			printf $red"please sepcific version\n"$end
			exit 1
		fi
		cd open-page && zip -r ../build/open-page-$2.xpi *
	;;
	-n)
		if [ "$2"z = "z" ];then
			printf $red"please sepcific version\n"$end
			exit 1
		fi
		cp -r mythos-navigation build/mythos-navigation/
		cd mythos-navigation  && zip -r ../build/mythos-navigation-$2.xpi *
		cd ../build && zip -d mythos-navigation-$2.xpi json/* origin/* js/main.data.js update.sh README.md config.html
		rm -rf mythos-navigation
		printf $green"package successful, upload to https://addons.mozilla.org/zh-CN/developers/addons \n"$end
	;;
	*)
		help ;;
esac
