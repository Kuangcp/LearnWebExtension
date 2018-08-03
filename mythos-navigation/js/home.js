// http://blog.csdn.net/menglexinglai/article/details/39521905

// 打算把url图片转成 base64
function convertData(img, url) {
    var result;
    img.onload = function () {
        var canvas = document.createElement('canvas');
        canvas.height = img.height;
        canvas.width = img.width;
        var ctx = canvas.getContext("2d");
        console.log(canvas.baseURI);

        // result = canvas.toDataURL();  // 输出 Data URI
    }
    img.src = url;
    return result;
}

function CheckImgExists(imgurl) {
    var ImgObj = new Image(); //判断图片是否存在  
    ImgObj.src = imgurl;
    if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
        // return convertData(ImgObj, imgurl)
        return true;
    } else {
        return false;
    }
}

// 动态插入数据
function insertData(lists) {
    temp = '<div class="row">'
    count = 0
    lists.forEach(function (value) {
        count++
        urlList = value.url.split('/')
        var loadImgFlag = localStorage.getItem('loadImg')
        if (loadImgFlag == null || loadImgFlag !== 1) {
            imgDom = '<div style="" class="icon"></div>'
        } else {
            imgUrl = urlList[0] + '//' + urlList[2] + '/favicon.ico'
            // TODO 如何更好的处理图片
            imgExists = CheckImgExists(imgUrl)
            console.log(imgUrl, imgExists)
            if (imgExists != false) {
                imgDom = '<img src="' + imgUrl + '" class="icon"/>'
            } else {
                imgDom = '<div style="" class="icon"></div>'
            }
        }

        temp += '<div class="urlBox" style="">' +
            '<a href="' + value.url + '" style="text-decoration: none;">' +
            '<div class="box">' +
            '<div class="icon-div">' + imgDom + '</div>' +
            '<div class="url-text">' + value.title + '</div>' +
            '</div></div></a>'
        if (count % config.col == 0) {
            temp += '</div><br/><div class="row">'
        }
    })
    temp += '</div>'
    $("#main").html(temp)
    autoSetWidth()
    loadCustomConfig()

}
// 得到浏览器真实大小 TODO 适配问题
function autoSetWidth() {
    var trueWidth = document.body.clientWidth;
    var trueHeight = document.body.clientHeight;
    // var size =  list.config.view[""+trueWidth].[list.config.col];
    // console.log(size)
    boxWidth = parseInt((trueWidth - list.config.col * 10) / list.config.col)
    allBoxWidth = (boxWidth + 5) * list.config.col
    // 1920 232
    $(".urlBox").css('width', boxWidth + 3)
    console.log(list.config.col+' 宽度:'+trueWidth+' 高度:'+trueHeight+'box宽:'+boxWidth)
}
// 鼠标滚轮
function flide(delta, e) {
    if (timeStampVal == 0) {
        timeStampVal = e.timeStamp
    } else if (e.timeStamp - timeStampVal > 320) {
        timeStampVal = e.timeStamp
    } else {
        return 0
    }
    thisPage += delta
    if (thisPage >= list.config.type.length) {
        thisPage -= (list.config.type.length)
    }
    if (thisPage < 0) {
        thisPage += list.config.type.length
    }
    thisType = list.config.buttons[thisPage].type
    list.config.buttons.forEach(function (value) {
        $("#icon-btn-" + value.type).css('background-color', '#c2c2c2')
    })
    $("#icon-btn-" + thisType).css('background-color', '#ffffff')
    insertData(list[list.config.type[thisPage]])
}

var thisPage = 0
data = localStorage.getItem('main-data')
if (data != null) {
    list = JSON.parse(data)
    insertData(list.code)
    // 监听滚动事件的变量
    var counter = document.body
    var timeStampVal = 0
    var scrollFlag = 1

    // 追加按钮
    temp = ''
    list.config.buttons.forEach(function (value) {
        temp += '<div class="menu-button " data-type="' + value.type + '" id="icon-btn-' + value.type + '"><img src="svg/' +
            value.url + '" class="svg-pic" id="icon-' + value.type + '"/></div>'
    })
    $("#menu").html(temp)
    // 监听滚动事件
    $("#icon-btn-code").css('background-color', '#ffffff')
    // 检查火狐浏览器
    var isFF = /FireFox/i.test(navigator.userAgent);
    // console.log(isFF)
    if (isFF == true) {
        counter.addEventListener('DOMMouseScroll', function (e) {
            if (scrollFlag == 1) {
                // console.log(e.timeStamp)
                // console.log('o'+timeStampVal)
                var v = e.detail / 3;
                //阻止浏览器默认方法
                e.preventDefault();
                flide(v, e)
            }
        }, false)
    } else {
        counter.addEventListener("mousewheel", function (e) {
            // console.log(e)
            // Chrome建议的做法 https://www.chromestatus.com/feature/5745543795965952
            // TODO Chrome 相反的方向么
            var v = e.wheelDelta / 120 * -1;
            flide(v, e)
            // console.log(v+':'+thisPage)
            e.preventDefault();
        }, false);
    }


}
// 菜单点击
$(".menu-button").on('click', function () {
    type = $(this).data('type')
    if (type === 'setting') {
        scrollFlag = 0
        $("#config").css('display', 'block')
        // console.log('点击设置')
        return 0
    }
    temp = 0
    list.config.buttons.forEach(function (value) {
        $("#icon-btn-" + value.type).css('background-color', '#c2c2c2')
        if (value.type == type) {
            thisPage = temp
        }
        temp++
    })

    $("#icon-btn-" + type).css('background-color', '#f1f1f1')
    insertData(list[type])
})


// 加载自定义配置
function loadCustomConfig() {
    var data = getMainData()
    data.config.customizableOptions.forEach(function (value) {
        // console.log(value.key, localStorage.getItem(value.key))
        custom(value.key, value.className, value.fieldName)
    })
}

function customByConfig(keyName, action) {
    var value = localStorage.getItem(keyName)
    if (value != null) {
        action(value)
    }
}

function custom(keyName, className, fieldName) {
    customByConfig(keyName, function action(value) {
        $(className).css(fieldName, value)
    })
}