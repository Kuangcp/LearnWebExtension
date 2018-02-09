data = localStorage.getItem('main-data')
if (data !== ''){
    list = JSON.parse(data)
    selectDom = ''
    config.type.forEach(function (value) {
        selectDom += '<option value="' + value + '">' + value + '</option>'
    })
    var Num = 0
    var Total = 0
}

function addLine() {
    Num++
    Total++
    $("#input").append('<select class="link-type" id="type' + Total + '">' + selectDom + '</select>' +
        '<input id="title' + Total + '" class="title"/><input id="url' + Total + '" class="url"/><br/>')
}
$(".add-line").on('click', function () {
    addLine()
})


var dict = new Array()

// 读取输入得到字典
function readInput() {
    console.log('读取输入')
    for (var i = 1; i <= Total; i++) {
        dict['title' + i] = $("#title" + i).val()
        dict['type' + i] = $("#type" + i).val()
        dict['url' + i] = $("#url" + i).val()
        list[dict['type' + i]].push({"title":dict['title' + i],"url":dict['url' + i]})
    }
}

function appendJSON() {
    readInput()
    $("#out").val('')
    $("#out").val(JSON.stringify(list))
}
$("#out").val('')
$("#showJSON").on('click', function () {
    appendJSON()
})
function writeData(originDomId){
    data = $("#"+originDomId).val()
    localStorage.setItem('main-data', data)
    console.log(localStorage.getItem('main-data'))
}
$("#showJSONAndWrite").on('click', function () {
    writeData("out")
})
$("#initData").on('click', function(){
    writeData("recovery")
    data = $("#recovery").val()

    // console.log(JSON.stringify(data))
    localStorage.setItem('main-data', data)
    console.log(localStorage.getItem('main-data'))
})