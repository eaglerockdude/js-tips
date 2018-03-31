/**
 * Created by kenmcfadden on 2/6/18.
 */
// SetTimeout and SetInterval can be used to create asynchronous functions


function callback() {
  console.log('Inside of callback');
}

var delay = 1000;

setTimeout(callback, delay);

setTimeout(function() {console.log('defining the function in the function')}, 2000);

// setTimeout returns an ID which you can use to cancel it:

var timerId = setTimeout(function() {console.log('example canceling a setTimeout')}, 2000);

clearTimeout(timerId);

// setInterval

var num =0;
var intvId = setInterval (function () {
  num++;
  console.log('Number :' + num);
  if (num === 7) {
    clearInterval(intvId)
    console.log('Interval cleared')
  }
},1000);


