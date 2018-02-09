
function insertData(lists) {
    temp = '<div class="row">'
    // temp = '<tr>'
    count = 0
    lists.forEach(function (value) {
        count++
        // console.log(value.title, value.url)
        temp += '<div class="urlBox" style="width=50%;">' +
            '<a href="' + value.url + '" style="text-decoration: none;">' +
            '<div class="box"><div class="text">' + value.title + '</div></div></div></a>'
        if (count % config.col == 0) {
            temp += '</div><br/><div class="row">'
        }


        // temp +='<td><a href="'+value.url+'"></a></td>'
        // if (count % config.col == 0) {
        //     temp += '</div><div class="row">'
        // }
    })
    temp += '</div>'
    $("#main").html(temp)
}
var thisPage = 0
data = localStorage.getItem('main-data')
if (data !== ''){
    list = JSON.parse(data)
    insertData(list.code)
}
// 追加按钮
temp = ''
config.buttons.forEach(function(value){
    temp += '<div class="menu-button " data-type="'+value.type+'"><img src="svg/'+value.url+'" class="svg-pic" /></div>'
})
$("#menu").html(temp)

$(".menu-button").on('click', function () {
    type = $(this).data('type')
    if(type === 'setting'){
        window.location.href='refreshData.html'
        return 0
    }
    insertData(list[type])
})

var counter=document.body
var timeStampVal = 0
counter.addEventListener('DOMMouseScroll', function(e){
    // console.log(e.timeStamp)
    // console.log('o'+timeStampVal)
    if(timeStampVal == 0 ){
        timeStampVal = e.timeStamp
    }else if(e.timeStamp-timeStampVal>400){
        timeStampVal = e.timeStamp
    }else{
        return 0
    }
    
    
    var v=e.detail/3;
    //阻止浏览器默认方法
    e.preventDefault();
    // console.log(v)
    if(thisPage==0 && v<0){
        // console.log('太小')
        thisPage=3
    }else if (thisPage==3 && v>0){
        // console.log('太大')
        thisPage=0
    }else{
        thisPage+=v
    }
    // console.log(thisPage)
    insertData(list[config.type[thisPage]])
}, false)
