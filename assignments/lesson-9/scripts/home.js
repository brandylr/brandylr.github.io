    var franklin = document.querySelector('section.franklin');
    var greenville = document.querySelector('section.greenville');
    var springfield = document.querySelector('section.springfield');

    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var information = request.response;
        townInfo(information);
        
    
    function townInfo(jsonObj) {
        var town = jsonObj['towns'];
        
        for (var i = 0; i < town.length; i++) {
            if (i == 2) {continue;}
            var myArticle = document.createElement('article');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myList = document.createElement('ul');
            
            myH3.textContent = town[i].name;
            myPara1.textContent = 'Motto: ' + town[i].motto;
            myPara2.textContent = 'Year Founded: ' + town[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + town[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + town[i].averageRainfall + "in";
            myPara5.textContent = 'Upcoming Events: '
            
            var townEvents = town[i].events;
            for (var j = 0; j < townEvents.length; j++) {
                var listItem = document.createElement('li');
                listItem.textContent = townEvents[j];
                myList.appendChild(listItem);
            }
            
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            myArticle.appendChild(myList);
            
            if (town[i].name == "Franklin") {
                franklin.appendChild(myArticle);
            } else if (town[i].name == "Greenville") {
                greenville.appendChild(myArticle);
            } else if (town[i].name == "Springfield") {
                springfield.appendChild(myArticle);
            }
        }
    }
    }