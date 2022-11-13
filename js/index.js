$(document).ready(function(){
    
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    

    // Validate

    $(function(){
        $('#checkbox').on('change', function(){
            if($('#checkbox').prop('checked')){
                $('#submit').attr('disabled', false);
            }else{
                $('#submit').attr('disabled', true);
            }
        });
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                checkbox: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };
    validateForms('#contacts-form');

    // Form

    $('form').submit(function(e) {
        e.preventDefault();
        if ($("input#name").val() && $("input#email").val()) {
            $.ajax({
                type: "POST",
                url: "mailer/smart.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find("input").val("");
                $('.overlay, #thanks').fadeIn('slow');
    
                $('form').trigger('reset');
            });
            return false;
        } else {
            console.error("Ошибка!")
        }
    });
});