// $(document).ready(function() {
// 	$("a[href*=#]").on('click', function(e) {

// 	   e.preventDefault();
// 	   var hash = this.hash;

// 	   $('html, body').animate({
// 	       scrollTop: $(this.hash).offset().top
// 	     }, 1000, function(){

// 	       window.location.hash = hash;
// 	     });

// 	});
// });

function animate(elem,style,unit,from,to,time,prop) {
    if( !elem) return;
    var start = new Date().getTime(),
        timer = setInterval(function() {
            var step = Math.min(1,(new Date().getTime()-start)/time);
            if (prop) {
                elem[style] = (from+step*(to-from))+unit;
            } else {
                elem.style[style] = (from+step*(to-from))+unit;
            }
            if( step == 1) clearInterval(timer);
        },25);
    elem.style[style] = from+unit;
}

window.onload = function () {
    var target = document.getElementById("aboutgo");
    animate(document.body, "scrollTop", "", 0, target.offsetTop, 2000, true);
};