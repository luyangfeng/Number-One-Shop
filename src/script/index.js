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
    let num = 0;
    //鼠标悬停切换图片
    let $first = $images.first().clone();
    let $lastone = $images.last().clone();
    // console.log($lastone);
    // console.log($first);
    $lunbo_ul.append($first);
    $lunbo_ul.prepend($lastone);
    $lunbo_ul.css('left', '-1520px')
    let $liwidth = $images.eq(0).width();
    $lunbo_ul.width(($images.length + 2) * $liwidth);

    $tabs.hover(function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        let num = $(this).index();
        // console.log($(this).index());
        $lunbo_ul.css('left',-$liwidth * ($(this).index() + 1));
        // return num;
    },function(){
        // 鼠标移出自动播放
        //自动播放
        
    }) 
    // console.log(num);
    let timer = setInterval(function(){
        num++;
        if(num === $images.length){
            $tabs.eq(0).addClass('cur').siblings().removeClass('cur');
        }else{
            $tabs.eq(num).addClass('cur').siblings().removeClass('cur');
        }
        $lunbo_ul.animate({
            left:-(num+1) * $liwidth
        },100,function(){
            if(num === $images.length){
                $lunbo_ul.css('left',-$liwidth);
                num = 0;
            }
        })
    },2000)
   
}()

;!function(){
    //数据库的渲染
    let $lists = $('#floor_knowU .under_sp_list');
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:8080/Number-One-Shop/php/index1.php",
        dataType: "json",
        success: function (response) {
            // console.log(response);
            let str = '';
            for(let i = 0 ; i <response.length; i++ ){
                str = `
                <li class="under_list_single">
                    <div class="under_pro_pic">
                        <img class="sin_img sin_img_big" src="${response[i].url}" alt="">
                    </div>
                    <p class="single_tit text_limit_limp">${response[i].title}</p>
                    <p class="single_money">￥<span>${response[i].price}</span></p>
                    <div class="pro_tag clearfix">
                    </div>
                    <div class="sing_btn_con">
                        <div class="sin_hove_btn sin_gw">
                            <a class="sin_hove_btn_a item-cart">
                                <i class="glyphicon glyphicon-shopping-cart"></i>
                            </a>
                        </div>
                        <div class="sin_hove_btn sin_xs">
                        <a href="javascript:;" target="_blank" class="sin_hove_btn_a">找相似</a>
                        </div>
                    </div>
                    <a class="border_line" href="details.html?sid=${response[i].id}" target="_blank"></a>
                </li>
                `;
                $lists[0].innerHTML += str;
            }
            
        }
    });
}()