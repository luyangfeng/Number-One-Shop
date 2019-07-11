;!function(){
    let $goods = $('.item-list');
    const $item = $('.goods-item');
    function showgoods(id,num){
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:8080/Number-One-Shop/php/cart.php",
            dataType: "json",
        }).done(function(response){
            $.each(response,function(index,value){
                if(id == value.id){
                    var $clonebox = $item.clone(true,true);
                    $clonebox.find('.goods-pic').find('img').attr('src',value.url);
                    $clonebox.find('.goods-d-info').find('a').html(value.title);
                    $clonebox.find('.b-price').find('strong').html(value.price);
                    $clonebox.find('.quantity-form').find('input').val(num);
                    $clonebox.find('.b-sum').find('strong').html((value.price*num).toFixed(2));
                    $clonebox.css('display','block');
                    $goods.append($clonebox);
                }
            })
        });
    }

    if(getcookie('cookiesid') && getcookie('cookienum')){
		var s=getcookie('cookiesid').split(',');//数组sid
		var n=getcookie('cookienum').split(',');//数组num
		$.each(s,function(i,value){
			showgoods(s[i],n[i]);
		});
	}
    
    // 计算总价
}()