// 干翻ACFun小表情点击量

function clickOnece(){
  document.getElementsByClassName("footer-avatar-ac")[0].click();
}

//0.1秒点一次
var ComboTimeInterval = 100;

if(!fuckAcfunEmoje||fuckAcfunEmoje == null){
  var fuckAcfunEmoje = setInterval(clickOnece,ComboTimeInterval);
  (function(){})();
}else{
  clearInterval(fuckAcfunEmoje);
  fuckAcfunEmoje = null;
}
