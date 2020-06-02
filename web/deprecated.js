function myDate() {
  var today = new Date();
  var str = today.toGMTString();
  document.getElementById("date").innerHTML = str;
}

document.getElementById("button").addEventListener('click',myDate);

function callerCheck() {
  if (callerCheck.caller == null) {
    document.getElementById("call").innerHTML = 'The function was called from the top!';
  } else {
    document.getElementById("call").innerHTML = 'This function\'s caller was ' + callerCheck.caller;
  }
}

document.addEventListener("DOMContentLoaded", callerCheck)
