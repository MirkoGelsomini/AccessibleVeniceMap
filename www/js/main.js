var player;
var currentfile=null;

$(window).on("load", init());

function init() {

    $('img[usemap]').rwdImageMaps();
    window.player = $("#player");

    window.setTimeout(function () {
        $("#loading").hide();
    }, 10000);
    
    $("body").on("click", function () {
        requestFullScreen();
    });

    $("#loading").on("click", function () {
        $("#loading").hide();
        requestFullScreen();
    });

    $("area").on("click", function () {
        requestFullScreen();
        
        var mp3=$(this).attr("alt");
        path = "/android_asset/www/sounds/" + mp3 + ".mp3";
        console.log("esegui audio " + mp3 + ".mp3");
        
        if(window.currentfile==null || window.currentfile!=mp3){
            window.player.get(0).pause();
            window.player.attr("src", path);
            window.player.get(0).play();
            window.currentfile=mp3;
        }else if(window.currentfile==mp3){
            window.player.get(0).pause();
            window.currentfile=null;
        }
        

    });
}

function requestFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}