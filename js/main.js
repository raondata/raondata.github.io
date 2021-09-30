
$(document).ready(function() {

    var $panel = $(".popup_panel1");

    var $panelContents = $panel.find(".popup_contents");

    $(".marker1").on("click", function(e) {

        // 레이어 팝업 열기
        $panel.fadeIn();
    });

    // 팝업 닫기 이벤트 정의
    $(".popup_panel1 #btn_popup_close").on("click", popupClose);

    function popupClose(e) {

        $panel.fadeOut();

        // 이벤트 기본 동작 중단
        e.preventDefault();
    }
});
$(document).ready(function() {

    var $panel = $(".popup_panel2");

    var $panelContents = $panel.find(".popup_contents");

    $(".marker2").on("click", function(e) {

        // 레이어 팝업 열기
        $panel.fadeIn();
    });

    // 팝업 닫기 이벤트 정의
    $(".popup_panel2 #btn_popup_close").on("click", popupClose);

    function popupClose(e) {

        $panel.fadeOut();

        // 이벤트 기본 동작 중단
        e.preventDefault();
    }
});
$(document).ready(function() {

    var $panel = $(".popup_panel1");

    var $panelContents = $panel.find(".popup_contents");

    $(".pop_btn").on("click", function(e) {

        // 레이어 팝업 열기
        $panel.fadeIn();
    });

    // 팝업 닫기 이벤트 정의
    $(".popup_panel1 #btn_popup_close").on("click", popupClose);

    function popupClose(e) {

        $panel.fadeOut();

        // 이벤트 기본 동작 중단
        e.preventDefault();
    }
});
$(document).ready(function() {

    var $panel = $(".popup_panel2");

    var $panelContents = $panel.find(".popup_contents");

    $(".pop_btn2").on("click", function(e) {

        // 레이어 팝업 열기
        $panel.fadeIn();
    });

    // 팝업 닫기 이벤트 정의
    $(".popup_panel2 #btn_popup_close").on("click", popupClose);

    function popupClose(e) {

        $panel.fadeOut();

        // 이벤트 기본 동작 중단
        e.preventDefault();
    }
});
$(document).ready(function() {
    $(".topnav").click(function() { //마우스를 topnav에 오버시
        $(this).css('color', '#eda712').parent().find(".subnav").slideDown('normal').show(); //subnav가 내려옴.
        $(this).parent().click(function() {}, function() {
             $(this).siblings().find(".subnav").slideUp('fast');
                 $(this).siblings().find(".topnav").css('color', '#222') //subnav에서 마우스 벗어났을 시 원위치시킴
        });
    });
});
