;
! function () {

    const $hdSearchForm = $('#hdSearchForm');
    const $loutinav = $('#loutinav');
    const $louti = $('#loutinav li');
    const $louceng = $('#needLazyLoad .eat_all_world');
    const $last = $('.last');
    // console.log($(document).scrollTop());
    // console.log($louceng); 

    // 楼梯效果

    // 显示楼梯
    $(window).on('scroll', function () {
        let $scrolltop = $(window).scrollTop();
        if ($(window).scrollTop() > 1300) {
            $loutinav.show();
        } else {
            $loutinav.hide();
        }

        // 滚轮事件
        $louceng.each(function (index, element) {
            // console.log($louceng.eq(index).offset().top);
            let $loucengtop = $louceng.eq(index).offset().top;
            if ($loucengtop >= $scrolltop) {
                $louti.not('.last').removeClass('active');
                $louti.not('.last').eq(index).addClass('active');

                return false;
            }
        })
    })
    // 点击楼梯进行跳转
    $louti.not('.last').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        let $loucengtop = $louceng.eq($(this).index()).offset().top;
        $('html,body').animate({
            scrollTop: $loucengtop
        })
    })

    // 回到顶部
    $last.on('click', function () {
        $('html,body').animate({ //兼容写法：将滚动条的top值给html和body
            scrollTop: 0
        });
    })

    // 固定搜素框
    $(window).on('scroll', function () {
        let $scrolltop = $(window).scrollTop();
        if ($(window).scrollTop() > 600) {
            $hdSearchForm.show();
        } else {
            $hdSearchForm.hide();
        }
    })


}()

;
! function () {
    // 轮播图
    const $banner = $('.banner');
    const $lunbo_ul = $('.lunbo_ul');
    const $images = $('.lunbo_ul .lunbo_li');
    const $tabs = $('.lb_tab li')
    //鼠标悬停切换图片
    let $first = $images.first().clone();
    let $lastone = $images.last().clone();
    console.log($lastone);
    console.log($first);

    $lunbo_ul.append($first);
    $lunbo_ul.prepend($lastone);
    $lunbo_ul.css('left', '-1520px')
    $tabs.on('mouseover', function () {
        $(this).addClass('cur').siblings().removeClass('cur');

    })
}()