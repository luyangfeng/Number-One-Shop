;
! function () {
    const username = $('#userName');
    const password = $('#pwd');
    const phone = $('#phone');
    const btn = $('#register_button');
    const namereg = $('#namereg');
    username.on('input', function () {
        var reg = /^\w{6,14}$/;
        // console.log(namereg.val());
        if (reg.test($(this).val())) {
            // namereg[0].innerHTML = '√';
            namereg.css('color', 'green');
            namereg[0].innerHTML = '√';
            btn.prop('disabled', false);
        } else {
            namereg.css('color', 'red');
            // namereg.removeClass('glyphicon glyphicon-ok');
            namereg[0].innerHTML = '用户名格式不正确,请重新输入';
            username[0].innerHTML = '';
            btn.attr('disabled', 'disabled');

        }
    })

    const phonereg = $('#phonereg');
    phone.on('input', function () {
        if (!(/^1[3456789]\d{9}$/.test(phone.val()))) {
            phonereg[0].innerHTML = '手机号码有误，请重填';
            phonereg.css('color', 'red');
            btn.attr('disabled', 'disabled');
            return false;
        } else {
            phonereg[0].innerHTML = '√';
            phonereg.css('color', 'green');
            btn.prop('disabled', false);
        }
    })

    const passreg = $('#passreg');
    password.on('input', function () {
        var reg = /^\w{6,15}$/;
        console.log(namereg.val());
        if (reg.test($(this).val())) {
            // namereg[0].innerHTML = '√';
            passreg.css('color', 'green');
            passreg[0].innerHTML = '√';
            btn.prop('disabled', false);
        } else {
            passreg.css('color', 'red');
            // namereg.removeClass('glyphicon glyphicon-ok');
            passreg[0].innerHTML = '密码格式不正确,请重新输入';
            btn.attr('disabled', 'disabled');
            // username[0].innerHTML = '';
        }
    })

    btn.on('click', function () {
        var m1 = true;
        var m2 = true;
        var m3 = true;
        if (username.val() == "") {
            m1 = false;
        }
        if (password.val() == "") {
            m2 = false;
        }
        if (phone.val() == "") {
            m3 = false;
        }
        if (m1 && m2 && m3) {
            $.ajax({
                type: "post",
                url: "http://127.0.0.1:8080/Number-One-Shop/php/registry.php",
                data: {
                    username: username.val(),
                    phone: phone.val(),
                    password: password.val()
                },
                dataType: "json",
                success: function (response) {
                    if (response.msg === '注册成功') {
                        alert('注册成功');
                        location.href = "login.html";
                    } else if (response.msg === '用户名已存在') {
                        alert('用户名已存在,请重新注册');
                        location.href = "registry.html";
                    }
                    // console.log(response);
                }
            });
        } else {
            alert("用户名或者密码不能为空");
            // return false;
        }
    })
   

}()