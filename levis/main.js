

function pageLoadedHandler(){
    console.log("Page loaded, running banner.");

    var button = document.getElementById('button');
    var bg=document.getElementById('bg').firstChild;
    var t1=document.getElementById('t1').firstChild;
    var t2=document.getElementById('t2').firstChild;
    var t3=document.getElementById('t3').firstChild;
    var t4=document.getElementById('t4').firstChild;
    var cta=document.getElementById('cta').firstChild;
    var ctaOver=document.getElementById('ctaOver').firstChild;
    var logo2x=document.getElementById('logo2x').firstChild;

    button.addEventListener('click', onExitHandler, false);
    TweenLite.set(bg, { y: 0, transformOrign: '100% 100%'});


        bg.style.opacity = 1;
        logo2x.style.opacity = 1;
        var bgEase = Power1.easeInOut;
        var d = 0.5;

        //t1
        TweenLite.to(t1, 0.5, { opacity:1,  delay:d });
        d += 1.5;
        TweenLite.to(t1, 0.5, { opacity:0,  delay:d });
        d += 0.8;

        //t2
        TweenLite.to(t2, 0.5, { opacity:1,  delay:d });
        d += 1.5;
        TweenLite.to(t2, 0.5, { opacity:0,  delay:d });
        d += 0.8;


        //bg move
        TweenLite.to(bg, 1.5, { css:{x:-300},  delay:d ,ease:bgEase});
        d += 1.4;


        //t3
        TweenLite.to(t3, 0.5, { opacity:1,  delay:d });
        d += 1.5;
        TweenLite.to(t3, 0.5, { opacity:0,  delay:d });
        d += 0.5;


        //t4
        TweenLite.to(t4, 0.5, { opacity:1,  delay:d });
        d += 0.8;

        TweenLite.to(cta, 0.5, { opacity:1,  delay:d });

        d += 0.5;

        TweenLite.delayedCall(d, function() {
            button.addEventListener('mouseover', function() {
                ctaOver.style.opacity = 1;
                cta.style.opacity = 0;
            }, false);
            button.addEventListener('mouseout', function() {
                cta.style.opacity = 1;
                ctaOver.style.opacity = 0;
            }, false);
        });

}

onExitHandler = function(e){
    // Enabler.exit('HTML5_Clickthrough', 'http://www.google.com/doubleclick/');
    window.open("http://www.google.com");
}
pageLoadedHandler();
