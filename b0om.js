// 干翻ACFun小表情点击量
if(fuckAcfunEmoje){
  clearInterval(ttt);
  fuckAcfunEmoje = false;
}

function clickOnece(){
  document.getElementsByClassName("footer-avatar-ac")[0].click();
}

fuckAcfunEmoje = setInterval(clickOnece,13);
(function(){})();
