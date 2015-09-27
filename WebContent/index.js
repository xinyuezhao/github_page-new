

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
                console.log("animate:"+offset+" style.left:"+list.style.left+" left:"+left);
                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-1200){
                            list.style.left = -1200 * len + 'px';
                        }
                        if(left<(-1200* len)) {
                            list.style.left = -1200+'px';
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
         