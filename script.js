// $(function(){
//   $("faq_list_detail_q").click(function(){
//     $("faq_list_detail_a").slideToggle(200);
//   });

// });


// $(function(){
//   $(window).scroll(function(){
//     $("header-inner").stop().animate({"top" : $(window).scrollTop() + 100}, 500);
//   });
// });

// ページ内リンクボタン
$(function(){
  // #で始まるリンクをクリックしたら実行
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 800; // ミリ秒で記述
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先の取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // ここでスムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// 要素のフワッとした表示
AOS.init();


// アコーディオンメニュー
$(function () {
  $(".faq_list_detail_a:not(:first-of-type)").css("display", "none");
    $('.faq_list_detail_q').on('click', function () {
    $(this).next().slideToggle();
  });
});

$(document).ready(function () {

  const $submitBtn = $('#js-submit')
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      // $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

});

$(document).ready(function () {

      $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
          url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfl-wzMi-NI_08WXel6GRVtd50l6-Fe_sa_inqj_Lf4h4hvkw/formResponse",
          data: formData,
          type: "POST",
          dataType: "xml",
          statusCode: {
            0: function () {
              $(".end-message").slideDown();
              $(".button").fadeOut();
              window.location.href = "thanks.html";
            },
            200: function () {
              $(".false-message").slideDown();
            }
          }
        });
        event.preventDefault();
      });

    });


$('.gnav-btn').on('click',function(){
  $('.gnav-btn').toggleClass('open');
  $('.globalNav').toggleClass('slide-in');
  $('body').toggleClass('noscroll');
});

 $('#globalNav a[href]').on('click', function(event) {
        $('.gnav-btn').trigger('click');
    });

// $('.burger-btn').on('click',function(){
//   $('.burger-btn').toggleClass('close');
//   $('.nav-wrapper').toggleClass('slide-in');
//   $('body').toggleClass('noscroll');
// });


$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    shortSwipes:false,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: true,
      disableOnInteraction: false,
      reverseDirection: false
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
        // centeredSlides: true,
      },
      950: {
        slidesPerView: 3.8,
        loop: true,
        centeredSlides: true,
        spaceBetween: 52,
      }
    }
  });
});
