// VANILLA JS
/**
 * This function allow to set the heihgt of the #main-content, the goal is to have the footer at the bottom of the page even if there's nothing before
*/
// function setMainContentHeight() {
//     // Get the footer height
//     let footerH = document.getElementById('main-footer').getBoundingClientRect().height;
//     console.log(footerH);
//     // Get the header height
//     let headerH = document.getElementById('main-header').getBoundingClientRect().height;
//     console.log(headerH);
//     // Get the viewport height
//     let screenH = window.innerHeight;
//     console.log(screenH);
//     // Addition of all heights
//     let h = screenH - (footerH + headerH);
//     console.log(h);
//     // Set the main-content height
//     let mainElt = document.getElementById('main-content');
//     mainElt.style.minHeight = h + "px";
//     console.log(document.getElementById('main-content').getBoundingClientRect().height);
// }

// document.addEventListener("DOMContentLoaded", (e)=> {
//     setMainContentHeight();
// });

// window.addEventListener("resize", function(e){
//     setMainContentHeight();
// });

$(function(){

    /**
     * This function allow to set the heihgt of the #main-content, the goal is to have the footer at the bottom of the page even if there's nothing before
     */
    function setMainContentHeight() {
        // Get the footer height
        let footerH = $('footer#main-footer').outerHeight();
        // Get the header height
        let headerH = $('header#main-header').height();
        // Get the viewport height
        let screenH = $(window).height();
        // Addition of all heights
        let H = screenH - (footerH + headerH);
        // Set the main-content height
        $('div#main-content').css("min-height", H);
    }

    // When document loaded
    $(document).ready(function(){
        // *** Set the height of the main-content ***
        setMainContentHeight();
    });

    /**
     * This function listen the resize of the window.
     */
    $(window).resize(function() {
        // *** Set the height of the main-content ***
        setMainContentHeight();
    });

});
