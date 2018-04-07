import kata  from "./lib/kata";

var str = document.getElementById("data").value
var data = JSON.parse("[" + str + "]");
let ans = new kata().Do(data)
document.getElementById("ans").innerText = ans


