
            var banner = document.getElementById('banner');
            var list = document.getElementById('list');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var len = 2;
            var interval = 10;
            var timer;
            


            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var list = document.getElementById('list');
                var left = parseInt(list.style.left) + offset;
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
         