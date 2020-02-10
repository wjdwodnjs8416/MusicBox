// console.log(123);

// .bt_more가 체크되었을 때
// 부모의 형제인 .detail이 보인다.

// 페이지가 로드 되었을 때

$(function(){
    $(".feed_wrap.type1 .bt_more").click(function(){
        $(this).parent().find("+ .detail").slideToggle(100);
    });
});

$(function(){
    $(".feed_wrap.type2 .bt_more").click(function(){
        $(this).parent().find("+ .detail").slideToggle(100);
    });
});