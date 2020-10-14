$(document).mousemove(function(e){
    $('.box').offset({
      left: e.pageX,
      top: e.pageY + 20
    })
  })