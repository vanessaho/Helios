// API KEY ALPHA VANTAGE 4V307LSOOE6QODIF 

const header = document.getElementById('header');
const content = document.getElementById('content');
const footer = document.getElementById('footer');

// HEADER
const logo = document.createElement('img');
logo.setAttribute('id', 'logo');
logo.src = 'assets/img/mangrove.svg';
header.appendChild(logo);

const options = document.createElement('ul');
options.setAttribute('id', 'nav');

login = document.createElement('li');
link1 = document.createElement('a');
link1.href = "signin.html";
link1.textContent = "Log In";
login.appendChild(link1);

signup = document.createElement('li');
link2 = document.createElement('a');
link2.href = "signup.html";
link2.textContent = "Sign Up";
signup.appendChild(link2);

options.appendChild(login);
options.appendChild(signup);
header.appendChild(options);

// CONTENT
const intro = document.createElement('section');
const layer = document.createElement('div');
intro.setAttribute('id', 'intro');
layer.setAttribute('class', 'layer');
intro.appendChild(layer);
content.appendChild(intro);

var hText = document.createElement('h2');
hText.textContent = "Invest and Build Your Roots";
hText.setAttribute('id', 'hText');
intro.appendChild(hText);

var mText = document.createElement('h5');
mText.textContent = "Grow your money and be kind to our planet";
mText.setAttribute('id', 'mText');
intro.appendChild(mText);

var sText = document.createElement('p');
sText.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis earum reiciendis cum vitae vel minima, tenetur fugiat doloribus dolorem quod commodi sit neque magni. Nulla neque cupiditate sint optio porro?";
sText.setAttribute('id', 'sText');
intro.appendChild(sText);

var getStarted = document.createElement('a');
getStarted.href = "signup.html";
getStarted.textContent = "Get Started";
getStarted.setAttribute('id', 'lm');
intro.appendChild(getStarted);

var showLists = function() {
    window.location.href = "/lists.html";
}

var cntr = document.createElement('div');
cntr.setAttribute('id', 'cntr');
cntr.setAttribute('onclick', 'showLists();');
cntr.onclick = function() {showLists();};
var learnMore = document.createElement('span');
learnMore.textContent = "Learn More";
var arrow = document.createElement('i');
arrow.setAttribute('class', 'fas fa-angle-double-down');
cntr.appendChild(learnMore);
cntr.appendChild(arrow);
intro.appendChild(cntr);