
var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function() {
 console.log('Ready state is ' + XHR.readyState)
} ;
XHR.open("GET","https://api.github.com/zen");
XHR.send();



