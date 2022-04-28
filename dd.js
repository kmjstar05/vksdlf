$(document).ready(function() {
    // 이미지 슬라이드
    var img = 1;
  
    // 3초 간격으로 이미지를 이동
    setInterval(function() {
      img += 1;
      if (img < 3) {
        $(".imageslide ul").animate({left: "-=800px"}, 500);
      } else {
        img = 0;
        $(".imageslide ul").animate({left: "0px"}, 500);
      }
    }, 3000);
  
    // 메뉴
    $(".menu > li").mouseover(function() {
      $(this).find(".submenu").stop().scrollDown(500);
    });
    $(".menu > li").mouseout(function() {
      $(this).find(".submenu").stop().scrollUp(500);
    });
  });
