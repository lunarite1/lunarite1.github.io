function fnGetElementsByName(){
  var accessTag=document.getElementsByName("input_name1")[0];
  console.log(accessTag.tagName);
  accessTag.setAttribute("value","Q & A");
}
