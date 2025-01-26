document.addEventListener('DOMContentLoaded', function() {
    var hourWrap = document.querySelector('.hour-wrap');
    var hourFront = hourWrap.querySelector('.digit-top .front');
    var hourBack = hourWrap.querySelector('.digit-top .back');
    var hourTop = hourWrap.querySelector('.digit-top');
    var hourBottom = hourWrap.querySelector('.digit-bottom .front');
    
    var minWrap = document.querySelector('.min-wrap');
    var minFront = minWrap.querySelector('.digit-top .front');
    var minBack = minWrap.querySelector('.digit-top .back');
    var minTop = minWrap.querySelector('.digit-top');
    var minBottom = minWrap.querySelector('.digit-bottom .front');
    
    var currentHour = -1;
    var currentMin = -1;

    function setClock() {
        var time = new Date();
        var hour = time.getHours();
        var min = time.getMinutes();

        if(currentHour != hour) {
            currentHour = hour;
            var hourText = hour < 10 ? '0' + hour : hour;
            
            // Créer nouvel élément pour l'animation
            var newHourTop = hourTop.cloneNode(true);
            var newHourFront = newHourTop.querySelector('.front');
            var newHourBack = newHourTop.querySelector('.back');
            
            newHourFront.textContent = hourText;
            hourWrap.appendChild(newHourTop);
            
            // Animation
            hourFront.style.transform = 'rotateX(180deg)';
            hourBack.style.transform = 'rotateX(0deg)';
            hourBack.style.zIndex = '40';
            hourBack.textContent = hourText;
            
            setTimeout(function() {
                hourTop.remove();
                hourFront.remove();
                hourBack.remove();
                hourTop = newHourTop;
                hourFront = newHourFront;
                hourBack = newHourBack;
                hourTop.style.zIndex = '10';
                hourBottom.textContent = hourText;
            }, 800);
        }

        if(currentMin != min) {
            currentMin = min;
            var minText = min < 10 ? '0' + min : min;
            
            var newMinTop = minTop.cloneNode(true);
            var newMinFront = newMinTop.querySelector('.front');
            var newMinBack = newMinTop.querySelector('.back');
            
            newMinFront.textContent = minText;
            minWrap.appendChild(newMinTop);
            
            minFront.style.transform = 'rotateX(180deg)';
            minBack.style.transform = 'rotateX(0deg)';
            minBack.style.zIndex = '40';
            minBack.textContent = minText;
            
            setTimeout(function() {
                minTop.remove();
                minFront.remove();
                minBack.remove();
                minTop = newMinTop;
                minFront = newMinFront;
                minBack = newMinBack;
                minTop.style.zIndex = '10';
                minBottom.textContent = minText;
            }, 800);
        }
    }

    setInterval(setClock, 1000);
    setClock(); // Initial call
});
