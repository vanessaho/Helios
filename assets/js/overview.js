const overview = document.getElementById("ov");

function active(obj) {
    var list = document.getElementsByClassName("nav-link");
    for (var i = 0; i < list.length; i++) {
        list[i].classList.remove("active");
    }
    obj.classList.add("active");
}


var request = new XMLHttpRequest();

request.open('GET', 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=ASTI&outputsize=full&apikey=4V307LSOOE6QODIF', true);

request.onload = function() {
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        console.log(data["Meta Data"]);  
    } else {
        const errorMessage = document.createElement('h1');
        errorMessage.textContent = 'It is not working :(';
        overview.appendChild(errorMessage);
    }
}

request.send();