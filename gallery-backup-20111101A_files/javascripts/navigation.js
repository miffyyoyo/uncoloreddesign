// JavaScript Document

//turn on current location sign
var pathname = window.location.pathname;
var navi_img = $('a[href='+pathname+']').children().attr("src");
$('a[href='+pathname+']').children().attr("src","");

// property -> blah ~ 02.png