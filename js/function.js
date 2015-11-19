$(window).load(function() {
    // Animate loader off screen
    $(".loader").fadeOut("slow");
  });

// by inet-pwnZ/
// Youtube API combined with Angular
// ****** Youtube API Load
    var tag = document.createElement('script');
    tag.src = "http://www.youtube.com/iframe_api"
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// jQuery Click Events and Function
// ****** Active States [Buttons] + Function (Play,Pause)

//$('.enterpage').show();
$(function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
});
$(document).ready(function() {
  $('.enterpage').click(function() {
    $(this).slideUp(300);
  });
  $('.random').click(function() {
      var $this = $(this);
    $this.toggleClass('active');
    // Run Function
  });
  $('.loop').click(function() {
      var $this = $(this);
    $this.toggleClass('active');
    // Run Function
  });
      function showplay() {
        $('.pause').removeClass('active');
        $('.play').addClass('active');
        // Run Function
      }
      function showpause() {
        $('.play').removeClass('active');
        $('.pause').addClass('active');
        // Run Function
      }
      function nextTrack() {
        // Code
      }
      function prevTrack() {
        // Code
      }
  $('.pause').addClass('active');
  $('.pause').click(function() {
      showplay();
  });
  $('.play').click(function() {
      showpause(); 
  });
  $('.center li').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children();
    $siblings.removeClass('active');
    $this.addClass('active');
  });
  $('.wiedergabenliste ul li').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children();
    $siblings.removeClass('active');
    $this.addClass('active');
  });
    $('.menu').click(function() {
    $('.menu ul').toggleClass('active');
  });
  $('table tr').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children();
    $siblings.removeClass('active');
    $this.addClass('active');
  });
});
 $('header .menu').hover(function() {
   $('.hover').toggle("slide");
 });
// JS Table Column Resize
$(function() {
    $( "#resizable" ).resizable({
      minHeight: 540,
      minWidth: 750,
      animate: true
    });
  });


// Thats where magic happens and the Page gets Dynamic (SPA)
// ****** AngularJS Codes (Data binding)
var ytApp = angular.module('ytApp', []);

// Config Routing (Not needed yet)
ytApp.config

// Controllers Playlist
ytApp.controller('trackInfo', function ($scope) {
  $scope.mlg = [
    { num: '1', title: 'Burst ft. GMCFOSHO', dura: '2:47', interpret: '12th Planet, Skrillex', url: 'gOAoUM8ci04'},
    { num: '2', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '3', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '4', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '5', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '6', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '7', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '8', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '9', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '10', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '11', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '12', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '13', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '14', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '15', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '16', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '17', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '18', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '19', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '20', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '21', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '22', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '23', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '24', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '25', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '26', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '27', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '28', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '29', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'},
    { num: '30', title: 'Alive (Pegboard Nerds Remix)', dura: '5:08', interpret: 'Krewella', url: 'VKnea1F87P4'}
  ];
});
// Enterpage Controller
ytApp.controller('info', function ($scope) {
  $scope.thx = [
    { name: 'DEVTips youtube'},
    { name: 'Trevis :)'}
  ];
  $scope.features = [
    { feat: 'jQuery Active States'},
    { feat: 'Angular Routing/Controller (SPA)'},
    { feat: 'YouTube iFrame API'},
    { feat: 'Externel Controll through youtube API'}
  ];
});

// End :)


