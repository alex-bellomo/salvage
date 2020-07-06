$(document).ready(function(){
    $(".list-item").on('click', (event) => {
      $(event.currentTarget).siblings('.list-item').fadeToggle(200);
      $(event.currentTarget).children('.popout').fadeToggle(200);
    });
  });