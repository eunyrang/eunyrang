$(function () {
    //1.마우스휠 움직이기
    //2.tab>li클릭했을때 순서에 맞게 cont보여주기
    //3.menu_toggle클릭했을 때 this와 menu class(active,show)추가하기

    let winHeight = $(window).height();
    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    function scrollPage() {
        let scr = $(window).scrollTop();
        for (let i = 0; i < $('cont>div').length; i++) {
            if (scr >= winHeight * i && scr < winHeight * (i + 1)) {
                $('cont>div').removeClass('on');
                $('cont>div').eq(i).addClass('on');
            }
        }
    }
    $('.headerin ul li').on('click', function () {
        let i = $(this).index();
        $('html, body').animate({
            scrollTop: winHeight * (i + 1.2)
        });
    });


    $(window).on('scroll', scrollPage);
    scrollPage();

    $('#wrap>section').on('mousewheel', function (e, d) {
        if (d > 0) {//스크롤을 올렸을 때
            let prv = $(this).prev().offset().top;
            $('html, body').stop().animate({
                scrollTop: prv
            });

        } else if (d < 0) {//스크롤을 내렸을 때
            let nxt = $(this).next().offset().top;
            $('html, body').stop().animate({
                scrollTop: nxt
            })
        }
    })





    //////////////////////////////////

    function scrollPage() {
        let scr = $(window).scrollTop();
        for (let i = 0; i < $('.bgani li').length; i++) {
            if (scr >= winHeight * i && scr < winHeight * (i + 1)) {
                $('.bgani>li').removeClass('on');
                $('.bgani>li').eq(i).addClass('on');
            }
        }
    }








    /////////////////////////////////////////////////////


    $('.tab3 li').on('click', function (e) {
        e.preventDefault();

        let i = $(this).index();
        $('.charge').eq(i).css({ display: 'block' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
        // .show().siblings()을 쓰면flex가 안먹음
    })



    $(function () {

        $('.con1in .con1more').on('click', function (e) {
            e.preventDefault();
            $(this).next('.more').fadeIn();

        });
        $('.con1close').on('click', function (e) {
            e.preventDefault();
            $(this).parents('.more').fadeOut();
        })

    });






    ////////////////////////////////////////////////////////////

    $('.tab2 li').on('click', function (e) {
        e.preventDefault();

        let i = $(this).index();
        $('.workin').eq(i).css({ display: 'block' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');

    })

    $('.workin .tab li').on('click', function (e) {
        e.preventDefault();

        let i = $(this).index();
        $('.con2cont>div').eq(i).css({ display: 'flex' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');

    })
    $('.workin2 .tab li').on('click', function (e) {
        e.preventDefault();

        let i = $(this).index();
        $('.con2cont2>div').eq(i).css({ display: 'flex' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');

    })


    $('#goTop').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });



    //////////////////////////////////////////




    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        arrows: true,
        speed: 1000,
        focusOnSelect: true,
        vertical: true,
    });
    $('.slider-nav').slick('setPosition');


    $('.slicktabmore').on('click', function (e) {
        e.preventDefault();
    })


    $('.con3morein').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slicktabmore'
    });
    $('.slicktabmore').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.con3morein',
        arrows: true,
        speed: 1000,
        centerMode: false,
        focusOnSelect: true,
        vertical: true,
    });


    /////////////////////////


    $('.con3show').on('click', function (e) {
        e.preventDefault()
        $(this).next('.con3more').css('display', 'block');
        $('.con3morein').slick('setPosition');
        $('.slicktabmore').slick('setPosition');
    });


    $('.con3close').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.con3more').css({ display: 'none' });
    })






    ////////////////////////////////////////////////////////

    $('.list').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        speed: 1000,
        centerMode: true,
        focusOnSelect: true,

    });





    ////////////////////////////


    $('.list .thumb').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.con4more .wide').eq(i).fadeIn().siblings().hide();
    });
    $('.wide>div .con4header .close').on('click', function () {
        $(this).parents('.con4more>div').fadeOut();

    })



    /////////////////////////////

    $('.list .web a').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.list').siblings('.con4more').find('.webin').fadeIn();
    });
    $('.list .photo a').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.list').siblings('.con4more').find('.photoin').fadeIn();
    });
    $('.list .adobe a').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.list').siblings('.con4more').find('.adobein').fadeIn();
    });
    $('.list .hobby a').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.list').siblings('.con4more').find('.hobbyin').fadeIn();
    });

    $('.wide>div .con4header .close').on('click', function () {
        $(this).parents('.wide').fadeOut();

    })




    /////////////////////////////////////////////////////////






    $('.con4more .wide').slick();




    $('.con4morelist .con4tap>li').on('click', function (e) {
        e.preventDefault();

        let i = $(this).index();
        $('.mainchange').eq(i).css({ display: 'block' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');

    })




    $('.heart').on('click', function (e) {
        e.preventDefault();
        $(this).css({ display: 'none' }).next('.onheart').css({ display: 'block' });
    });
    $('.onheart').on('click', function (e) {
        e.preventDefault();
        $(this).css({ display: 'none' }).siblings('.heart').css({ display: 'block' });
    })

    $('.imoge a').on('click', function (e) {
        e.preventDefault();
    })


    $('.mark').on('click', function (e) {
        e.preventDefault();
        $(this).css({ display: 'none' }).next('.onmark').css({ display: 'block' });
    });
    $('.onmark').on('click', function (e) {
        e.preventDefault();
        $(this).css({ display: 'none' }).siblings('.mark').css({ display: 'block' });
    })














    $('click').twinkle({

        effect: 'drops-css',

        EffectOptions: {

            color: 'rgba(255,0,0,0.5)',

            radius: 300,

            duration: 1000,

            width: 2,

            count: 3,

            delay: 300

        }

    });















})