;
! function () {
    const username = $('#un');
    const password = $('#pwd');
    const btn = $('#login_button');
    // console.log(username.val());
    btn.on('click', function () {
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8080/Number-One-Shop/php/login.php",
            data: {
                username: username.val(),
                password: password.val()
            },
            dataType: "json",
            success: function (response) {
                if (response.msg === '登陆成功') {
                    alert('登陆成功');
                    // console.log(arrname)
                    location.href = "numberOneShop.html";
                } else {
                    alert('登陆失败');
                    // username.html() ='';
                    // password.val() ='';
                }
            }
        });
    })
}()


    ;
! function () {
    const $btn = $('#login_button');
    //通过 cookie  进行存储 num 和 id；
    var name = '';
    function cookietoarray() {
        if (getcookie('cookiename')) {
            name = getcookie('cookienum');
        }
    }

    // 判断当前商品是否存在购物车
    $btn.on('click', function () {
            name = $('#un').val();
            addcookie('cookiename',name.toString(),20);
    })
}()
