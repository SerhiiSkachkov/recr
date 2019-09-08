
'use strict';
$(document).ready(function(){   

if ($('.js-hamburger').length) {
      $('.js-hamburger').click(function(){
        var nav = $('.nav-aside')
        nav.toggleClass('nav-aside--open');
        $('.js-hamburger').toggleClass('nav-opacity');
        $('body').toggleClass('body-menu--open');
    }); 
};
$('.js-hamburger-menu').click(function(){
		var nav = $('.nav-aside');
        nav.toggleClass('nav-aside--open');
      $('.js-hamburger').toggleClass('nav-opacity');
	    $('body').toggleClass('body-menu--open');
	})
});

 $('.slider').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: true,
 	asNavFor: '.slider-nav-thumbnails',
 });

 $('.slider-nav-thumbnails').slick({
 	slidesToShow: 11,
 	slidesToScroll: 1,
 	asNavFor: '.slider',
 	dots: false,
 	focusOnSelect: true,
 	adaptiveHeight: true,
  speed: 50
 });

 //remove active class from all thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

 //set active class to first thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});

//UPDATED 
  
$('.slider').on('afterChange', function(event, slick, currentSlide){   
  $('.content-slider').hide();
  $('.content-slider[data-id=' + (currentSlide + 1) + ']').show();
});

$('.js-patners-slider').slick({
    dots: true,
    autoplay: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

$('.js-inform-sm').slick({
  dots: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]

})

$('.js-recruting-sm').slick({
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
})

$('.js-comment').slick({
    dots: true,
    slidesToShow: 2,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
})
$('.js-trigger-content').click(function(e){
  e.preventDefault();
  var parentBox = $(this).closest('.slick-list');
  $(this).children().toggleClass('fa-chevron-up');
  $(this).siblings('.dots').toggle();
  $(this).siblings('.comment-hidden').toggleClass('comment-hidden-show');

  parentBox.height('auto');
});
$('.js-scrollbar').mCustomScrollbar({
    axis:"x",
    theme:"dark-thin",
    autoExpandScrollbar:true,
    advanced:{autoExpandHorizontalScroll:true}
});

$('.js-comment').on('afterChange', function(event, slick, currentSlide){   
  $('.comment-hidden').removeClass('comment-hidden-show');
  $('.js-trigger-content').children().removeClass('fa-chevron-up');
  $('.dots').show();
});

$('.slider-cap').slick({
  arrows: false,
  dots: false,
  slidesToShow: 1,
  autoplay: true
})
$(document).ready(function() {
  $("a.fancybox").fancybox({
        touch: {
            vertical: false
        }
  })
});
function checkFieldFilling(label) {

  if (label.closest('.form-group').find('.form-control:first').hasClass('scroll-wrapper')) {
    var inp = label.closest('.form-group').find('.form-control:not(.scroll-wrapper)');
    var inpVal = inp.val();
    var inpWrap = label.closest('.form-group');

    inp.on('focus',function(e) {
      inpWrap.addClass('is-filled');
      $(this).closest('div.form-control').addClass('focus');
    });

    inp.on('blur',function(e) {
      $(this).closest('div.form-control').removeClass('focus');
    });

    if (inpVal) {
      inpWrap.addClass('is-filled');
    } else {
      inpWrap.removeClass('is-filled');
    }
  } else {
    var inpWrap = label.closest('.form-group');
    var inpVal = label.closest('.form-group').find('.form-control').val();

    if (inpVal) {
      inpWrap.addClass('is-filled');
    } else {
      inpWrap.removeClass('is-filled');
    }
  }
}
if ($('label.swim').length > 0) {
  $('label.swim').each(function() {
    checkFieldFilling($(this));
  });
  $('label.swim').closest('.form-group').find('.form-control').blur(function() {
    checkFieldFilling($(this));
  });
}

$('.abt-slider').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
})

$(document).ready(function(){

        function isVisible(elem) {
            var winTop = $(window).scrollTop(),
                elemTop = elem.offset().top - 500;
            
            console.log(elem.offset())
            console.log(winTop, elemTop)
            return (winTop >= elemTop);

        }

        var myChart = echarts.init(document.getElementById('totalIncome3'));
        var myChart2 = echarts.init(document.getElementById('totalIncome2'));
        var myChart3 = echarts.init(document.getElementById('totalIncome'));

        var iSmyChart = false;
        var iSmyChart2 = false;
        var iSmyChart3 = false;

    $(window).scroll(function() {

        $(".inform").each(function(){
        if (isVisible($(this))){    
            if (iSmyChart == false) {
                iSmyChart = true
                setTimeout(function(){
                    var chartData = {"rate":["1","4.5","5.4","10", "10.4", "9.6"],"date":["","","","",""]};
                    var date = chartData.date;
                    var rate = chartData.rate;
                    var option = {
                        grid: {
                            left: '-35',
                            right: '-50',
                            bottom: '-45',
                            top: '10',
                            containLabel: false
                        },
                        xAxis: {
                          axisTick: {show: false},
                            type: 'category',
                            boundaryGap: false,
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: 'rgb(108, 102, 255, 0.9)',
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: 'rgb(108, 102, 255, 0.9)',
                                }
                            },
                            axisLabel: {
                                color: 'rgb(108, 102, 255, 0.9)',
                                fontFamily: 'Gilroy',
                                fontSize: 14,
                                padding: [15, 0, 0, 5]
                            },
                            data: date
                        },
                        yAxis: {
                          axisTick: {show: false},
                            type: 'value',
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: 'rgb(108, 102, 255, )',
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#6c66ff',
                                }
                            },
                            axisLabel: {
                                color: '#6c66ff',
                                fontFamily: 'Gilroy',
                                fontSize: 14,
                                padding: [0, 10, 0, 0]
                            },
                        },
                        series: [{
                            data: rate,
                            type: 'line',
                            symbolSize: 6,
                            smooth: true,
                            itemStyle: {
                                color: '#6c66ff',
                            },
                            lineStyle: {
                                color: '#6c66ff',
                                width: 1
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(108, 102, 255, 0.9)' 
                                }, {
                                    offset: 1,
                                    color: 'rgb(108, 102, 255, 0.2)'
                                }])
                            }
                        }]
                      };
                      myChart.setOption(option);
                }, 2000);
        }

        if (iSmyChart2 == false) {
            iSmyChart2 = true
                setTimeout(function(){
                    var chartData = {"rate":["1","4.5","5.4","10", "10.4", "9.6"],"date":["","","","",""]};
                    var date = chartData.date;
                    var rate = chartData.rate;
                    var option = {
                        grid: {
                            left: '-35',
                            right: '-50',
                            bottom: '-40',
                            top: '10',
                            containLabel: false
                        },
                        xAxis: {
                          axisTick: {show: false},
                            type: 'category',
                            boundaryGap: false,
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#f8f8fa'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#f8f8fa',
                                }
                            },
                            axisLabel: {
                                color: '#21232b',
                                fontFamily: 'Gilroy',
                                fontSize: 14,
                                padding: [15, 0, 0, 5]
                            },
                            data: date
                        },
                        yAxis: {
                          axisTick: {show: false},
                            type: 'value',
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#f8f8fa'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#f8f8fa'
                                }
                            },
                            axisLabel: {
                                color: '#21232b',
                                fontFamily: 'Gilroy',
                                fontSize: 14,
                                padding: [0, 10, 0, 0]
                            },
                        },
                        series: [{
                            data: rate,
                            type: 'line',
                            symbolSize: 6,
                            smooth: true,
                            itemStyle: {
                                color: 'rgb(255, 150, 65)'
                            },
                            lineStyle: {
                                color: 'rgb(255, 150, 65)',
                                width: 1
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 150, 50, 0.5)' 
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 150, 50, 0.1)'
                                }])
                            }
                        }]
                    };
                    myChart2.setOption(option);
                    }, 1000);
            }

            if (iSmyChart3 == false) {
                iSmyChart3 = true
                  setTimeout(function(){
                    var chartData = {"rate":["1","4.5","5.4","10", "10.4", "9.6"],"date":["","","","",""]};
                    var date = chartData.date;
                    var rate = chartData.rate;
                    var option = {
                        grid: {
                            left: '-35',
                            right: '-50',
                            bottom: '-40',
                            top: '10',
                            containLabel: false
                        },
                        xAxis: {
                          axisTick: {show: false},
                            type: 'category',
                            boundaryGap: false,
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#f8f8fa'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#f8f8fa',
                                }
                            },
                            axisLabel: {
                                color: '#21232b',
                                fontFamily: 'Gilroy',
                                fontSize: 14,
                                padding: [15, 0, 0, 5]
                            },
                            data: date
                        },
                        yAxis: {
                          axisTick: {show: false},
                            type: 'value',
                            splitLine: {
                                show: false,
                                lineStyle: {
                                    color: '#f8f8fa'
                                }
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#f8f8fa'
                                }
                            },
                            axisLabel: {
                                color: '#21232b',
                                fontFamily: 'Gilroy',
                                fontSize: 14,
                                padding: [0, 10, 0, 0]
                            },
                        },
                        series: [{
                            data: rate,
                            type: 'line',
                            symbolSize: 6,
                            smooth: true,
                            itemStyle: {
                                color: '#3bca55'
                            },
                            lineStyle: {
                                color: '#3bca55',
                                width: 1
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(59, 202, 85, 0.4)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(59, 202, 85, 0)'
                                }])
                            }
                        }]
                    };
                    myChart3.setOption(option);
                });
            }
        }
    });
 });
  });