/*------------------------------*/
/*ページトップボタン*/
/*------------------------------*/
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $('#page-top').removeClass('RightMove');
    $('#page-top').addClass('LeftMove');
  } else {
    if (
      $('#page-top').hasClass('LeftMove')){
        $('#page-top').removeClass('LeftMove');
        $('#page-top').addClass('RightMove');
      }
  }
}
//画面をスクロールしたら動く
$(window).scroll(function () {
  PageTopAnime();
});
//#page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

/*------------------------------*/
/*メニュー画面*/
/*------------------------------*/
$('.openbtn').click(function () {
  $(this).toggleClass('active');
  $('#g-nav').toggleClass('panelactive');
});
$("#g-nav a").click(function () {
  $(".openbtn").removeClass('active');
  $('#g-nav').removeClass('panelactive');
});
