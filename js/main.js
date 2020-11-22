
window.onscroll = function() {myFunction()};


function myFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("backTotop").style.display = "block";
  } else {
    document.getElementById("backTotop").style.display = "none";
  }
}

document.getElementById("backTotop").addEventListener('click',() => {
    // window.scrollTo(0,0);
    window.scrollTo({
        top: 0,
        left: 0,
       behavior: 'smooth',
    });
});