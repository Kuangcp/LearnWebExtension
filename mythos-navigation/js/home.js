$(".menu-element").on('click', function () {
    type = $(this).data('type')
    insertData(list[type])
})
function insertData(lists) {
    temp = '<div class="row">'
    count = 0
    lists.forEach(function (value) {
        count++
        // console.log(value.title, value.url)
        temp += '<div class="col-md-' + config.colNum + '" style="width=50%;">' +
            '<a href="' + value.url + '" style="text-decoration: none;">' +
            '<div class="box"><div class="text">' + value.title + '</div></div></div></a>'
        if (count % config.col == 0) {
            temp += '</div><div class="row">'
        }
    })
    temp += '</div>'
    $("#main").html(temp)
}

$(function () {
    list = JSON.parse(localStorage.getItem('main-data'))
    // console.log(list)
    insertData(list.code)
    // initData(config, list)
    // localStorage.setItem('main-data', JSON.stringify(list))
    // console.log(localStorage.getItem('main-data'))
    
});