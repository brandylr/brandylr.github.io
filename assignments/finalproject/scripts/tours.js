    var emerald = document.querySelector('section.emerald');
    var cottonwood = document.querySelector('section.cottonwood');
    var sourdough = document.querySelector('section.sourdough');

    var requestURL = 'data/tours.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var information = request.response;
        tourInfo(information);
        
    
    function tourInfo(jsonObj) {
        var trail = jsonObj['tours'];
        
        for (var i = 0; i < trail.length; i++) {

            var myArticle = document.createElement('article');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
          
            
            myH3.textContent = trail[i].name;
            myPara1.textContent = 'Length: ' + trail[i].length;
            myPara2.textContent = 'Start Time: ' + trail[i].startTime;
            myPara3.textContent = 'Duration: ' + trail[i].duration;
            myPara4.textContent = 'Skill Level: ' + trail[i].skillLevel;
            myPara5.textContent = 'Cost: ' + trail[i].cost;
            
            
            
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            
            
            if (trail[i].name == "Emerald Lake Trail") {
                emerald.appendChild(myArticle);
            } else if (trail[i].name == "South Cottonwood Trail") {
                cottonwood.appendChild(myArticle);
            } else if (trail[i].name == "Sourdough Trail") {
                sourdough.appendChild(myArticle);
            }
        }
    }
    }