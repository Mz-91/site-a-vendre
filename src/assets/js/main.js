$(document).ready(function() {
 
  var time = 7; // time in seconds
 
  var $progressBar,
      $bar,
      $elem,
      isPause,
      tick,
      percentTime;
 
    //Init the carousel
    $("#carousel1").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      autoplay: true,
      dots:false,
      afterInit : progressBar,
      afterMove : moved,
      startDragging : pauseOnDragging,
      responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,

    },
    1000: {
      items: 1,

    }
  }
    });
 
    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }
 
    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    }
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item
          $elem.trigger('owl.next')
        }
      }
    }
 
    //pause while dragging
    function pauseOnDragging(){
      isPause = true;
    }
 
    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }
 
    //uncomment this to make pause on mouseover
    // $elem.on('mouseover',function(){
    //   isPause = true;
    // })
    // $elem.on('mouseout',function(){
    //   isPause = false;
    // })
 
});

$(window).scroll(function() {
    var nav = $('.navbar ');
    var top = 200;
    if ($(window).scrollTop() >= top) {

        nav.addClass('fixed');

    } else {
        nav.removeClass('fixed');
    }
});

$(window).scroll(function(){
if($(document).scrollTop()>200){
$("#fixphone").addClass('show1');
}
else{
$("#fixphone").removeClass('show1');
}
});

function openModal() {
document.getElementById("modal").style.top="188px"
};

openModal()

function closeModal() {
  document.getElementById("modal").style.top="-600px"
};


(function() {
  var link = document.createElement("link");
  link.type = "text/css";
  link.href = "https://widget.treatwell.fr/common/venue-menu/css/widget-button.css";
  link.rel = "stylesheet";
  link.media = "screen";
  document.getElementsByTagName("head")[0].appendChild(link);
})();

function openBookingWindow(url) {
  var width = window.innerWidth - width;
  var height = window.innerHeight - height;
  var left = (window.innerWidth - width) / 2;
  var top = (window.innerHeight - height) / 2;
  var options = 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left;
  window.open(url, '_blank', options);
}
