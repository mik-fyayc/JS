function changeTabs(num) {
  var accordeonBox = document.getElementsByClassName('accordeon-box');
  var directoryPath = window.location.pathname.split('/').slice(0, -1).join('/').substr(1);

  for(var i = 0; i <= accordeonBox.length - 1; i++) {
    var currentBox = accordeonBox[i];
    var tabHeading = currentBox.childNodes[1];
    var tabContent = currentBox.childNodes[3];
    var carretImg = tabHeading.childNodes[2];
    var tabHeadingTxt = tabHeading.childNodes[0];


    if(currentBox.dataset.number == num) {
      var isHidden = tabContent.classList.contains('tab-hidden');

      //show if hidden hide if not
      if(isHidden){
        tabContent.classList.remove("tab-hidden");
        tabHeadingTxt.innerHTML = "Click to close";
        carretImg.src = directoryPath + "/images/caret.png";
      }else{
        tabContent.className += " tab-hidden";
        tabHeadingTxt.innerHTML = "Click to open";
        carretImg.src = directoryPath + "/images/caret-right.png";
      }

    }else{
      //hide all other tabs, chenge img to caret, change text to open
      tabContent.className += " tab-hidden";
      tabHeadingTxt.innerHTML = "Click to open";
      carretImg.src = directoryPath + "/images/caret-right.png";
    }
  }

}
