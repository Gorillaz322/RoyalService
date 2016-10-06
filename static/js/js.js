$(document).ready(function(){
    
    $("input[type='text'],input[type='tel'],input[type='email']").click(function(){
       $("input[type='text'],input[type='tel'],input[type='email']").css({"background":"#ffffff"});
    });
    
    
    var y = new Date();var pol_year = parseInt (y.getFullYear());var m = new Date();var pol_mon = parseInt (m.getMonth());var ch_mon = pol_mon+1; var d = new Date();var pol_day = parseInt (d.getDate());var dd = new Date();var pol_day2 = parseInt (dd.getDay());var ch_day = 0;if (pol_day2 == 0){(ch_day = pol_day + 1);} else if (pol_day2 == 1){(ch_day = pol_day + 7);} else if (pol_day2 == 2){(ch_day = pol_day + 6);} else if (pol_day2 == 3){(ch_day = pol_day + 5);} else if (pol_day2 == 4){(ch_day = pol_day + 4);} else if (pol_day2 == 5){(ch_day = pol_day + 3);} else if (pol_day2 == 6){(ch_day = pol_day + 2);}/**/

    /*var pol_year = 2016;
    var ch_mon = 4;
    var ch_day = 30;/**/

    var until_year = pol_year;
    var until_month = ch_mon;
    var until_day = ch_day;
    
    var austDay = new Date();
    austDay = new Date(until_year,until_month - 1,until_day);
    $('#timer,#timer2').countdown({until: austDay});
    
    /*Переходы по нажатию на меню (главная, что мы умеем и т.п.) */
    $(".topmenudown").on("click",function(){
        var id = $(this).attr("href").split("#")[1];
        $("html,body").animate({scrollTop : $("#"+id).offset().top},1300);
        return false;
    });
    
    /* открыть закрыть дополнительный материал */
    $('#more').hide();
     $("a[href='#open']").on("click",function(){
        $('#more').toggle(1000);
     });
    
    /* прикрепить меню к верху экрана  
    $(window).scroll(function() { 
      var top = $(document).scrollTop();
       if (top < 128){
        $(".navbox").css({top: '120', position: 'relative','margin-top':'20px'});
        $(".box_zameni").css({position: 'absolute'});
       } else {
        $(".navbox").css({top: '0px', position: 'fixed','margin-top':'0'});
        $(".box_zameni").css({position: 'relative'});
       }
     });*/
    
    /*кнопка вверх*/
    $(window).scroll(function() { 
        var top = $(document).scrollTop();
        var head_height = $('header').height();
        if (head_height-50 < top) {
            $('.navbar').css({
                'position':'fixed',
                'z-index':15,
                'width':'100%',
                'top':0,
                'margin-top': 0,
                'text-align':'center',
                'left':0
            });
            $('.ygol2').css({'display':'none'});
            $('ul.nav').css({'width':'100%'});
            $('ul.nav li').css({
                'display':'inline-block',
                'float':'none',
                'text-align':'center'
            });
        } else {
            $('.navbar').css({
                'position':'relative',
                'margin-top': '20px'
            });
            $('.ygol2').css({'display':'inline-block'});
            $('ul.nav li').css({
                'display':'inline-block',
                'float':'left',
                'text-align':'center'
            });
        }
        
        
        if (top > 700) {
            $(".btn_up").css({display: 'inline-block'});
        }
        else {
            $(".btn_up").css({display: 'none'});
                    
        }
    });    
    $('.btn_up').on('click',function(){
        $("html,body").animate({scrollTop : $("body").offset().top},1050);
    });
    
    
    $("#inputPhone1,#inputPhone2,#inputPhone3,#inputPhone4,#inputPhone5,#inputPhone6,#inputPhone7,#inputPhone8,#inputPhone9,#inputPhone10,#inputPhone11,#inputPhone12,#inputPhone13,#inputPhone14,#inputPhone15,#inputPhone16,#inputPhone17,#inputPhone18,#inputPhone19,#inputPhone20,#inputPhone21,#inputPhone22,#inputPhone23,#inputPhone24,#inputPhone25,#inputPhone26,#inputPhone27,#inputPhone28,#inputPhone29,#inputPhone30,#inputPhone31,#inputPhone32,#inputPhone33,#inputPhone34,#inputPhone35").mask("+38(099) 999-99-99");
    
    var re = /^\w+([\.-]?\w+)*@(((([a-z0-9]{2,})|([a-z0-9][-][a-z0-9]+))[\.][a-z0-9])|([a-z0-9]+[-]?))+[a-z0-9]+\.([a-z]{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum|ru|ua))$/i;
    
    
    /* ----- START FORM 1 */
    $("a[href='#forma-up_slide1_1']").on("click",function(){
        var zagall = $('#name_bl_1').text();
        $('#zagal').text(zagall);
        
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up1').width())/2*-1;
            $('.forma-up1').css({"margin-left":win_width});
            var win_height = ($('.forma-up1').height())/2*-1;
            $('.forma-up1').css({"margin-top":win_height});
            
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"50%"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        }
    });
    
    /* ----- START FORM 1 2 */
    $("a[href='#forma-up_slide1_2']").on("click",function(){
        var zagall = $('#name_bl_2').text();
        $('#zagal').text(zagall);
        
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up1').width())/2*-1;
            $('.forma-up1').css({"margin-left":win_width});
            var win_height = ($('.forma-up1').height())/2*-1;
            $('.forma-up1').css({"margin-top":win_height});
            
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"50%"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        }
    });
    
    /* ----- START FORM 1 3 */
    $("a[href='#forma-up_slide1_3']").on("click",function(){
        var zagall = $('#name_bl_3').text();
        $('#zagal').text(zagall);
        
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up1').width())/2*-1;
            $('.forma-up1').css({"margin-left":win_width});
            var win_height = ($('.forma-up1').height())/2*-1;
            $('.forma-up1').css({"margin-top":win_height});
            
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"50%"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        }
    });
    
    /* ----- START FORM 1 4 */
    $("a[href='#forma-up_slide1_4']").on("click",function(){
        var zagall = $('#name_bl_4').text();
        $('#zagal').text(zagall);
        
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up1').width())/2*-1;
            $('.forma-up1').css({"margin-left":win_width});
            var win_height = ($('.forma-up1').height())/2*-1;
            $('.forma-up1').css({"margin-top":win_height});
            
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"50%"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        }
    });
    
    /* ----- START FORM 1 5 */
    $("a[href='#forma-up_slide1_5']").on("click",function(){
        var zagall = $('#name_bl_5').text();
        $('#zagal').text(zagall);
        
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up1').width())/2*-1;
            $('.forma-up1').css({"margin-left":win_width});
            var win_height = ($('.forma-up1').height())/2*-1;
            $('.forma-up1').css({"margin-top":win_height});
            
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"50%"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        }
    });
    
    /* ----- START FORM 1 6 */
    $("a[href='#forma-up_slide1_6']").on("click",function(){
        var zagall = $('#name_bl_6').text();
        $('#zagal').text(zagall);
        
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up1').width())/2*-1;
            $('.forma-up1').css({"margin-left":win_width});
            var win_height = ($('.forma-up1').height())/2*-1;
            $('.forma-up1').css({"margin-top":win_height});
            
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"50%"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        }
    });
    
    /* ----- START FORM 1 7 */
    $("a[href='#forma-up_slide1_7']").on("click",function(){
        var zagall = $('#name_bl_7').text();
        $('#zagal').text(zagall);
        
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up1').width())/2*-1;
            $('.forma-up1').css({"margin-left":win_width});
            var win_height = ($('.forma-up1').height())/2*-1;
            $('.forma-up1').css({"margin-top":win_height});
            
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"50%"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        }
    });
    
    /* ----- START FORM 1 8 */
    $("a[href='#forma-up_slide1_8']").on("click",function(){
        var zagall = $('#name_bl_8').text();
        $('#zagal').text(zagall);
        
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up1').width())/2*-1;
            $('.forma-up1').css({"margin-left":win_width});
            var win_height = ($('.forma-up1').height())/2*-1;
            $('.forma-up1').css({"margin-top":win_height});
            
            $("#inputName1,#inputPhone1").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up1").animate({"top":"50%"},750,function(){ 
                    $("#inputName1").focus();
                });
            });
            return false;
        }
    });
    
    $("a[href='#send_close1'], .shirma").on("click",function(){
        $(".forma-up1").animate({"top":"-150%"},750,function(){
            $(".shirma").fadeOut(500);
            $("body").css({'overflow': 'auto'});
        });
        return false;
    });
    
    /* ----- form 1 modal popover */
    $("a[href='#send1']").on("click",function(){
        if($("#inputName1").val().length < 2){
            $("#inputName1").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputName1").css({"background":"#ffffff"});
            var name = $("#inputName1").val();
        }
        if($("#inputPhone1").val().length != 18){
            $("#inputPhone1").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputPhone1").css({"background":"#ffffff"});
            var cell = $("#inputPhone1").val();
        }
        var zagal = $('#zagal').text();
        $(".preloader").show();
        $.ajax({
            async: false,
            type: "POST",
            url: "cmd/ajax.php", 
            data:{
                'action':'send_request',
                'tite':'Заказ ' +zagal,
                'name':name,
                'cell':cell,
                'mail':'mailfrom@club911.ua'
            },
            success: function(data){
                $(".preloader").hide();
                $("#inputName1,#inputPhone1").val("");
                $(".forma-up1").css({"zIndex":"2000"}).animate({"top":"-150%"},750,function(){
                    $(".shirma").fadeOut(300);
                    $('#myModal').modal('show');
                    setTimeout(function(){ 
                    $("#myModal").modal('hide');
                    $(".modal-backdrop").fadeOut()},5000);
                });
                $("body").css({'overflow': 'auto'});
            }
        });
        return false;
    });
    
    /* ----- START FORM 2 */
    $("a[href='#forma-up_slide2'],a[href='#forma-up_slide2_2']").on("click",function(){
        var zagall = $('#name_bl_2').text();
        $('#zagal_2').text(zagall);
        
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName2,#inputPhone2").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up2").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName2").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up2').width())/2*-1;
            $('.forma-up2').css({"margin-left":win_width});
            var win_height = ($('.forma-up2').height())/2*-1;
            $('.forma-up2').css({"margin-top":win_height});
            
            $("#inputName2,#inputPhone2").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up2").animate({"top":"50%"},750,function(){ 
                    $("#inputName2").focus();
                });
            });
            return false;
        }
    });
    
    $("a[href='#send_close2'], .shirma").on("click",function(){
        $(".forma-up2").animate({"top":"-150%"},750,function(){
            $(".shirma").fadeOut(500);
            $("body").css({'overflow': 'auto'});
        });
        return false;
    });
    
    /* ----- form 2 modal popover */
    $("a[href='#send2']").on("click",function(){
        if($("#inputName2").val().length < 2){
            $("#inputName2").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputName2").css({"background":"#ffffff"});
            var name = $("#inputName2").val();
        }
        if($("#inputPhone2").val().length != 18){
            $("#inputPhone2").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputPhone2").css({"background":"#ffffff"});
            var cell = $("#inputPhone2").val();
        }
        $(".preloader").show();
        $.ajax({
            async: false,
            type: "POST",
            url: "cmd/ajax.php", 
            data:{
                'action':'send_request',
                'tite':'Заказать звонок',
                'name':name,
                'cell':cell,
                'mail':'mailfrom@club911.ua'
            },
            success: function(data){
                $(".preloader").hide();
                $("#inputName2,#inputPhone2").val("");
                $(".forma-up2").css({"zIndex":"2000"}).animate({"top":"-150%"},750,function(){
                    $(".shirma").fadeOut(300);
                    $('#myModal').modal('show');
                    setTimeout(function(){ 
                    $("#myModal").modal('hide');
                    $(".modal-backdrop").fadeOut()},5000);
                });
                $("body").css({'overflow': 'auto'});
            }
        });
        return false;
    });
    /*  END FORM 2 */
    
    /* ----- START FORM 3 */
    $("a[href='#forma-up_slide3']").on("click",function(){
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName3,#inputPhone3").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up3").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName3").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up3').width())/2*-1;
            $('.forma-up3').css({"margin-left":win_width});
            var win_height = ($('.forma-up3').height())/2*-1;
            $('.forma-up3').css({"margin-top":win_height});
            
            $("#inputName3,#inputPhone3").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up3").animate({"top":"50%"},750,function(){ 
                    $("#inputName3").focus();
                });
            });
            return false;
        }
    });
    
    $("a[href='#send_close3'], .shirma").on("click",function(){
        $(".forma-up3").animate({"top":"-150%"},750,function(){
            $(".shirma").fadeOut(500);
            $("body").css({'overflow': 'auto'});
        });
        return false;
    });
    
    /* ----- form 3 modal popover */
    $("a[href='#send3']").on("click",function(){
        if($("#inputName3").val().length < 2){
            $("#inputName3").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputName3").css({"background":"#ffffff"});
            var name = $("#inputName3").val();
        }
        if($("#inputPhone3").val().length != 18){
            $("#inputPhone3").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputPhone3").css({"background":"#ffffff"});
            var cell = $("#inputPhone3").val();
        }
        $(".preloader").show();
        $.ajax({
            async: false,
            type: "POST",
            url: "cmd/ajax.php", 
            data:{
                'action':'send_request',
                'tite':'Получить консультацию',
                'name':name,
                'cell':cell,
                'mail':'mailfrom@club911.ua'
            },
            success: function(data){
                $(".preloader").hide();
                $("#inputName3,#inputPhone3").val("");
                $(".forma-up3").css({"zIndex":"2000"}).animate({"top":"-150%"},750,function(){
                    $(".shirma").fadeOut(300);
                    $('#myModal').modal('show');
                    setTimeout(function(){ 
                    $("#myModal").modal('hide');
                    $(".modal-backdrop").fadeOut()},5000);
                });
                $("body").css({'overflow': 'auto'});
            }
        });
        return false;
    });
    /* END FORM 3 */
    
    /* ----- START FORM 4 */
    $("a[href='#forma-up_slide4']").on("click",function(){
        var width_body = $('body').width();
        if (width_body < 500) {
            $("#inputName4,#inputPhone4").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up4").animate({"top":"0","left":"0","width":"100%","height":"100%","margin-left":"0%","margin-top":"0%","overflow":"scroll"},750,function(){ 
                    $("#inputName4").focus();
                });
            });
            return false;
        } else {
            var win_width = ($('.forma-up4').width())/2*-1;
            $('.forma-up4').css({"margin-left":win_width});
            var win_height = ($('.forma-up4').height())/2*-1;
            $('.forma-up4').css({"margin-top":win_height});
            
            $("#inputName4,#inputPhone4").val("");
            $("body").css({'overflow': 'hidden'});
            $(".shirma").fadeIn(500,function(){
                $(".forma-up4").animate({"top":"50%"},750,function(){ 
                    $("#inputName4").focus();
                });
            });
            return false;
        }
    });
    
    $("a[href='#send_close4'], .shirma").on("click",function(){
        $(".forma-up4").animate({"top":"-150%"},750,function(){
            $(".shirma").fadeOut(500);
            $("body").css({'overflow': 'auto'});
        });
        return false;
    });
    
    /* ----- form 4 modal popover */
    $("a[href='#send4']").on("click",function(){
        if($("#inputName4").val().length < 2){
            $("#inputName4").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputName4").css({"background":"#ffffff"});
            var name = $("#inputName4").val();
        }
        if($("#inputPhone4").val().length != 18){
            $("#inputPhone4").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputPhone4").css({"background":"#ffffff"});
            var cell = $("#inputPhone4").val();
        }
        $(".preloader").show();
        $.ajax({
            async: false,
            type: "POST",
            url: "cmd/ajax.php", 
            data:{
                'action':'send_request',
                'tite':'Заказать вопрос менеджеру',
                'name':name,
                'cell':cell,
                'mail':'mailfrom@club911.ua'
            },
            success: function(data){
                $(".preloader").hide();
                $("#inputName4,#inputPhone4").val("");
                $(".forma-up4").css({"zIndex":"2000"}).animate({"top":"-150%"},750,function(){
                    $(".shirma").fadeOut(300);
                    $('#myModal').modal('show');
                    setTimeout(function(){ 
                    $("#myModal").modal('hide');
                    $(".modal-backdrop").fadeOut()},5000);
                });
                $("body").css({'overflow': 'auto'});
            }
        });
        return false;
    });
    /* END FORM 4 */
    
    
    /* ----- START FORM 5 */
    $("a[href='#send5']").on("click",function(){
        
        if($("#inputName5").val().length < 2){
            $("#inputName5").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputName5").css({"background":"#ffffff"});
            var name = $("#inputName5").val();
        }
        if($("#inputPhone5").val().length != 18){
            $("#inputPhone5").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputPhone5").css({"background":"#ffffff"});
            var cell = $("#inputPhone5").val();
        }
        var name_f5 = $('#name_f_5').text();
        $(".preloader").show();
        $.ajax({
            async: false,
            type: "POST",
            url: "cmd/ajax.php", 
            data:{
                'action':'send_request',
                'tite':'Заказать вопрос менеджеру',
                'name':name,
                'cell':cell,
                'mail':'mailfrom@club911.ua'
            },
            success: function(data){
                $(".preloader").hide();
                $("#inputName5,#inputPhone5").val("");
                $('#myModal').modal('show');
                setTimeout(function(){ 
                $("#myModal").modal('hide');
                $(".modal-backdrop").fadeOut()},5000);
            }
        });
        return false;
    });
    /* END FORM 5 */

    /* ----- START FORM 6 */
    $("a[href='#send6']").on("click",function(){
        if($("#inputName6").val().length < 2){
            $("#inputName6").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputName6").css({"background":"#ffffff"});
            var name = $("#inputName6").val();
        }
        if($("#inputPhone6").val().length != 18){
            $("#inputPhone6").css({"background":"#F90409"});
            return false;
        } else {
            $("#inputPhone6").css({"background":"#ffffff"});
            var cell = $("#inputPhone6").val();
        }
        $(".preloader").show();
        $.ajax({
            async: false,
            type: "POST",
            url: "cmd/ajax.php", 
            data:{
                'action':'send_request',
                'tite':'Оформите подарочный сертификат и получите дополнительный подарок',
                'name':name,
                'cell':cell,
                'mail':'mailfrom@club911.ua'
            },
            success: function(data){
                $(".preloader").hide();
                $("#inputName6,#inputPhone6").val("");
                $('#myModal').modal('show');
                setTimeout(function(){ 
                $("#myModal").modal('hide');
                $(".modal-backdrop").fadeOut()},5000);
            }
        });
        return false;
    });
    /* END FORM 6 */
    
});