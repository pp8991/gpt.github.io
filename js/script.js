// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    document.getElementById("myBtn").style.display = "block";
    setTimeout(function () {document.getElementById("myBtn").style.display = "none";}, 5000);
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
} 


$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
function home(){
     $("#body_content").load("htm/home.htm");
     window.location = '#home';
     document.getElementById('b_body').scrollIntoView();
}
function about(){
     $("#body_content").load("htm/about.htm");
     window.location = '#about';
     document.getElementById('b_body').scrollIntoView();
}
function notice(){
     $("#body_content").load("htm/notice.htm");
     window.location = '#notice';
     document.getElementById('b_body').scrollIntoView();
}
function gallary(){
     $("#body_content").load("htm/gallary.htm");
     window.location = '#gallary';
     document.getElementById('b_body').scrollIntoView();
}
function proffdetails(){
     $("#body_content").load("htm/proffdetails.htm");
     window.location = '#proffdetails';
     document.getElementById('b_body').scrollIntoView();
}