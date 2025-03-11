/*------------------------------*/
/*クライアントの事例がふわっと出現*/
/*------------------------------*/
function fadeAnime(triggerClass, fadeClass) {
  $(triggerClass).each(function () {
    const $this = $(this);
    const elemPos = $this.offset().top - 30; //要素より30px上まで来たら
    const scroll = $(window).scrollTop(); //スクロール値を取得
    const windowHeight = $(window).height(); //画面の高さを取得

    if (scroll >= elemPos - windowHeight) {
      $this.addClass(fadeClass); // 画面内に入ったらfadeInというクラス名を追記
    } else {
      $this.removeClass(fadeClass); // 画面外に出たらfadeInというクラス名を外す
    }
  });
}
function fadeRightAnime() {
  fadeAnime(".fadeRightTrigger", "fadeRight");
}
function fadeLeftAnime() {
  fadeAnime(".fadeLeftTrigger", "fadeLeft");
}
/*------------------------------*/
/*順番に下からふわっと出現*/
/*------------------------------*/
function delayScrollAnime() {
  const time = 0.2; //遅延時間を増やす秒数の値
  let value = time;
  $(".delayScroll").each(function () {
    var $parent = $(this); //親要素を取得
    var elemPos = $parent.offset().top; //要素の位置まで来たら
    var scroll = $(window).scrollTop(); //スクロール値を取得
    var windowHeight = $(window).height(); //画面の高さを取得
    var $childs = $parent.children(); //子要素を取得

    if (scroll >= elemPos - windowHeight && !$parent.hasClass("play")) {
      //指定領域内にスクロールが入ったらまた親要素にクラスplayがなければ
      $childs.each(function () {
        const $this = $(this);
        if (!$this.hasClass("fadeUp")) {
          //アニメーションのクラス名が指定されているかどうかをチェック

          $parent.addClass("play"); //親要素にクラス名playを追加
          $this.css("animation-delay", value + "s"); //アニメーション遅延のCSS animation-delayを追加し
          $this.addClass("fadeUp"); //アニメーションのクラス名を追加
          value = value + time; //delay時間を増加させる

          //全ての処理を終わったらplayを外す
          //var index = $(childs).index(this);
          if ($childs.length - 1 == $childs.index($this)) {
            $parent.removeClass("play");
          }
        }
      });
    } else {
      $childs.removeClass("fadeUp"); //アニメーションのクラス名を削除
      value = time; //delay初期値の数値に戻す
    }
  });
}

/*------------------------------*/
/*ページトップボタン*/
/*------------------------------*/
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $("#page-top").removeClass("RightMove");
    $("#page-top").addClass("LeftMove");
  } else {
    if ($("#page-top").hasClass("LeftMove")) {
      $("#page-top").removeClass("LeftMove");
      $("#page-top").addClass("RightMove");
    }
  }
}
//#page-topをクリックした際の設定
$("#page-top").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

/*------------------------------*/
/*メニュー画面*/
/*------------------------------*/
$(".openbtn").click(function () {
  $(this).toggleClass("active");
  $("#g-nav").toggleClass("panelactive");
});
$("#g-nav a").click(function () {
  $(".openbtn").removeClass("active");
  $("#g-nav").removeClass("panelactive");
});

//画面をスクロールしたら動く
$(window).scroll(function () {
  console.log("スクロールイベントが発生");
  PageTopAnime();
  fadeLeftAnime();
  fadeRightAnime();
  delayScrollAnime();
});
