// JavaScript Document

//turn on current location sign
/*
var pathname = window.location.pathname;
var filename = pathname.substring(pathname.lastIndexOf('/')+1);
var originalImg = $('a[href="gallery-01.html"]').attr("href");
alert(originalImg);
var swapImg = originalImg.slice(0,-1);
*/
$(function(){
    $('#text-right a').each(function(){ // 把 #text-right 下面的每一個 a 拿出來
        var href = $(this).attr('href'); // 取得 a 的 href 值
        // 檢查目前的網址是不是包含了 href 的值
        // 如果是的話, 把 a 裏面的 img 的網址換掉
        if(location.href.match( href )){ 
            var new_src = $('img',this).attr('src').replace(/1.png/, '2.png');
            $('img',this).attr('src', new_src );
        }
    })
})
