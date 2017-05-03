/* 
* @Author: Marte
* @Date:   2017-03-10 15:22:11
* @Last Modified by:   Marte
* @Last Modified time: 2017-03-12 00:08:50
*/


$(document).ready(function(){
    // 第一页js效果
    (function(){
        $('.pageOneIco10').click(function(){
			playSound('audio-door',false) ;//播放开门音乐
            $(this).fadeTo(400,0);
            $('.pageOneIco8').animate({left:'-50%'},2500,'swing');
            $('.pageOneIco9').animate({right:'-50%'},2500,'swing');
            $('.pageOneIco1').addClass('animation1');
            $('.pageOneIco2').addClass('animation2');
            $('.pageOneIco3').addClass('animation3');
            $('.pageOneIco4').addClass('animation4');
            $('.pageOneIco6').addClass('animation6');
            $('.pageOneMeiHua').addClass('animation6');
            $('.pageOneIco6').click(function(){
                $('.pageOneIco6 img').attr('src','static/images/zheshan1.gif');
				playSound('audio-zheshan',false) ;
                $('.pageOneIco5').removeClass('none').addClass('animation5');
                $('.pageOneIco7').removeClass('none').addClass('animation7');
                $('.redIco1').show(400);
                $(".page1").swipe({
                    swipe:function(event, direction, distance, duration, fingerCount) {
                        if(direction == "up"){
                            $(".page1").addClass("fadeOut  animated").addClass("none");
                            $('.page2').addClass('fadeIn animated').removeClass('none');
                            setTimeout(function(){
                                $('.redIco2').show(400);
                            },6500);
                        }
                    }
                });
            });
            // $('.pageOneIco6').addClass('animation8');
        });
        //页面1上滑动
        
    })();
    //第二页的js效果
    (function(){
        $(".page2").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(".page2").addClass("fadeOut  animated").addClass("none");
                    $('.page3').addClass('fadeIn animated').removeClass('none');
                    chuanghuatext();
                    $('.p3button').click(function(){
						stopSound('audio-bg',true);
                         $(".page3").addClass("fadeOut  animated").addClass("none");
                        $('.page4').addClass('fadeIn animated').removeClass('none');
						playSound('audio-cbg',true) ;
                        setTimeout(function(){
                            $('.redIco3').show(400);
                        },5000);
                    })
                }
            }
        })
    })();
    //第四页的js效果
    (function(){
        $(".page4").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(".page4").addClass("fadeOut  animated").addClass("none");
                    $('.page5').addClass('fadeIn animated').removeClass('none');
                    setTimeout(function(){
                        $('.page5dialog').show(500);
                        $('.page5dialog').click(function(){
                            $(".page5").addClass("fadeOut  animated").addClass("none");
                            $('.wrapper').addClass('fadeIn animated').removeClass('none');
                            // 第六页js效果
                            (function(){
                                //改变ul的translateY
                                var translateY=7.5;
                                console.log(translateY);
                                var i=0;
                                maxLen=$('.section ul li').length;
                                playSound('audio-weixin',false) ;
                                var wyxh;
                                function weiyi(){
                                    if(i<maxLen-5){
                                        i++;
                                    }else{
                                        i=maxLen-5;
                                    }
                                    $('.section ul').addClass('transform').css({'transform':'translateY(-' +i*translateY +'rem)','-webkit-transform':'translateY(-' +i*translateY + 'rem)'});
                                    playSound('audio-weixin',false) ;
                                }
                                setTimeout(function(){
                                    wyxh=setInterval(weiyi,1700);
                                }, 6400)
                                //21S之后小手出现
                                setTimeout(function(){
                                    clearInterval(wyxh);
                                   $('.page6IcoShou').show(500);
                                   $('.page6IcoShou').click(function(){
                                        $(".wrapper").addClass("fadeOut  animated").addClass("none");
                                        $('.page7').addClass('fadeIn animated').removeClass('none');
                                        setTimeout(function(){
                                            $('.redIco4').show(400);
                                        },5000);
                                        //第七页动画效果
                                        $('.page7Ico2').animate({'left':'13.1875rem','top':'14.0625rem'},4000,'swing');
                                        $('.page7Ico3').animate({'left':'-36%','top':'-33%'},4000,'swing');
                                   })
                                },21000);
                                //将JQuery对象转换为DOM对象
                                // setTimeout(function(){
                                //     t = setInterval(function(){
                                //         musicBox.play();
                                //     }, 1700);
                                // }, 3000);
                                // setTimeout(function(){
                                //     clearInterval(t);
                                // }, 20600);
                            })(); 
                        });
                    },16000);
                }
            }
        })
    })();
    //第七页js效果
    (function(){
        $(".page7").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(".page7").addClass("fadeOut  animated").addClass("none");
                    $('.map').addClass('fadeIn animated').removeClass('none');
                    setTimeout(function(){
                        $('.redIco5').show(400);
                    },10000);
                    //第八页js效果
                    (function(){
                        setTimeout(function(){
                            $('.page8XiaoTuBiao').fadeIn(400);
                            setTimeout(function(){
                                $('.page8XiaoTuBiao').fadeOut(400);
                                $('.page8Text').fadeIn(400);
                                setTimeout(function(){
                                    $('.page8Text').fadeOut(400);
                                    //tab切换
                                    $('.s-map').click(function(){
                                    var index=$(this).index();
                                    console.log(index);
                                    $(this).parent('.mapIco').siblings('.mapText').find('.s-text').eq(index).show(400).siblings('.s-text').hide(400);
                                    });
                                },3000);
                            },3000);
                        },5000);
                        $(".map").swipe({
                            swipe:function(event, direction, distance, duration, fingerCount) {
                                if(direction == "up"){
                                    $(".map").addClass("fadeOut  animated").addClass("none");
                                    $('.endPage').addClass('fadeIn animated').removeClass('none');
                                }
                            }
                        });
                    })();
                }
            }
        });
    })();
    //第八页的js效果
    (function(){
        $('.wuhan').click(function(){
            $(".map").addClass("fadeOut  animated").addClass("none");
            $('.program1').addClass('fadeIn animated').removeClass('none');
            setTimeout(function(){
                $('.redIco6').show(400);
            },3000);
        });
        $('.tanghu').click(function(){
            $(".map").addClass("fadeOut  animated").addClass("none");
            $('.program1').addClass('fadeIn animated').removeClass('none');
            setTimeout(function(){
                $('.redIco6').show(400);
            },1500);
        })
    })();
    //第九页的js效果
    (function(){
        $(".program1").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(".program1").addClass("fadeOut  animated").addClass("none");
                    $('.program2').addClass('fadeIn animated').removeClass('none');
                    setTimeout(function(){
                        $('.redIco7').show(400);
                    },1500);
                }
            }
        });
    })();
    //第十页的js效果
    (function(){
        $(".program2").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                if(direction == "up"){
                    $(".program2").addClass("fadeOut  animated").addClass("none");
                    $('.endPage').addClass('fadeIn animated').removeClass('none');
                }
            }
        });
    })();
    //小浮窗出现的时间
    // setTimeout(function(){
    //     $('.redIco').fadeIn(500);
    // },5000);
    // 音乐部分的js
    (function(){
        //控制音乐暂停播放
        var i=0;
        var misk=document.getElementById('misk');
        //audio.play();
        misk.onclick=function(){
            i++;
            //判断点击是单数还是复数
            if(i%2==0){
                // audio.play();
                $('#misk img').attr('src','static/images/music.png')
                $('#misk img').css('animation','music 2s linear infinite running');
				playAllSound();
            }
            else{
                // audio.pause();
                $('#misk img').css('animation','music 2s linear infinite paused');
                $('#misk img').attr('src','static/images/musicStop.png');
				stopAllSound() ;//背景音乐停止
            }
        }
    })();
});