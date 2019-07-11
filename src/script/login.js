;!function(){
    const username = $('#un');
    const password = $('#pwd');
    const btn = $('#login_button');
    console.log(username.val());
    btn.on('click',function(){
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:8080/Number-One-Shop/php/login.php",
            data: {
                username:username.val(),
                password:password.val() 
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
            }
        });
    })
}()