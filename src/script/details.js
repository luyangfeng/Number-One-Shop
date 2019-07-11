;
! function () {
    // 数据渲染
    let sid = location.search.substring(1).split('=')[1];
    const $details = $('.details');
    const $spic = $('.spic');
    const $datu = $('.spic img');
    const $bf = $('.bf');
    const $bfpic = $('.bf img');
    const $price = $('.price');
    const $title = $('.title');
    const $inp = $('.goodsnum input');
    const $movelist = $('.movelist ul');
    const $sf = $('.sf');
    const $bpic = $('.bpic');
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:8080/Number-One-Shop/php/details.php",
        data: {
            id: sid
        },
        dataType: "json",
        success: function (response) {
            // console.log(response.url);
            $datu.attr('src', response.url);
            $bfpic.attr('src', response.url);
            $title[0].innerHTML = response.title;
            $price[0].innerHTML = response.price;
            $inp.attr('max', response.num);
            // console.log(response.urls)
            //拼接小图列表
            // response.urls.split(',');
            let $str = '';
            for (let i = 0; i < response.urls.split(',').length; i++) {
                $str += '<li><img src="' + response.urls.split(',')[i] + '"></li>';
            }
            $movelist[0].innerHTML = $str;
        }
    });

    // 放大镜
    $spic.on('mouseover', function () {
        $sf.css('visibility', 'visible');
        $bf.css('visibility', 'visible');

        $sf.css('width', $spic.width() * $bf.width() / $bfpic.width());
        $sf.css('height', $spic.height() * $bf.height() / $bfpic.height());

        let $bili = $bpic.width() / $spic.width();

        $spic.on('mousemove', function (ev) {
            var ev = ev || window.event;
            let $sfleft = ev.pageX - $details.offset().left - $sf.width() / 2;
            let $sftop = ev.pageY - $details.offset().top - $sf.height() / 2;
            // console.log($sftop)
            if ($sfleft < 0) {
                $sfleft = 0;
            } else if ($sfleft >= $spic.width() - $sf.width() - 2) {
                $sfleft = $spic.width() - $sf.width() - 2;
            }

            if ($sftop < 0) {
                $sftop = 0;
            } else if ($sftop >= $spic.height() - $sf.height() - 2) {
                $sftop = $spic.height() - $sf.height() - 2;
            }

            $sf.css('left', $sfleft);
            $sf.css('top', $sftop);

            $bpic.css('left', -$sfleft * $bili);
            $bpic.css('top', -$sftop * $bili);
        })
        $spic.on('mouseout', function () {
            $sf.css('visibility', 'hidden');
            $bf.css('visibility', 'hidden');
        })
    })



    //小图效果
    // 点击小图切换大图
    $movelist.on('click', 'li', function (ev) {
        // var urls = response.urls.split(',');
        var imgurl = $(this).find('img').attr('src');
        // console.log(imgurl);
        $datu.attr('src', imgurl);
        $bpic.attr('src', imgurl);
    })

    var $num = 6; //放大镜显示6张。
    $('#right').on('click', function () {
        // alert(1);
        var $list = $('.movelist li'); //7
        // console.log($list);
        if ($list.length > $num) {
            $num++;
            $('#left').css('color', '#333');
            if ($list.length == $num) {
                $('#right').css('color', '#fff');
            }
            $('.movelist').animate({
                left: -($num - 6) * $list.eq(0).innerWidth()
            })
        }
    });

    $('#left').on('click', function () {
        var $list = $('.movelist li'); //7
        if ($num > 6) {
            $num--;
            $('#right').css('color', '#333');
            if ($num <= 6) {
                $('#left').css('color', '#fff');
            }
            $('.movelist').animate({
                left: -($num - 6) * $list.eq(0).innerWidth()
            })
        }
    });
}()

;
! function () {
    const $btn = $('#btn');
    //通过 cookie  进行存储 num 和 id；
    var arrsid = [];
    var arrnum = [];

    function cookietoarray() {
        if (getcookie('cookiesid') && getcookie('cookienum')) {
            arrsid = getcookie('cookiesid').split(',');
            arrnum = getcookie('cookienum').split(',');
        }
    }

    // 判断当前商品是否存在购物车
    $btn.on('click', function () {

        let $sid = location.search.substring(1).split('=')[1];
        cookietoarray();

        if($.inArray($sid,arrsid) != -1){
            let num = parseInt(arrnum[$.inArray($sid,arrsid)]) + parseInt($('#sum').val());
            arrnum[$.inArray($sid,arrsid)] = num ;
            addcookie('cookienum',arrnum.toString(),20);
        }else{
            arrsid.push($sid);
            addcookie('cookiesid',arrsid.toString(),20);
            arrnum.push($('#sum').val());
            addcookie('cookienum',arrnum.toString(),20);
        }
        location.href = "cart.html";
    })
}()