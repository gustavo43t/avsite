$(document).ready(function($) {

  loadMenu();
});


function loadMenu() {
  console.log('Loading Menu!')

  $('#header-navbar').load('partials/header-navbar.html')

  // $.get("partials/header-navbar.html")
  // .done((data) => {
  //     $('#header-navbar').html(data) ;
  // });

}

