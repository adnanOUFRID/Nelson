$(document).ready(function(){
    var winH=$(window).height();
    var upperH=$('.upper-bar').innerHeight();
    var navH =$('.navbar').innerHeight();
    $('.slider').height(winH - (upperH + navH));
})