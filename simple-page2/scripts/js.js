(function() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      successAjax(JSON.parse(this.responseText));
    }
  };

  xhttp.open("GET", "https://simple-page123.firebaseio.com/.json");
  xhttp.send();
})();


function successAjax(result) {
  appendTxt('#header-heading', result['header']['headline']);
  appendTxt('#header-subheading', result['header']['subHeadline']['text']);
  appendTxt('.main .main-content', result['main']['text']);
  appendTxt('.footer .footer-txt', result['footer']['footerText']);

  var menuItems = result['nav']['menuItems'];
  for (var item in menuItems) {
    createNavLiAndA(item, 'main-nav-ul');
    createNavLiAndA(item, 'mobile-nav-ul');
  }
}

//append text to the wanted element
function appendTxt(element, text) {
  document.querySelector(element).innerHTML = text;
}

//append li and a to the nav ul
function createNavLiAndA(item, elementId) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.href += '/';
  a.title += item;
  var t = document.createTextNode(item);
  a.appendChild(t);
  li.appendChild(a);
  document.getElementById(elementId).appendChild(li);
}

//show hide mobile menu on small screen
function showHideMenu() {
  var mobileUl = document.getElementById('mobile-nav-ul');
  if(mobileUl.style.display == "none") {
    mobileUl.style.display = "block";
  }else{
    mobileUl.style.display = "none";
  }
}
