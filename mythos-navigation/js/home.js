
function insertData(lists) {
    temp = '<div class="row">'
    count = 0
    lists.forEach(function (value) {
        count++
        // console.log(value.title, value.url)
        temp += '<div class="urlBox" style="">' +
            '<a href="' + value.url + '" style="text-decoration: none;">' +
            '<div class="box"><div class="text">' + value.title + '</div></div></div></a>'
        if (count % config.col == 0) {
            temp += '</div><br/><div class="row">'
        }
    })
    temp += '</div>'
    $("#main").html(temp)
}

var thisPage = 0
data = localStorage.getItem('main-data')
if (data !== ''){
    list = JSON.parse(data)
    insertData(list.code)
// 监听滚动事件的变量
var counter=document.body
var timeStampVal = 0
var scrollFlag = 1

// 追加按钮
temp = ''
list.config.buttons.forEach(function(value){
    temp += '<div class="menu-button " data-type="'+value.type+'" id="icon-btn-'+value.type+'"><img src="svg/'
        +value.url+'" class="svg-pic" id="icon-'+value.type+'"/></div>'
})
$("#menu").html(temp)

// 监听滚动事件
$("#icon-btn-code").css('background-color', '#f1f1f1')
counter.addEventListener('DOMMouseScroll', function(e){
    if(scrollFlag == 1){
        // console.log(e.timeStamp)
        // console.log('o'+timeStampVal)
        if(timeStampVal == 0 ){
            timeStampVal = e.timeStamp
        }else if(e.timeStamp-timeStampVal>320){
            timeStampVal = e.timeStamp
        }else{
            return 0
        }
        var v=e.detail/3;
        //阻止浏览器默认方法
        e.preventDefault();
        if(thisPage==0 && v<0){
            thisPage=3
        }else if (thisPage==3 && v>0){
            thisPage=0
        }else{
            thisPage+=v
        }
        thisType = list.config.buttons[thisPage].type
        list.config.buttons.forEach(function(value){
            $("#icon-btn-"+value.type).css('background-color', '#c2c2c2')
        })
        $("#icon-btn-"+thisType).css('background-color', '#f1f1f1')
        // console.log(thisType)
        insertData(list[list.config.type[thisPage]])
    }
}, false)
}
$(".menu-button").on('click', function () {
    type = $(this).data('type')
    if(type === 'setting'){
        scrollFlag = 0
        $("#config").css('display', 'block')
        // console.log('点击设置')
        return 0
    }
    temp = 0
    list.config.buttons.forEach(function(value){
        $("#icon-btn-"+value.type).css('background-color', '#c2c2c2')
        if(value.type == type){
            thisPage=temp
        }
        temp++
    })
    
    $("#icon-btn-"+type).css('background-color', '#f1f1f1')
    insertData(list[type])
})