data = localStorage.getItem('main-data')
if (data != null){
    list = JSON.parse(data)
    selectDom = ''
    list.config.type.forEach(function (value) {
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
    // console.log('读取输入')
    for (var i = 1; i <= Total; i++) {
        dict['title' + i] = $("#title" + i).val()
        dict['type' + i] = $("#type" + i).val()
        dict['url' + i] = $("#url" + i).val()
        list[dict['type' + i]].push({"title":dict['title' + i],"url":dict['url' + i]})
    }
}

function appendJSON(simple) {
    readInput()
    $("#out").val('')
    if (simple == true){
        result = JSON.stringify(list)
    }else{
        result = formatJson(JSON.stringify(list))
    }
    $("#out").val(result)
    
}
$("#out").val('')
$(".showJSON").on('click', function () {
    appendJSON($(this).data('simple'))
})
function writeData(originDomId){
    data = $("#"+originDomId).val()
    localStorage.setItem('main-data', data)
    console.log(localStorage.getItem('main-data'))
}
$("#showJSONAndWrite").on('click', function () {
    writeData("out")
    alert('保存成功')
    window.location.href = ''
})
$("#closeConfig").on('click', function(){
    scrollFlag = 1
    $("#config").css('display', 'none')
})