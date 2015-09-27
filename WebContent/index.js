

            var banner;
            var list;
            var prev;
            var next;
            var len = 2;
            var interval = 10;
            var timer;
            
$(document).ready(function(){
            banner = document.getElementById('banner');
            list = document.getElementById('list');
            prev = document.getElementById('prev');
            next = document.getElementById('next');

});

            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt($('#list').css("left")) + offset;
                console.log("offset:"+offset+" speed:" + speed + " left:"+left);
                var go = function (){
                    if ( (speed > 0 && parseInt($('#list').css("left")) < left) || (speed < 0 && parseInt($('#list').css("left")) > left)) {
                        $('#list').css("left", parseInt($('#list').css("left")) + speed + 'px');
                        setTimeout(go, inteval);
                    }
                    else {
                        $('#list').css("left", left + 'px');
                        if(left>-1200){
                            $('#list').css("left",  parseInt($('#list').css("left")) -1200 * len + 'px');
                        }
                        if(left<(-1200* len)) {
                            $('#list').css("left", parseInt($('#list').css("left")) -1200 + 'px');
                        }
                    }
                }
                go();
            }


           function turnleft () {

              
                animate(1200);
            
           }



            function turnright (){

              
                animate(-1200);
            }
         