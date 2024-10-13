function myFunction() {
    document.getElementById("result1").innerHTML = 
    document.getElementById("demo").firstChild.nodeValue;
    document.getElementById("result2").innerHTML = 
    document.getElementById("demo").childNodes[0].nodeValue;
}