/* Developed By: Akshay Kumar Gupta*/
/* Website: http://www.funspellz.com*/


$(document).ready(function() {
    var count = 0;
    if(window.innerHeight > window.innerWidth){
   alert('Please Use Landscape Mode!! ');
}
    $('.ad').fadeOut();
    $('.adclose').fadeOut();
    $('.resize').hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=10%', width: '+=10%'});
}
function returnToOriginalSize() {
    $(this).css({height: "", width: ""});
}
    
$('.resize').click(function(){


count = count+1;    
    
 if(count > 65){

$('.ad').fadeIn();
$('.adclose').fadeIn();    
 }   

});

$('.adclose').click(function(){

$('.ad').fadeOut();
$('.adclose').fadeOut();
count =0;
});
 
});