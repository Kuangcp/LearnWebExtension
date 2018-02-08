selectDom = ''
        config.type.forEach(function (value) {
            selectDom += '<option value="' + value + '">' + value + '</option>'
        })
        var Num = 0
        var Total = 0

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

        function readInput() {
            for (var i = 1; i <= Total; i++) {
                dict['title' + i] = $("#title" + i).val()
                dict['type' + i] = $("#type" + i).val()
                dict['url' + i] = $("#url" + i).val()
                // console.log(dict['type'+i]+"|"+dict['title'+i]+"|"+dict['url'+i]+"total:"+Total)
            }
        }

        function appendJSON() {
            readInput()
            // JSON拼接
            temp = 'list={\n'
            for (var o in list) {
                temp += '  ' + o + ':[\n'
                if (typeof list[o] == 'object' && list[o] != null) {
                    for (var line in list[o]) {
                        temp += '    {"title":"' + list[o][line].title + '","url":"' + list[o][line].url + '"},\n';
                    }
                    // 因为定义了var,所以不是局部变量, 所以就不会有重复出现!!
                    for (var i = 1; i <= Num; i++) {
                        if (dict['type' + i] === o) {
                            temp += '    {"title":"' + dict['title' + i] + '","url":"' + dict['url' + i] + '"},\n';
                        }
                    }
                }
                temp += '],\n'
            }
            temp += '}'
            // console.log(temp)
            $("#out").val('')
            $("#out").val(temp)
        }
        $("#out").val('')
        $(".showJSON").on('click', function () {
            appendJSON()
        })