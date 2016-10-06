function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 50.3734399, lng: 30.4545809},
      scrollwheel: false,
      zoom: 15
    });

    var marker = new google.maps.Marker({
        position: {lat: 50.3734399, lng: 30.4545809},
        map: map,
        title: 'Киев, ул. Лятошинського 2б'
    });
}


function initPage() {
    $(".button-collapse").sideNav();

    $(".open-modal-btn").on('click', function () {
        $('#modal1').openModal();    
    });

    $(".tel-input").mask("+38(099) 999-99-99");
    
    $(".nav-anim-btn").on("click",function(){
        var id = $(this).attr("class").split(" ")[1].split("-")[2];
        $("html,body").animate({scrollTop : $(".content-" + id).offset().top - 60 }, 1300);
    });

    $('.send-request-btn').on('click', function () {
        var cont = $(this).closest('.col');

        var nameInp = cont.find('.name-input'),
            telInp = cont.find('.tel-input');

        if ((nameInp.val() == '' || telInp.val().length != 18)){
            if (telInp.closest('.row').find('.error-message').length == 0) {
                telInp.closest('.row').append(
                    '<div class="center error-message">' +
                    '<p style="color: #c62828">Пожалуйста, введите корректные данные</p>' +
                    '</div>');
            }
            return
        }

        var data = {
            'car': $('body').find('.page-type').text(),
            'reason': cont.find('.reason').text(),
            'name': nameInp.val(),
            'number': telInp.val()
        };

        $.ajax({
            method: 'POST',
            url: '/send_email',
            data: JSON.stringify(data),
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                if (data.message != 'ok'){
                    if (telInp.closest('.row').find('.error-message').length == 0) {
                        telInp.closest('.row').append(
                            '<div class="center">' +
                            '<p style="color: #c62828" class="error-message">В данный момент у нас возникла проблема. Повторите попытку позже.</p>' +
                            '</div>')
                    }
                } else {
                    $('body').find('.error-message').remove();
                    nameInp.val('');
                    telInp.val('');
                    $('#modal1').closeModal();
                    Materialize.toast('Ваша заявка отправлена', 4000, 'green')
                }
            },
            error: function () {
                if (telInp.closest('.row').find('.error-message').length == 0){
                    telInp.closest('.row').append(
                        '<div class="center">' +
                            '<p style="color: #c62828" class="error-message">В данный момент у нас возникла проблема. Повторите попытку позже.</p>' +
                        '</div>')
                }
            }
        })
    })
}