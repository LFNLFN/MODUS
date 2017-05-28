window.onload = function() {
  
  var oPortList = document.getElementById('Port-List');
  var oPORT = document.getElementById('PORT');
  
  oPORT.onmouseover = function() {
    var oStyleSheet=document.styleSheets[0];
    var oRule=oStyleSheet.rules || oStyleSheet.cssRules ;
    oRule["port_list"].style.display='block';
    }

}