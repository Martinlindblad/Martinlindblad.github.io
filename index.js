let svg = document.getElementsByTagName('svg')
// svg.addEventListener('click' , function())
window.addEventListener('load', svgAni());

function svgAni(){
    svg[0].style.opacity = '1';
}

$('.burger, .overlay').click(function(){

     $('.burger').toggleClass('clicked');

     $('.overlay').toggleClass('show');

     $('nav').toggleClass('show');

     $('body').toggleClass('overflow');
     
    });
     $(document).ready(function(){
       $("#submenu").click(function(){
         $(".drop").animate({
           height: 'toggle'
          });
        });
      });
      
      function typeEffect(element, speed) {
        var text = $(element).text();
        $(element).html('');
        
        var i = 0;
        var timer = setInterval(function() {
                if (i < text.length) {
                  $(element).append(text.charAt(i));
                  i++;
                } else {
                  clearInterval(timer);
                }
              }, speed);
      }
      
      $( document ).ready(function() {
        var speed = 30;
        var delay = $('h1').text().length * speed + speed;
        typeEffect($('h1'), speed);
        setTimeout(function(){
          $('#me').css('display', 'inline-block');
          typeEffect($('#me'), speed);
        }, delay);
        
           
        function about() {
                let position2 = $('#me-pic').offset().top;
                let position3 = $('#work').offset().top;
                let position4 = $('#contact-h2').offset().top;
             
                $('body,html').animate({
                  scrollTop: position2
                }, 1000, 'swing');
                return false;
                $('body,html').animate({
                  scrollTop: position3
                }, 1000, 'swing');
                return false;
                $('body,html').animate({
                  scrollTop: position4
                }, 1000, 'swing');
                return false;
              }
      });

      // ____________________Header animation_________________________

      anime.timeline({loop: true})
      .add({
        targets: '.ml5 .letters-left',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
      }).add({
        targets: '.ml5 .letters-right',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
      }).add({
        targets: '.ml5',
        opacity: [1,0],
        duration: 5000,
        delay: 5000,
        translateX: ["-3em", 1],
        easing: "easeOutExpo",
      })
      
      .add({
        targets: '.ml5',
        opacity: [1,0],
        duration: 5000,
        delay: 4000,
        translateX: ["-3em", 1],
        easing: "easeOutExpo",
      });
  
      // function getRandomColor() {
      //   var letters = '0123456789ABCDEF';
      //   var color = '#';
      //   for (var i = 0; i < 6; i++) {
      //     color += letters[Math.floor(Math.random() * 16)];
      //   }
      //   return color;
      // }
      
      
      
      // function setRandomColor() {
      //   $(".m15").css("background-color", getRandomColor());
      // }

