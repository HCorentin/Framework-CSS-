var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    $('button').parent('#liveAlertPlaceholder').append(wrapper)

    $('.btn-close').click(function () {
        $(wrapper).hide();
    });
}

if (alertTrigger) {
    alertTrigger.addEventListener('click', function () {
        alert('A simple success alert—check it out!', 'success')
    })
}

/*********************************************************dropdown********************************************************************************/
$('.dropdown').click(function () {
    $('ul.dropdown-menu').toggleClass('show')
})

/*********************************************************modal********************************************************************************/
$(document).ready(function () {

    /* creation du plugin*/
    (function ($) {
        $.fn.modal = function ($hideShow) {
            if ($hideShow === "hide") {
                $(this).hide();
            }
            if ($hideShow === "show") {
                $(this).show();
            }
        };
    })(jQuery);

    /*modal show on click launch button*/
    $('#launchModal').click(function (e) {
        /*e.stopPropagation();*/
        $("#myModal").modal("show");     /*appel plugin*/
    });

    /*ESC*/
    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) {
            $('#myModal').modal("hide");    /*appel plugin*/
        }
    });

    /*click outside*/
    $(document).on('click', function (e) {
        if ($(e.target).is('#myModal')) {
            $('#myModal').modal("hide");    /*appel plugin*/
        }
    });

    /*close modal on click button with .popin-dismiss class*/
    $('.popin-dismiss').on('click', function () {
        $('#myModal').modal("hide");
    })

    /*********************************************************navbar********************************************************************************/
    $('.navbar-toggler-icon').on('click', function () {
        if ($('.navbar-nav').is(":hidden") && $('form').is(":hidden")) {
            $('.navbar-nav').show()
            $('form').show()

        } else {
            $('.navbar-nav').hide()
            $('form').hide()
        }
    })


    /*********************************************************Onglets********************************************************************************/
    $(".tab-item").on('click', function () {
        let target = '#' + $(this).attr('data-target');

        $('.tab-item').removeClass('active');
        $('.tab-pane').removeClass('active');
        $(this).addClass('active');
        $('#' + $(this).attr('data-target')).addClass('active');
    })

    /*********************************************************Infobulles********************************************************************************/

    let tooltip = $('.tooltip');


    tooltip.hover(function () {
        let tooltip = $(this);
        if (typeof tooltip.attr('title') !== 'undefined' && !tooltip.children().hasClass('tooltiptext')) {
            let title = tooltip.attr('title');
            tooltip.append('<span class="tooltiptext">' + title + '</span>');
        } else {

        }
        let placement = $(this).attr('data-placement');
        let tooltipText = tooltip.children();
        switch (placement) {
            case 'top':
                tooltipText.css({'inset': '-100% 0% 112% 5%'})
                tooltipText.toggleClass('tooltiptextbottom')
                break;
            case 'bottom':
                tooltipText.css({'inset': '113% 0% -106% 12%'})
                tooltipText.toggleClass('tooltiptexttop')
                break;
            case 'right':
                tooltipText.css({'inset': '0% 0% 0% 103%'})
                tooltipText.toggleClass('tooltiptextleft')
                break;
            case 'left':
                tooltipText.css({'inset': '0% 0% 0% -78%'})
                tooltipText.toggleClass('tooltiptextright')
                break;

        }

    })

});