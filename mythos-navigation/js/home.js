

  var fun = 0        
  $(".menu-element").on('click', function () {
      type = $(this).data('type')
      // console.log('click', type)

      if (type == 'fun') {
          fun++
      }else{
          fun = 0                
      }
      if (type == 'fun') {
          insertData(list.fun)
      } else if (type == 'code') {
          insertData(list.code)
      } else if (type == 'cloud') {
          insertData(list.cloud)
      } else if (type == 'read') {
          insertData(list.read)
      }
      if(fun>2){
          window.location = 'refreshData.html'
      }
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
      insertData(list.code)
  });