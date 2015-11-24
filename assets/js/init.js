$(document).ready(function() {
    $('#fullpage').fullpage({
    	css3: true,
        scrollingSpeed: 5,
        autoScrolling: false,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        scrollOverflow: false,
        touchSensitivity: 5,
        normalScrollElementTouchThreshold: 5,

        // sectionsColor: ['#81d5f2','#344451','#81d5f2','#e8e6df','#81d5f2','#344451','#fee066']


    });

//     $.fn.fullpage.setAutoScrolling(false);

    var width = Math.floor($(window).width()/2);
    var height = Math.floor($(window).height()/2);

    var w = $(window).width();
    var h = $(window).height();
    console.log(w);
    // document.getElementById('section1').setAttribute("style","width:"+w+"px;"+"height:"+h+"px"+";background-color:blue;")
    // document.getElementById('section2').setAttribute("style","width:"+w+"px;"+"height:"+h+"px"+";background-color:green;")
    // document.getElementById('section3').setAttribute("style","width:"+w+"px;"+"height:"+h+"px"+";background-color:red;")
    // document.getElementById('section4').setAttribute("style","width:"+w+"px;"+"height:"+h+"px"+";background-color:yellow;")

    // document.getElementsByClassName("section").setAttribute("style","width:"+w+"px");
    // document.getElementsByClassName("section").style.width = $(window).width()
    // document.getElementsByClassName("section").style.height = $(window).height()    

    // document.getElementById('ifrm').src = "http://clips.animatron.com/9d2aa5da1421219c96c9684a3835846a?w="+width+"&h="+height+"&autoPlay=1&r=1&c=false&rc=blue&bg=#81d5f2";
    // document.getElementById('ifrm').src = "http://clips.animatron.com/a99b8ebd771b54afd510244369ca5834?w="+w+"&h="+h+"&autoPlay=1&r=1";

    $(".progress-bar-success").animate({
            width: "30%"
        },100);

    $(".progress-bar-info").animate({
            width: "70%"
        },100);
    

});