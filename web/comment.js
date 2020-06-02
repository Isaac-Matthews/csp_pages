function myFunction() {
  document.getElementById("demo").innerHTML = "Javascript has been run safely";
  alert("ran js");
}

document.getElementById("button2").addEventListener('click',myFunction);
