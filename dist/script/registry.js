"use strict";!function(){var s=$("#userName"),t=$("#pwd"),a=$("#phone"),e=$("#register_button"),r=$("#namereg");s.on("input",function(){/^\w{6,14}$/.test($(this).val())?(r.css("color","green"),r[0].innerHTML="√",e.prop("disabled",!1)):(r.css("color","red"),r[0].innerHTML="用户名格式不正确,请重新输入",s[0].innerHTML="",e.attr("disabled","disabled"))});var n=$("#phonereg");a.on("input",function(){if(!/^1[3456789]\d{9}$/.test(a.val()))return n[0].innerHTML="手机号码有误，请重填",n.css("color","red"),e.attr("disabled","disabled"),!1;n[0].innerHTML="√",n.css("color","green"),e.prop("disabled",!1)});var o=$("#passreg");t.on("input",function(){console.log(r.val()),/^\w{6,15}$/.test($(this).val())?(o.css("color","green"),o[0].innerHTML="√",e.prop("disabled",!1)):(o.css("color","red"),o[0].innerHTML="密码格式不正确,请重新输入",e.attr("disabled","disabled"))}),e.on("click",function(){var e=!0,r=!0,n=!0;""==s.val()&&(e=!1),""==t.val()&&(r=!1),""==a.val()&&(n=!1),e&&r&&n?$.ajax({type:"post",url:"http://127.0.0.1:8080/Number-One-Shop/php/registry.php",data:{username:s.val(),phone:a.val(),password:t.val()},dataType:"json",success:function(e){"注册成功"===e.msg?(alert("注册成功"),location.href="login.html"):"用户名已存在"===e.msg&&(alert("用户名已存在,请重新注册"),location.href="registry.html")}}):alert("用户名或者密码不能为空")})}();